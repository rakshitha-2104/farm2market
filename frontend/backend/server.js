const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = 5000; // match React frontend

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "🌾 Farm2Market Backend is running successfully!" });
});

// Use API routes
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`🌾 Server running on http://localhost:${PORT}`);
});
