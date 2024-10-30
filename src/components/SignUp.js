import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div>
      <section className="login-center">
        <div className="login-container">
          <form className="login-form" action="/submit-login" method="POST">
            <h2>Sign Up</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input className="input-area" type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-Mail</label>
              <input className="input-area" type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="input-area" type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="login-btn">Sign Up</button>

            <p className="text-smaller">
              Already have an account?{' '}
              <Link to="/login">Go to login</Link> {/* Use Link for internal routing */}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
