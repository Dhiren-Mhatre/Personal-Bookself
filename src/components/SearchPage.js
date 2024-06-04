import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchPage.css';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim().length > 0) {
        fetchData();
      } else {
        setResults([]);
      }
    }, 500); // Debounce time in milliseconds

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      setResults(response.data.docs);
      setLoading(false);
    } catch (error) {
      // setError(error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const addToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  };

  return (
    <div className="search-page">
      <h1>Personal Bookshelf</h1>
      <input
        
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      {loading && <p className='loading' >Loading...</p>}
      {error && (
        <p className="error-message">Error fetching data: {error.message}</p>
      )}
      <div className="results">
        {results.map((book) => (
          <div key={book.key} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author_name && book.author_name.join(', ')}</p>
            <p>First Published: {book.first_publish_year}</p>
            <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default SearchPage;
