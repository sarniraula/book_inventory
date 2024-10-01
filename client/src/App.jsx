import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BooksListPage from './pages/BooksListPage';

const App = () => {
  return (
    <div className='bg-backgroundColor'>
      <Navbar />
      <div className="min-h-screen bg-light">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add-book' element={<AddBookPage />} />
          <Route path='/books' element={<BooksListPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
