import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function Navbar() {
  const { user } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close the menu when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" id="navbar">
      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* Logo */}
      <div className="logo">
        <Link to="/">TPW</Link>
      </div>

      {/* Navigation Items */}
      <ul className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
        <li className={`${location.pathname === '/' ? 'activeg' : ''}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`${location.pathname === '/blogs' ? 'activeg' : ''}`}>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className={`${location.pathname === '/lost-found' ? 'activeg' : ''}`}>
          <Link to="/lost-found">Lost And Found</Link>
        </li>
        <li className={`${location.pathname === '/about' ? 'activeg' : ''}`}>
          <Link to="/about">About</Link>
        </li>
        <li className={`${location.pathname === '/contact' ? 'activeg' : ''}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Sign-up/Profile Section */}
      <div className="sign-up">
        <i className="fa-solid fa-user"></i>
        {user ? (
          <Link to="/profile">{user.name}</Link>
        ) : (
          <Link to="/signup">Sign-up</Link>
        )}
      </div>
    </nav>
  );
}
