import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("/api/admin/books");
      setBooks(res.data);
    };
    const fetchUsers = async () => {
      const res = await axios.get("/api/admin/users");
      setUsers(res.data);
    };
    fetchBooks();
    fetchUsers();
  }, []);

  const handleAddBook = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/admin/book", {
      title,
      author,
      publishedDate,
    });
    setBooks([...books, res.data]);
    setTitle("");
    setAuthor("");
    setPublishedDate("");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleAddBook}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Published Date</label>
          <input
            type="date"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
