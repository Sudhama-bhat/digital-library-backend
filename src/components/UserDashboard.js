import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("/api/user/books");
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  const handleBorrowBook = async (bookId) => {
    const userId = "exampleUserId"; // Replace with the actual user ID
    const res = await axios.post("/api/user/borrow", {
      bookId,
      userId,
      dueDate,
    });
    setBorrowedBooks(res.data);
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author}
            <button onClick={() => handleBorrowBook(book._id)}>Borrow</button>
          </li>
        ))}
      </ul>
      <h2>Borrowed Books</h2>
      <ul>
        {borrowedBooks.map((borrowed) => (
          <li key={borrowed.book._id}>
            {borrowed.book.title} by {borrowed.book.author}
            <span>Due: {new Date(borrowed.dueDate).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
