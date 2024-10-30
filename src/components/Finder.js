import React, { useContext } from 'react';
import LfContext from '../context/LfContext';

export default function Finder() {
  const { items, setItems } = useContext(LfContext); // Assuming your context provides these

  return (
    <div>
      <div className="finder-container">
        <div className="finder-main-content">
          <aside className="finder-sidebar">
            <h2>Search Filters</h2>
            <form>
              <div className="finder-filter-group">
                <label htmlFor="landf">Lost/Found</label>
                <select id="landf">
                  <option value="lost">Lost</option>
                  <option value="found">Found</option>
                </select>
              </div>
              <div className="finder-filter-group">
                <label htmlFor="location">Location</label>
                <select id="location">
                  <option value="">Select Location</option>
                  <option value="railwa">Railway Station</option>
                  <option value="airport">Airport</option>
                  <option value="sangam">Triveni Sangam</option>
                  <option value="park">Chandarshekhar Park</option>
                </select>
              </div>
              <div className="finder-filter-group">
                <label htmlFor="type">Item Type</label>
                <select id="type">
                  <option value="">Select Item Type</option>
                  <option value="bags">Bags</option>
                  <option value="watch">Watches</option>
                  <option value="Jewelry">Jewelry</option>
                </select>
              </div>
              <button type="submit" className="searching-btn btn-primary-finder lost-btn-finder">
                Search
              </button>
            </form>
          </aside>
          <section className="finder-content">
            <h2>Lost and Found Items</h2>
            <div className="finder-item-grid">
              {items.map((item, index) => (
                <div key={index} className="finder-item-card">
                  <img src={item.image || "#"} alt={item.type || "Item"} />
                  <h3>{item.type}</h3>
                  <p>Location: {item.location}</p>
                  <p>Status: {item.status}</p>
                  <button type="button" className="btn-primary-finder lost-btn-finder">
                    View
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
