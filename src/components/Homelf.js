import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Showcaselostandfound() {
  const [isActive, setIsActive] = useState(false); // State to control form visibility

  // Function to open the form
  const openForm = () => {
    setIsActive(true);
  };

  // Function to close the form
  const closeForm = () => {
    setIsActive(false);
  };

  return (
    <>
      <div>
        <div className="content">
          <div className="rotate">
            Follow us
            <i className="fa-brands fa-instagram space5px"></i>
            <i className="fa-brands fa-twitter space5px"></i>
          </div>
          <div className="guide-section">
            <div className="line-text">
              <span className="line"></span>
              <span className="guide-title">Fast and Efficient</span>
              <span className="line"></span>
            </div>
            <h1>Lost and Found Near You !!</h1>

            <div className="form-container">
              <div>
                <label htmlFor="itemType"> <i className="fa-solid fa-circle-chevron-right"></i> Lost What : </label>
                <select id="itemType" name="itemType">
                  <option value="Phone">Phone</option>
                  <option value="Person">Person</option>
                  <option value="Wallet">Wallet</option>
                  <option value="Electronic">Electronic</option>
                  <option value="Jewellery">Jewellery</option>
                  <option value="others">Others</option>
                </select>
                
                <label htmlFor="location"> <i className="fa-solid fa-circle-chevron-right"></i> Location : </label>
                <select id="location" name="location">
                  <option value="Railway-station">Railway-station</option>
                  <option value="Sangam">Sangam</option>
                  <option value="Company-museum">Company-museum</option>
                  <option value="Civil-lines">Civil-lines</option>
                  <option value="Bus-Stand">Bus-Stand</option>
                  <option value="others">Others</option>
                </select>
                <br/>
              </div>

              <div className="button-container">
                <button className="btn-primary lost-btn"><Link to="/Finder">Find</Link></button>
              </div>
              <div className="padding-5">
                <label htmlFor="reportLostFound"> <i className="fa-solid fa-circle-chevron-right"></i> Want to Report a Lost or Found Item? </label>
                <div className="button-container">
                  <button className="btn-primary lost-btn" onClick={openForm}>Report Here</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="notvisible">Scroll Down</p>
          </div>
        </div>
      </div>

      <div>
        <div className={`unique-report-form ${isActive ? 'active' : ''}`}>
          <button className="unique-close-button" onClick={closeForm}>&times;</button> {/* Close button */}

          <h2>Report Issue</h2>
          <form className="unique-form">
            <input
              className="unique-input"
              type="text"
              name="title"
              placeholder="Give title in about 20 words"
              required
            />

            <select className="unique-select" name="landf" defaultValue="" required>
              <option value="" disabled>
                Lost/Found
              </option>
              <option value="lost">Lost</option>
              <option value="found">Found</option>
            </select>

            <select className="unique-select" name="type" defaultValue="" required>
              <option value="" disabled>
                Select Item Type
              </option>
              <option value="Phones & Tablets">Phones & Tablets</option>
              <option value="Bags">Bags</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Watches">Watches</option>
              <option value="People">People</option>
              <option value="Documents">Documents</option>
              <option value="Keys">Keys</option>
              <option value="Toys">Toys</option>
              <option value="Laptop">Laptop</option>
              <option value="Fashion Accessories">Fashion Accessories</option>
              <option value="Clothes & Shoes">Clothes & Shoes</option>
              <option value="Pets">Pets</option>
              <option value="Sports Equipment">Sports Equipment</option>
              <option value="Other">Other</option>
              <option value="Automobile">Automobile</option>
            </select>

            <textarea
              className="unique-input"
              name="description"
              placeholder="Description"
              required
            ></textarea>

            <select className="unique-select" name="location" defaultValue="" required>
              <option value="" disabled>
                Select Location
              </option>
              <option value="Triveni Sangam">Triveni Sangam</option>
              <option value="Railway Station">Railway Station</option>
              <option value="Airport">Airport</option>
              <option value="Chandrashekhar Azad Park">Chandrashekhar Azad Park</option>
            </select>

            <label className="unique-label" htmlFor="date">
              Date of Submission (dd-mm-yyyy):
            </label>
            <input
              className="unique-input"
              type="date"
              id="date"
              name="date"
              required
            />

            <input
              className="unique-input"
              type="file"
              name="photo"
              accept="image/*"
            />
            <input
              className="unique-input"
              type="text"
              name="phone"
              placeholder="+91 XXXXXXXXXX"
              required
            />

            <button className="btn-primary lost-btn new-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}