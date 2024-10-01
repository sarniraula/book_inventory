import React from 'react'
import { useNavigate } from 'react-router-dom';

const BookCard = ({book}) => {
  const navigate = useNavigate();
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
    </div>
  )
}

export default BookCard
