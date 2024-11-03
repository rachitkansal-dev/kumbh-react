import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../bolgData/blogData';


export default function Showcase() {
  return (
    <section className="showcase" id="explore-places">
      <div className="container">
        {blogData.map((blog, index) => (
          <div className={`row ${index % 2 === 0 ? 'row1' : 'row2'}`} key={blog.id}>
            <div className="img-box">
              <img src={blog.image} alt={blog.place} />
            </div>
            <div className="text-box">
              <div className="number-background">{blog.number}</div>
              <div className="shift">
                <div className="line-text line-blog">
                  <span className="line"></span>
                  <span className="guide-title">{blog.title}</span>
                </div>
                <h2 className="lg-heading">{blog.heading}</h2>
                <p className="text-gray">{blog.description}</p>
                <div className="read-btn">
                <Link to={`/blog/${blog.id}`} className="btn btn-secondary">
                    Read More
                  </Link>
                  <Link to={`/blog/${blog.id}`}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
