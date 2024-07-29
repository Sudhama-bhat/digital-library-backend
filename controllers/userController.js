const Book = require("../models/Book");
const User = require("../models/User");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.borrowBook = async (req, res) => {
  const { bookId, dueDate } = req.body;
  try {
    const user = await User.findById(req.user.id);
    const book = await Book.findById(bookId);
    if (!book || !book.available) {
      return res.status(400).json({ msg: "Book not available" });
    }
    user.borrowedBooks.push({ book: bookId, dueDate });
    book.available = false;
    await user.save();
    await book.save();
    res.json(user.borrowedBooks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
