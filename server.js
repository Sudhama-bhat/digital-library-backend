const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const config = require("config");
const authRouter = require("./routes/auth");
// Load environment variables from .env file
require("dotenv").config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// CORS Configuration
app.use(cors());

// Define Routes
app.use("/api/auth", authRouter);
app.use("/api/admin", require("./routes/admin"));
app.use("/api/user", require("./routes/user"));
app.use;

const PORT = config.get("port") || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
