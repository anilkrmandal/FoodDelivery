const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const mongoDB = require('./db');

// Initialize MongoDB connection
mongoDB();

// Use CORS middleware to allow cross-origin requests from the React app
app.use(cors({
    origin: 'http://localhost:3000',  // Allow React app to make requests
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept']
}));

// Parse incoming JSON requests
app.use(express.json());

// Basic route to test server
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Use routes for the API
app.use('/api', require('./Routes/CreateUser'));

app.use('/api', require('./Routes/DisplayData'));
// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
