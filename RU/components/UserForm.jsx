// RU/src/UserForm.jsx
import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    dorming: '',
    dormCampus: '',
    major: '',
    ethnicity: '',
    hobbies: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert('Error registering user.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
      <select name="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="non-binary">Non-binary</option>
        <option value="non-conforming">Non-conforming</option>
      </select>
      <input type="text" name="dorming" placeholder="Are you dorming? (yes/no)" onChange={handleChange} required />
      <input type="text" name="dormCampus" placeholder="Dorm Campus (optional)" onChange={handleChange} />
      <input type="text" name="major" placeholder="Major (optional)" onChange={handleChange} />
      <input type="text" name="ethnicity" placeholder="Ethnicity (optional)" onChange={handleChange} />
      <input type="text" name="hobbies" placeholder="Hobbies (comma separated)" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default UserForm;
