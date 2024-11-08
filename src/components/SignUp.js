import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        loginUser(data.user);
        navigate('/'); // Redirect to home page after successful signup
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Signup failed');
    }
  };

  return (
    <div>
      <section className="login-center">
        <div className="login-container">
          <form className="login-form" onSubmit={handleSignUp}>
            <h2>Sign Up</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="input-area"
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-Mail</label>
              <input
                className="input-area"
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="input-area"
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-btn">Sign Up</button>
            <p className="text-smaller">
              Already have an account? <Link to="/login">Go to login</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
