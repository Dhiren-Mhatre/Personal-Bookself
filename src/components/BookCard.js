// src/BookCard.js
import React from 'react';

const BookCard = ({ book, onAdd }) => {
  const { title, author_name, first_publish_year } = book;

  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>{author_name ? author_name.join(', ') : 'Unknown Author'}</p>
      <p>First Published: {first_publish_year}</p>
      <button  onClick={() => onAdd(book)}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
