import React, { useContext, useEffect,useState } from 'react';
import { useParams,useLocation  } from 'react-router-dom';
import LfContext from '../context/LfContext';

export default function Finder() {
  const { items, getItems,getItemsByType,getItemsByLocation,getItemsBySearch } = useContext(LfContext);
  const type = useParams();
  const locations = useLocation();
  const location = useParams();
  const queryParams = new URLSearchParams(locations.search);

  // Extract specific query parameters
  const types = queryParams.get("type");
  const locationParam = queryParams.get("location");

  const [filters, setFilters] = useState({
    landf: '',
    location: locationParam,
    type: types
  });
  // filters, getItemsBySearch
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFilters({
      ...filters,
      [id]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    getItemsBySearch(filters);
  };

  useEffect(() => {
    if (type.type) {
      getItemsByType(type.type);
    }
    else if(location.location) {
      getItemsByLocation(location.location);
    } 
    else {
      if(locationParam || types) {
        getItemsBySearch(filters);
      }
      else{
        getItems();
      }
    }
  }, [type, getItems, getItemsByType,getItemsByLocation,filters,getItemsBySearch,location.location,locationParam,types]);

  return (
    <div>
      <div className="finder-container">
        <div className="finder-main-content">
          <aside className="finder-sidebar">
            <h2>Search Filters</h2>
            <form onSubmit={handleSubmit}>
              <div className="finder-filter-group">
                <label htmlFor="landf">Lost/Found</label>
                <select id="landf" value={filters.landf} onChange={handleChange}>
                  <option value="">Lost/Found</option>
                  <option value="lost">Lost</option>
                  <option value="found">Found</option>
                </select>
              </div>
              <div className="finder-filter-group">
                <label htmlFor="location">Location</label>
                <select id="location" value={filters.location} onChange={handleChange}>
                  <option value="">Select Location</option>
                  <option value="railway">Railway Station</option>
                  <option value="airport">Airport</option>
                  <option value="sangam">Triveni Sangam</option>
                  <option value="park">Chandarshekhar Park</option>
                  <option value="Other">Others</option>
                </select>
              </div>
              <div className="finder-filter-group">
                <label htmlFor="type">Item Type</label>
                <select id="type" value={filters.type} onChange={handleChange}>
                  <option value="">Select Item Type</option>
                  <option value="bags">Bags</option>
                  <option value="watch">Watches</option>
                  <option value="jewelry">Jewelry</option>
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
                  <img src={item.photo || "#"} alt={item.type || "Item"} />
                  <h3>{item.type || "Unknown Type"}</h3>
                  <p>Location: {item.location || "Unknown Location"}</p>
                  <p>Status: {item.landf || "Unknown Status"}</p>
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
