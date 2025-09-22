const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // Enable CORS for frontend-backend communication
app.use(express.json()); // Parse JSON request bodies

// Sample user data (replace this with your database)
const users = [
  { email: "test@example.com", password: "password123" },
];

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Login successful
    res.status(200).json({ message: "Login successful" });
  } else {
    // Invalid credentials
    res.status(401).json({ message: "Invalid email or password" });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
