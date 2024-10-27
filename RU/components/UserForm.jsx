// src/UserForm.jsx
import React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]); // New state for storing users

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email };
    setUsers([...users, newUser]); // Add the new user to the users array
    setName(''); // Clear the name input
    setEmail(''); // Clear the email input
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>

      <h2>Registered Users:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserForm;
