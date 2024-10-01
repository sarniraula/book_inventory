import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto py-12 text-center relative bg-gray-50">
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507537509458-b8312d35a233?auto=format&fit=crop&w=1400&q=80"
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 text-gray-800">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to the Book Inventory
        </h1>
        <p className="mb-6 text-xl">
          Easily manage, organize, and export your book collection!
        </p>
        
        <div className="mb-10">
          <img
            src="https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Books on a shelf"
            className="mx-auto rounded-lg shadow-lg max-w-lg"
          />
        </div>

        <div className="max-w-2xl mx-auto mt-10">
          <p className="text-lg text-gray-700">
            This is part of a learning project created as an assignment for the
            internship opportunity at <span className="font-semibold">Second Bind</span>.
            The goal is to demonstrate skills in building a full-stack book inventory
            management system using technologies like React, Node, Express, and PostgreSQL.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default HomePage;
