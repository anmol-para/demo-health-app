const express = require("express");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Demo Health App is running!");
});

// Health check endpoint

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});