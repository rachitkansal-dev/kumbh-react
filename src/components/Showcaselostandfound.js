import React from 'react';
import { Link } from 'react-router-dom'; 
export default function Showcaselostandfound() {




  return (
    <div>
      <section className="showcase">
        <div className="container2">
          <div className="region">
            <h2>
              <i className="fa-solid fa-location-dot"></i> Select a region
            </h2>
            <div className="listing">
              <div className="row-wize">
                <Link to="/finder/location/Railway station" className="region-item btn-primary1">
                  <i className="fa-solid fa-train fa-icon"></i> Railway station
                </Link>
                <Link to="/finder/location/Triveni Sangam" className="region-item btn-primary1">
                  <i className="fa-solid fa-bridge-water fa-icon"></i> Triveni Sangam
                </Link>
              </div>
              <div className="row-wize">
                <Link to="/finder/location/Company Museum" className="region-item btn-primary1">
                  <i className="fa-solid fa-building-columns fa-icon"></i> Company Museum
                </Link>
                <Link to="/finder/location/Airport" className="region-item btn-primary1">
                <i className="fa-solid fa-plane-up fa-icon"></i> Airport
                </Link>
              </div>
              <div className="row-wize">
                <Link to="/finder/location/Civil Lines" className="region-item btn-primary1">
                  <i className="fa-solid fa-city fa-icon"></i> Civil Lines
                </Link>
                <Link to="/finder/location/Other" className="region-item btn-primary1">
                <i className="fas fa-map-marker-alt fa-icon"></i> Other
                </Link>
              </div>
            </div>
          </div>
          <div className="category-container">
            <div className="head">
              <h2>
                Browse by <span>Category</span>
              </h2>
              <div className="head-item">
                <Link to="/">
                  <i className="fa-solid fa-bars"></i> View more
                </Link>
              </div>
            </div>
            <table className="category-table">
              <tbody>
                <tr>
                  <td>
                    <Link to="/finder?type=Phones%20&%20tablets&location=" className="category-item">
                      <i className="fas fa-mobile-alt"></i>
                      <p>Phones & Tablets (47)</p>
                    </Link>
                  </td>
                  <td>
                    <Link to="/finder/type/Bags" className="category-item">
                      <i className="fas fa-shopping-bag"></i>
                      <p>Bags (155)</p>
                    </Link>
                  </td>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-gem"></i>
                      <p>Jewelry (13)</p>
                    </Link>
                  </td>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-stopwatch"></i>
                      <p>Watches (2)</p>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-user"></i>
                      <p>People (191)</p>
                    </Link>
                  </td>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-file-alt"></i>
                      <p>Documents (213)</p>
                    </Link>
                  </td>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-key"></i>
                      <p>Keys (24)</p>
                    </Link>
                  </td>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-horse"></i>
                      <p>Toys (3)</p>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-laptop"></i>
                      <p>Laptop (1)</p>
                    </Link>
                  </td>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-glasses"></i>
                      <p>Fashion Accessories (1)</p>
                    </Link>
                  </td>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-tshirt"></i>
                      <p>Clothes & Shoes (1)</p>
                    </Link>
                  </td>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-dog"></i>
                      <p>Pets (335)</p>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-football-ball"></i>
                      <p>Sports Equipment (1)</p>
                    </Link>
                  </td>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-car"></i>
                      <p>Automobile (16)</p>
                    </Link>
                  </td>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-folder"></i>
                      <p>Other (18)</p>
                    </Link>
                  </td>
                  <td>
                    <Link to="/" className="category-item">
                      <i className="fas fa-ellipsis-h"></i>
                      <p>View More</p>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
