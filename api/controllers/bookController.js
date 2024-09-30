import Inventory from '../models/Inventory.js';

// Get all Books
export const getAllBooks = async (req, res) => {
  try {
    const items = await Inventory.findAll();
    if (items.length === 0) {
      return res.status(404).json({ error: 'No items found' });
    } else {
      res.json(items);
    }
  } catch (error) {
    console.error('Error fetching inventory:', error);
    res.status(500).json({ error: 'Failed to fetch inventory' });
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
    if (author) filterOptions.author = author;
    if (genre) filterOptions.genre = genre;
    if (title) filterOptions.title = title;

    const filteredItems = await Inventory.findAll({ where: filterOptions });

    if (filteredItems.length === 0) {
      return res.status(404).json({ error: 'No items found' });
    } else {
      res.json(filteredItems);
    }

  } catch (error) {
    console.error('Error filtering inventory:', error);
    res.status(500).json({ error: 'Failed to filter inventory' });
  }
};