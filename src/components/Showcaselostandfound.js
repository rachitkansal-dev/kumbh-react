import React from 'react';

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
                <a href="#" className="region-item btn-primary1">
                  <i className="fa-solid fa-train fa-icon"></i> Railway station
                </a>
                <a href="#" className="region-item btn-primary1">
                  <i className="fa-solid fa-bridge-water fa-icon"></i> Triveni Sangam
                </a>
              </div>
              <div className="row-wize">
                <a href="#" className="region-item btn-primary1">
                  <i className="fa-solid fa-building-columns fa-icon"></i> Company Museum
                </a>
                <a href="#" className="region-item btn-primary1">
                  <i className="fa-solid fa-place-of-worship fa-icon"></i> Khusro Bagh
                </a>
              </div>
              <div className="row-wize">
                <a href="#" className="region-item btn-primary1">
                  <i className="fa-solid fa-city fa-icon"></i> Civil Lines
                </a>
                <a href="#" className="region-item btn-primary1">
                  <i className="fa-solid fa-bus fa-icon"></i> Bus Stand
                </a>
              </div>
            </div>
          </div>
          <div className="category-container">
            <div className="head">
              <h2>
                Browse by <span>Category</span>
              </h2>
              <div className="head-item">
                <a href="#">
                  <i className="fa-solid fa-bars"></i> View more
                </a>
              </div>
            </div>
            <table className="category-table">
              <tbody>
                <tr>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-mobile-alt"></i>
                      <p>Phones & Tablets (47)</p>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-shopping-bag"></i>
                      <p>Bags (155)</p>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-gem"></i>
                      <p>Jewelry (13)</p>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-stopwatch"></i>
                      <p>Watches (2)</p>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-user"></i>
                      <p>People (191)</p>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-file-alt"></i>
                      <p>Documents (213)</p>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-key"></i>
                      <p>Keys (24)</p>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-horse"></i>
                      <p>Toys (3)</p>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-laptop"></i>
                      <p>Laptop (1)</p>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-glasses"></i>
                      <p>Fashion Accessories (1)</p>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-tshirt"></i>
                      <p>Clothes & Shoes (1)</p>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-dog"></i>
                      <p>Pets (335)</p>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-football-ball"></i>
                      <p>Sports Equipment (1)</p>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-car"></i>
                      <p>Automobile (16)</p>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-folder"></i>
                      <p>Other (18)</p>
                    </a>
                  </td>
                  <td>
                    <a href="#" className="category-item">
                      <i className="fas fa-ellipsis-h"></i>
                      <p>View More</p>
                    </a>
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
