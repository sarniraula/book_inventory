import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookCard = ({book, removeBook}) => {
  const [ bookToDelete, setBookToDelete ] = useState(null);
  const [ showModal, setShowModal ] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/books/${bookToDelete}`);
      removeBook(bookToDelete);
      setShowModal(false);
      setBookToDelete(null);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <div key={book.id} className="bg-white p-6 rounded-lg shadow-lg">
        <h2
          className="text-xl font-semibold text-primary mb-2 cursor-pointer hover:underline"
          onClick={() => navigate(`/book/${book.id}`)} // Navigate to book details
        >
          {book.title}
        </h2>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Author:</span> {book.author}
        </p>
        <p className="text-gray-600 mb-4">
            <span className="font-medium">Genre:</span> {book.genre}
        </p>

        {/* Button Container */}
        <div className="flex justify-between gap-4 md:justify-end mt-4 md:mt-auto">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-2 md:mb-0"
            onClick={() => navigate(`/update/${book.id}`)} // Navigate to update page
          >
            Update
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-lg"
            onClick={() => {
              setBookToDelete(book.id);
              setShowModal(true); // Show delete confirmation modal
            }}
          >
            Delete
          </button>
        </div>
      </div>

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
  )
}

export default BookCard
