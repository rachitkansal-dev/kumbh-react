import React from 'react';
import '../css/Contact.css';
import companyImage from '../images/16be610a-aa12-4f61-b55d-bccd6ca30f83.webp';

const ContactForm = () => {
  return (
    <div className="contact-main">
    <section className="contact-contact-form">
      <div className="contact-container">
        <div className="contact-form-wrapper">
          <div className="contact-company-adress">
            <div className="contact-adress-group">
              <h2 className="contact-head contact-md-heading contact-text-gray">Location</h2>
              <p className='contact-p-li'><i class="fa-solid fa-location-pin"></i> Jhalwa,Praygraj,Uttar Pradesh</p>
            </div>
            <div className="contact-adress-group">
              <h2 className="contact-head contact-md-heading contact-text-gray">Email</h2>
              <p className='contact-p-li'><i class="fa-solid fa-envelope"></i> tpwKumbh2025@gmail.com</p>
            </div>
            <div className="contact-adress-group">
              <h2 className="contact-head contact-md-heading contact-text-gray">Call</h2>
              <p className='contact-p-li'><i class="fa-solid fa-phone"></i> +91-987-654-3210</p>
            </div>
            <img src={companyImage} alt="company" />
          </div>
          <form className="contact-form">
            <h1 className="contact-head contact-lg-heading contact-text-black">Contact Us</h1>
            <p className="contact-p-li contact-text-gray">Let us know your suggestions and concerns by filling out the form below</p>
            <div className="contact-form-group contact-f1">
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="contact-form-group contact-f1">
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="contact-form-group contact-f1">
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
            </div>
            <div className="contact-form-group">
              <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="contact-form-btn">Submit</button>
            <div className="contact-social-media">
              <h2 className='contact-head'>Follow Us</ h2>
              <a href="https://facebook.com" className="contact-social-icon contact-facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" className="contact-social-icon contact-twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" className="contact-social-icon contact-instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" className="contact-social-icon contact-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactForm;
