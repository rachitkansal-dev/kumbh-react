import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message); // Show alert for success message
      } else {
        alert(result.message || 'Failed to send reset link'); // Show alert for error message
      }
    } catch (error) {
      console.error('Error sending reset email:', error);
      alert('An error occurred. Please try again.'); // Show alert for catch error
    }
  };

  return (
    <div>
      <section className="login-center">
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Reset Password</h2>
            <div className="form-group">
              <label htmlFor="email">Enter Your Email</label>
              <input
                className="input-area"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <button type="submit" className="login-btn">Send Email</button>
            <p><Link to="/login">Back to Login</Link></p>
          </form>
        </div>
      </section>
    </div>
  );
}
