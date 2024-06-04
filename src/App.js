// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import BookshelfPage from './components/BookshelfPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <button className='link-button'><Link style={{ textDecoration: 'none' }} to="/">Search Books</Link></button>
          <button className='link-button'>
          <Link  style={{ textDecoration: 'none' }}  to="/bookshelf">My Bookshelf</Link></button>
          
          
        </nav>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/bookshelf" element={<BookshelfPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
