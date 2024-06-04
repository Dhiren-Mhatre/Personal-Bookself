// src/BookshelfPage.js
import React, { useEffect, useState } from 'react';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div className="bookshelf">
      {bookshelf.length > 0 ? (
        bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            <p>First Published: {book.first_publish_year}</p>
          </div>
        ))
      ) : (
        <p>No books in your bookshelf.</p>
      )}
    </div>
  );
};

export default BookshelfPage;
