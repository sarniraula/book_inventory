import Inventory from '../models/Inventory.js';
import pkg from 'json2csv';
import { Op } from 'sequelize'; // Import Sequelize operators

const { Parser } = pkg;

// Get all Books
export const getAllBooks = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Default: 10 items per page
    const offset = (page - 1) * limit;

    // Count the total number of books
    const totalBooks = await Inventory.count();

    // Fetch the books with pagination
    const books = await Inventory.findAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['title', 'ASC']] // Order by Alphabetical order
    });

    if (books.length === 0) {
      return res.status(404).json({ error: 'No books found' });
    }

    // Send back the paginated data and total book count
    res.json({
      books,
      totalBooks,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalBooks / limit),
    });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};


// Add a new Book
export const addBook = async (req, res) => {
  try {
    const { title, author, isbn } = req.body;

    // Ensure all required fields are present
    if (!title || !author || !isbn) {
      return res.status(400).json({ error: 'Title, author, and ISBN are required.' });
    }

    const book = await Inventory.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    console.error('Error adding inventory item:', error);
    res.status(500).json({ error: 'Failed to add inventory item' });
  }
};

// Update Book by ID
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre, publicationDate, isbn, quantity } = req.body;

    const item = await Inventory.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    item.title = title;
    item.author = author;
    item.publicationDate = publicationDate;
    item.genre = genre;
    item.isbn = isbn;
    item.quantity = quantity;

    await item.save();
    res.json(item);
  } catch (error) {
    console.error('Error updating inventory item:', error);
    res.status(500).json({ error: 'Failed to update inventory item' });
  }
};

// Delete book by ID
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Inventory.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    await item.destroy();
    res.status(204).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting inventory item:', error);
    res.status(500).json({ error: 'Failed to delete inventory item' });
  }
};

// Filter inventory by author, genre or title based on query parameters

export const filterInventory = async (req, res) => {
  const { author, genre, title } = req.query;

  try {
    const filterOptions = {};

    // Apply case-insensitive, partial matching filters
    if (author) filterOptions.author = { [Op.iLike]: `%${author}%` };
    if (genre) filterOptions.genre = { [Op.iLike]: `%${genre}%` };
    if (title) filterOptions.title = { [Op.iLike]: `%${title}%` };

    // Find all books matching the filter options
    const books = await Inventory.findAll({ where: filterOptions });

    if (books.length === 0) {
      return res.status(404).json({ error: 'No items found' });
    } else {
      res.json({ books });
    }

  } catch (error) {
    console.error('Error filtering inventory:', error);
    res.status(500).json({ error: 'Failed to filter inventory' });
  }
};


//Controller to export book as CSV
export const exportBooksAsCSV = async (req, res) => {
  try {
    const books = await Inventory.findAll();
    const jsonBooks = books.map(book => book.toJSON());
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(jsonBooks);

    res.header('Content-Type', 'text/csv');
    res.attachment('books.csv');
    res.send(csv);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const exportBooksAsJSON = async (req, res) => {
  try {
    const books = await Inventory.findAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};