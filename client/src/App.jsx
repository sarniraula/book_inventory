import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BooksListPage from './pages/BooksListPage';
import BookDetails from './components/BookDetails';
import BookForm from './pages/BookForm';

const App = () => {
  return (
    <div className='bg-backgroundColor'>
      <Navbar />
      <div className="min-h-screen bg-light">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add-book' element={<BookForm isUpdate={false}/>} />
          <Route path='/books' element={<BooksListPage />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/update/:bookId" element={<BookForm isUpdate={true}/>} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
