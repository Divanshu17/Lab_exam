import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        
        
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input type="text" 
          name="username" value={username} onChange={handleChange} />
        </label>
        <br />


        <label>Email:
          <input type="email" name="email" 
          
          value={email} onChange={handleChange} />
        </label>
        <br />
        <label> Password:
          <input type="password"
           name="password" value={password} onChange={handleChange} />
        </label>

        <br />
        


        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;