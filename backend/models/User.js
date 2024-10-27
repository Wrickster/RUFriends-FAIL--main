const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'non-binary', 'non-gender conforming'], // Add other options as needed
  },
  isDorming: { type: Boolean, required: true },
  dormCampus: { type: String, default: '' }, // Optional campus name
  major: { type: String, default: '' }, // Optional major
  ethnicity: { type: String, default: '' }, // Optional ethnicity
  hobbies: [{ type: String }], // Array of hobbies
  musicGenres: [{ type: String }], // Array of preferred music genres
  studyHabits: { type: String, default: '' }, // Description of study habits
  tags: [{ type: String }], // Array of tags describing the user
  classSchedules: [{ type: String }], // Array of class schedules
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
