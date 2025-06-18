import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Helmet } from 'react-helmet-async';
import Loading from './Loading';
import ButtonSpinner from './ButtonSpinner';

const API_URL = process.env.REACT_APP_API_URI || "http://localhost:8080";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user, loginUser } = useContext(UserContext); // Access user from context

  useEffect(() => {
    // If user is already logged in, redirect to home
    if (user) {
      navigate('/'); // Redirect to home or another route
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        loginUser(data.user); // Use loginUser from context
        navigate('/'); // Redirect to home or another route
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Helmet>
                <title>Prayatak - Login </title>
            </Helmet>
      <section className="login-center">
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="input-area"
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  className="input-area"
                  type={showPassword ? 'text' : 'password'} 
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                <i
                  className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                  onClick={() => !isLoading && setShowPassword((prev) => !prev)}
                  aria-hidden="true"
                  style={{cursor: isLoading ? 'not-allowed' : 'pointer'}}
                ></i>
              </div>
            </div>
            <p>
              <Link to="/forget-password">Forget password?</Link>
            </p>
            <button type="submit" className="login-btn" disabled={isLoading} style={{position: 'relative'}}>
              {isLoading ? (
                <>
                  <span>Logging in</span>
                  <ButtonSpinner variant="clip" position="inline" size={12} />
                </>
              ) : 'Login'}
            </button>
            <p className="text-smaller">
              Don't have an account? <Link to="/signup">Create new</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
