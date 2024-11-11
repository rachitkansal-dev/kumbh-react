import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [address, setAddress] = useState('');
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  function isValidPhoneNumber(phoneNumber) {
    const cleanedPhoneNumber = phoneNumber.replace(/(?!^\+)[^\d]/g, '');
    const phoneRegex = /^(?:\+(\d{1,3}))?(\d{7,15})$/;
    const match = cleanedPhoneNumber.match(phoneRegex);
  
    if (match) {
      const countryCode = match[1];
      const mainNumber = match[2];
      if (mainNumber.length >= 7 && mainNumber.length <= 15) {
        return true;
      }
    }
    return false;
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password too short");
      return;
    }
    if (name.length < 3) {
      alert("Name too short");
      return;
    }
    if(!isValidPhoneNumber(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, phoneNumber, address }),  // Include phoneNumber and address
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
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                className="input-area"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                className="input-area"
                id="address"
                name="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
