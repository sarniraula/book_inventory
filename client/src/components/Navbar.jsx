import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-primary p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-heading">Book Inventory</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <Link to="/add-book" className="hover:text-gray-700">Add Book</Link>
          <Link to="/books" className="hover:text-gray-700">Book List</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
