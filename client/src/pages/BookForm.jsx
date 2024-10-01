import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaUser, FaList, FaBarcode, FaBox, FaCheck, FaTimes } from 'react-icons/fa'; // React icons

const BookFormPage = ({ isUpdate }) => {
  const { bookId } = useParams(); // Get book ID for update case
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
    isbn: '',
    quantity: 0,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (isUpdate && bookId) {
      // Fetch the book details when updating
      axios.get(`http://localhost:3000/api/books/${bookId}`)
        .then((response) => setFormData(response.data))
        .catch((error) => console.error('Error fetching book:', error));
    }
  }, [isUpdate, bookId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, author, genre, publicationDate, isbn, quantity } = formData;

    // Basic validation
    if (!title || !author || !genre || !publicationDate || !isbn || quantity <= 0) {
      setError('All fields are required and quantity must be greater than zero.');
      setSuccess('');
      return;
    }

    try {
      if (isUpdate) {
        await axios.put(`http://localhost:3000/api/books/${bookId}`, formData);
        setSuccess('Book updated successfully!');
      } else {
        await axios.post('http://localhost:3000/api/books', formData);
        setSuccess('Book added successfully!');
        setFormData({
          title: '',
          author: '',
          genre: '',
          publicationDate: '',
          isbn: '',
          quantity: 0,
        });
      }
      setError('');
      navigate('/books');
    } catch (error) {
      setError('Something went wrong. Please try again.');
      setSuccess('');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-heading text-gray-700 text-center mb-6">
        {isUpdate ? 'Update Book' : 'Add New Book'}
      </h1>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Use a grid to organize the form inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <FaBook /> Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-300 text-sm"
                placeholder="Enter the book title"
              />
            </div>
            {/* Author */}
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <FaUser /> Author
              </label>
              <input
                type="text"
                name="author"
                id="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-300 text-sm"
                placeholder="Enter the author name"
              />
            </div>
            {/* Genre */}
            <div>
              <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <FaList /> Genre
              </label>
              <input
                type="text"
                name="genre"
                id="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-300 text-sm"
                placeholder="Enter the book genre"
              />
            </div>
            {/* Publication Date */}
            <div>
              <label htmlFor="publicationDate" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <FaCalendarAlt /> Publication Date
              </label>
              <input
                type="date"
                name="publicationDate"
                id="publicationDate"
                value={formData.publicationDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-300 text-sm"
              />
            </div>
            {/* ISBN */}
            <div>
              <label htmlFor="isbn" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <FaBarcode /> ISBN
              </label>
              <input
                type="text"
                name="isbn"
                id="isbn"
                value={formData.isbn}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-300 text-sm"
                placeholder="Enter the ISBN"
              />
            </div>
            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <FaBox /> Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition duration-300 text-sm"
                placeholder="Enter the quantity"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-gradient-primary text-white py-2 px-4 rounded-md font-semibold text-sm hover:bg-gradient-accent transition duration-300 flex items-center justify-center gap-2"
          >
            {isUpdate ? <FaCheck /> : <FaCheck />} {isUpdate ? 'Update Book' : 'Add Book'}
          </button>

          {/* Error and Success Messages */}
          {error && (
            <div className="bg-red-100 text-red-600 py-2 px-4 rounded-md mt-4 text-sm flex items-center gap-2">
              <FaTimes /> {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 text-green-600 py-2 px-4 rounded-md mt-4 text-sm flex items-center gap-2">
              <FaCheck /> {success}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookFormPage;
