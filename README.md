# Book Inventory Management System

This project is a **Book Inventory Management System** built with a React frontend, Tailwind CSS for styling, and a Node.js/Express backend with PostgreSQL as the database. The application allows users to add, edit, delete, and filter books. Additionally, users can export or import books in CSV and JSON format. 

This project was developed as part of a learning project and an assignment for an internship opportunity at **Second Bind**.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Features

- **CRUD Operations**: Add, edit, delete books.
- **Filtering**: Filter books by title, author, or genre with case-insensitive partial matching.
- **Export**: Export books as CSV or JSON.
- **Responsive UI**: The app is fully responsive with a clean UI using Tailwind CSS.
- **Pagination**: Browse through a large number of books efficiently.
  
## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Other**: CSV and JSON handling

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14 or higher)
- **PostgreSQL** (v13 or higher)
- **Git** installed on your local machine
- **npm** (or **yarn**) for dependency management

## Installation

Follow the instructions below to install and run the project locally.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/sahandghavidel/mern-blog.git
cd book-inventory-app
```

### 2. Install Dependencies
#### For Backend:
Navigate to the 'api' directory and install the dependencies:

```bash
cd api
npm install
```
#### For Frontend:
Navigate to the 'client' directory and install the dependencies:
```bash
cd client
npm install
```

### 3. Database Setup
#### 1. Create a PostgreSQL Database
Ensure PostgreSQL is running, then open the PostgreSQL shell and run the following SQL command to create the database:
```sql
CREATE DATABASE book_inventory;
```
#### 2. Configure Environment Variables
In the backend directory, create a '.env' file to define the environment variables:
```bash
cd ../backend
touch .env
```
Inside the .env file, add the following details (replace with your actual PostgreSQL credentials):
Also considering the default post being used.

```
DB_HOST=localhost
DB_USER=YOUR_DB_USER
DB_PASSWORD=YOUR_DB_PASSWORD
DB_PORT=5432
```
## Running The Application
#### 1. Start the Backend Server
In the backend directory, run the following command to start the server:
```
npm run dev
```
This will start the backend server at http://localhost:3000


#### 2. Start the Frontend
In the frontend directory, run the following command to start the React app:
```
npm run dev
```
This will start the frontend server at http://localhost:5173

## Project Structure
Here's an overview of the project's folder structure:
```
book-inventory-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   |── package.json
|   |── db.js
|   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   |── utils/
|   |   |── validators/
|   |   └── App.js
│   └── package.json
├── README.md
└── .gitignore
```

### Backend Structure:
**controllers/:** Contains the logic for API routes (CRUD, filtering, export, import).  
**models/:** Defines the database models.  
**routes/:** API routes for managing books.    

### Frontend Structure:
**src/components/:** Contains UI components like Navbar, Footer, BookCard etc.  
**src/pages/:** Contains UI for Pages  
**src/utils/:** Defines helper functions.    
**src/validators/:** Defines custom validators.    

### API Endpoints
Here is a list of available API endpoints in the backend:

#### Books API
```GET /api/books:``` Fetch all books.  
```POST /api/books:``` Add a new book.  
```PUT /api/books/:id:``` Update a book by ID.  
```DELETE /api/books/:id:``` Delete a book by ID.  
```GET /api/books/filter:``` Filter books by title, author, or genre.  

## A Part of a Learning Project
This project was developed as part of a learning project and an assignment for an internship opportunity at **Second Bind**.













