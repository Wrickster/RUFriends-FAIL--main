// User registration route
app.post('/api/users/register', async (req, res) => {
  const { name, email, password, age, gender, isDorming, dormCampus, major, ethnicity, hobbies } = req.body;


  try {
    // Create a new user
    const newUser = new User({
      name,
      email,
      password, // In a real application, hash the password before saving it
      age,
      gender,
      isDorming, // Update to match schema field
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
