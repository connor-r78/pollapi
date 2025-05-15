// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5163;  // You can change this to any port you like

app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// In-memory database (for now, just an array of posts)
let posts = [
  { id: 1, title: "First Post", body: "This is the first post" },
  { id: 2, title: "Second Post", body: "This is the second post" }
];

// GET endpoint to fetch all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// POST endpoint to add a new post
app.post('/api/posts', (req, res) => {
    const { president, vicePresident, treasurer, secretary, ipAddress, timestamp } = req.body;

    // Log the received data (for debugging)
    console.log('Received Data:', req.body);

    if (!president || !vicePresident || !treasurer || !secretary || !ipAddress || !timestamp) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Process the data (e.g., save to a database, etc.)
    // For now, we'll just respond with a success message
    res.status(201).json({
        message: 'Data successfully received',
        data: req.body,
    });
    });

    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
