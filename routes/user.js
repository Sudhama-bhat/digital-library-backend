const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { getBooks, borrowBook } = require("../controllers/userController");

router.get("/books", auth, getBooks);
router.post("/borrow", auth, borrowBook);

module.exports = router;
