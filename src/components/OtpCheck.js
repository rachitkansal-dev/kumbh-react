import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function OtpCheck() {
    const [otp, setOtp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to verify OTP here
        console.log("OTP submitted:", otp);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    return (
        <div>
            <section className="login-center">
                <div className="login-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Enter Your OTP</h2>
                        <div className="form-group">
                            <label htmlFor="otp">Enter OTP</label>
                            <input
                                className="input-area"
                                type="text"
                                id="otp"
                                name="otp"
                                placeholder="Enter OTP"
                                value={otp}
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
