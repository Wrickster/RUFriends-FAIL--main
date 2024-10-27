const express = require('express'); // Import Express
const mongoose = require('mongoose'); // Import Mongoose
const User = require('./models/User'); // Import the User model
require('dotenv').config(); // Load environment variables from .env
const path = require('path'); // Import path module

const app = express(); // Create an instance of Express
const port = process.env.PORT || 5001; // Change to 5001 if you encounter conflicts

// Middleware to parse JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve the index.html file
});

// MongoDB connection
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

// User registration route
app.post('/api/users/register', async (req, res) => {
  const { name, email, password, age, gender, dorming, dormCampus, major, ethnicity, hobbies } = req.body;

  try {
    // Create a new user
    const newUser = new User({
      name,
      email,
      password, // In a real application, hash the password before saving it
      age,
      gender,
      dorming,
      dormCampus,
      major,
      ethnicity,
      hobbies: hobbies.split(','), // Store hobbies as an array
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Example match results route (stub for now)
app.get('/api/matches', async (req, res) => {
  // In a real application, implement logic to find matches based on compatibility
  try {
    const matches = []; // Placeholder for match results
    res.status(200).json(matches);
  } catch (error) {
    console.error('Error fetching matches:', error);
    res.status(500).json({ message: 'Error fetching matches' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
