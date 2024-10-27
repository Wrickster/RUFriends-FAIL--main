const express = require('express'); // Import Express
const mongoose = require('mongoose'); // Import Mongoose
require('dotenv').config(); // Load environment variables from .env

const app = express(); // Create an instance of Express
const port = process.env.PORT || 5001; // Change to 5001 if you encounter conflicts

// Middleware to parse JSON
app.use(express.json());

const uri = process.env.MONGODB_URI; // Get the connection string from the environment variable

if (!uri) {
  console.error('MongoDB connection string is missing. Please set MONGODB_URI in your .env file.');
  process.exit(1); // Exit the application
}

mongoose.connect(uri)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
