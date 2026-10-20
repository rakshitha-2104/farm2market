const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect API routes
const routes = require("./routes");
app.use("/api", routes);

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "🌾 Farm2Market Backend is running successfully!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🌾 Server running on http://localhost:${PORT}`);
});