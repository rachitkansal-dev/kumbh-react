import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div>
      <section className="login-center"> 
        <div className="login-container"> 
          <form className="login-form" action="/submit-login" method="POST">
            <h2>Login</h2>
            <div className="form-group"> 
              <label htmlFor="name">Name</label> 
              <input className="input-area" type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label> 
              <input className="input-area" type="password" id="password" name="password" required />
            </div>
            <p><Link to="/forget-password">Forget password?</Link></p> 
            <button type="submit" className="login-btn">Login</button> 
            <p className="text-smaller"> 
              Don't have an account? <Link to="/signup">Create new</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
