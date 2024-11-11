import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function EditProfile() {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const { user,setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if no user is found
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password too short");
      return;
    }
    if (name.length < 3) {
      alert("Name too short");
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/profile/${user._id}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password , phoneNumber , address }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        const updatedUser = { ...user, name , phoneNumber , address };
        setUser(updatedUser);
        
        localStorage.setItem('user', JSON.stringify(updatedUser));
        navigate('/profile'); 
      } else {
        alert(data.message); 
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <section className="login-center">
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Update Profile</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="input-area"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="name">Phone Number</label>
              <input
                className="input-area"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <label htmlFor="name">Address</label>
              <input
                className="input-area"
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                className="input-area"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">Update Profile</button>
            <p><Link to="/login">Back to Login</Link></p>
          </form>
        </div>
      </section>
    </div>
  );
}
