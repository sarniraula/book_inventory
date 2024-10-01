import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BookDetails = () => {
  const { bookId } = useParams(); // Get the book ID from the route
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch the book details from API
    fetch(`http://localhost:3000/api/books/${bookId}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error('Error fetching book details:', error));
  }, [bookId]);

  if (!book) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <button
          className="text-gray-600 flex items-center mb-4 hover:text-primary"
          onClick={() => navigate(-1)} // Navigate back
        >
          <FaArrowLeft className="mr-2" /> Back to List
        </button>

        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-primary">{book.title}</h1>

          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Genre:</span> {book.genre}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Published:</span> {book.publicationDate}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">ISBN:</span> {book.isbn}
          </p>
        </div>

        {/* Not Implemented yet */}
        {/* <div className="mt-6 text-gray-600 text-justify">
          <p>
            {book.description}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default BookDetails;
