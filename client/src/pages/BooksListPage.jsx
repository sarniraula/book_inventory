import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { exportToCSV, exportToJSON } from '../utils/exportHelpers';
import BookCard from '../components/BookCard';

const BooksListPage = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('title'); // Default filter is by title
  const [filterActive, setFilterActive] = useState(false); // State to manage filter activation
  const [itemsPerPage, setItemsPerPage] = useState(9); // Number of books per page

  // Fetch books from the API
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        let response;
        if (filterActive) {
          response = await axios.get(
            `http://localhost:3000/api/books/filter?${filterCriteria}=${filterValue}`
          );
        } else {
          response = await axios.get(
            `http://localhost:3000/api/books?limit=${itemsPerPage}&page=${currentPage}`
          );
        }
        setBooks(response.data.books); // Set books data
        if (!filterActive) {
          setTotalPages(Math.ceil(response.data.totalBooks / itemsPerPage));
          setTotalBooks(response.data.totalBooks);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [currentPage, filterActive, filterValue, filterCriteria]);

  //This function is used to remove the book from the list once it is deleted from child component (BookCard)
  const removeBookFromList = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  // Handle Filter
  const handleFilter = () => {
    setFilterActive(true); // Enable filter mode
    setCurrentPage(1); // Reset page to 1 for filtered results
  };

  // Clear Filter
  const clearFilter = () => {
    setFilterValue('');
    setFilterActive(false); // Disable filter mode
    setCurrentPage(1); // Reset page to 1
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-heading text-center mb-8">Books Inventory</h1>

      {/* Filter Section */}
      <div className="mb-6">
        <div className="flex space-x-4">
          <select
            className="border border-gray-300 rounded-lg py-2 px-4"
            value={filterCriteria}
            onChange={(e) => setFilterCriteria(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="genre">Genre</option>
          </select>
          <input
            type="text"
            className="border border-gray-300 rounded-lg py-2 px-4"
            placeholder={`Search by ${filterCriteria}`}
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            onClick={handleFilter}
          >
            Filter
          </button>
          {filterActive && (
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-lg"
              onClick={clearFilter}
            >
              Clear Filter
            </button>
          )}
        </div>

        <div>
            <div className="flex justify-center mt-8">
                <button
                    className="bg-green-500 text-white py-2 px-4 rounded-lg mx-2"
                    onClick={() => exportToCSV(books)}
                >
                    Export to CSV
                </button>
                <button
                    className="bg-green-500 text-white py-2 px-4 rounded-lg mx-2"
                    onClick={() => exportToJSON(books)}
                >
                    Export to JSON
                </button>
            </div>
        </div>
      </div>

      {/* Main Books Component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} removeBook={removeBookFromList}/>
        ))}
      </div>

      {/* Pagination Controls */}
      {!filterActive && (
        <div className="mt-8 flex justify-center">
          <button
            className={`bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mx-2 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* Page Number Buttons */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`bg-blue-500 text-white py-2 px-4 rounded-lg mx-1 ${
                currentPage === index + 1 ? 'bg-blue-700' : ''
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mx-2 ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>

          <button
            className={`bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mx-2 ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => {
              setItemsPerPage(totalBooks);
              setFilterActive(true)
              setCurrentPage(1);
            }}
          >
            Show All
          </button>
        </div>
        
        
      )}

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Are you sure you want to delete this book?
            </h3>
            <div className="flex space-x-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
                onClick={handleDelete}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksListPage;
