const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { addBook, getUsers } = require("../controllers/adminController");

router.post("/book", auth, addBook);
router.get("/users", auth, getUsers);

module.exports = router;
