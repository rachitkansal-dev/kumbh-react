import React, { useState,useContext } from 'react';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Helmet } from 'react-helmet-async';

const API_URL = process.env.REACT_APP_API_URI || "http://localhost:8080";

function OtpCheck() {
    const { token } = useParams(); 
    const navigate = useNavigate();
    const [OTP, setOTP] = useState('');
    const { user, loginUser } = useContext(UserContext);
    const verifyOtp = async (e) => {
        e.preventDefault(); 
        try {
          const response = await fetch(`${API_URL}/otp-check/${token}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({OTP}),  // Include phoneNumber and address
          });
    
          const data = await response.json();
          if (response.ok) {
            alert(data.message);
            loginUser(data.user);
            navigate('/');
          } else {
            alert(data.message);
            
          }
        } catch (error) {
          console.error('Error signing up:', error);
          alert('Signup failed');
        }
      };

    const handleOtpChange = (e) => {
        setOTP(e.target.value);
    };

    return (
        <div>
          <Helmet>
                <title>Prayatak - Otp </title>
            </Helmet>
            <section className="login-center">
                <div className="login-container">
                    <form className="login-form" onSubmit={verifyOtp}>
                        <h2>Enter Your OTP</h2>
                        <div className="form-group">
                            <label htmlFor="otp">Enter OTP</label>
                            <input
                                className="input-area"
                                type="text"
                                id="otp"
                                name="otp"
                                placeholder="Enter OTP"
                                value={OTP}
                                onChange={handleOtpChange}
                                required
                            />
                        </div>
                        <button type="submit" className="login-btn">Verify OTP</button>
                        <p><Link to="/login">Back to Login</Link></p>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default OtpCheck;
