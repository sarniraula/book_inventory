import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='bg-backgroundColor'>
      <Navbar />
      <div className="min-h-screen bg-light">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
