const Book = require("../models/Book");
const User = require("../models/User");

exports.addBook = async (req, res) => {
  const { title, author, publishedDate } = req.body;
  try {
    const newBook = new Book({ title, author, publishedDate });
    await newBook.save();
    res.json(newBook);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
