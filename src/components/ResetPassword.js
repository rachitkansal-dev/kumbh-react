import React from 'react';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
  return (
    <div>
      <section className="login-center">
        <div className="login-container"> 
          <form className="login-form" action="/submit-login" method="POST"> 
            <h2>Reset Password</h2>
            <div className="form-group">
              <label htmlFor="email">Enter Your Email</label>
              <input className="input-area" type="email" id="email" name="email" required /> 
            </div>
            <button type="submit" className="login-btn">Send Email</button> 
            <p><Link to="/login">Back to Login</Link></p> 
          </form>
        </div>
      </section>
    </div>
  );
}
