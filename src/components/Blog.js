import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../bolgData/blogData';

export default function Blog() {
  const { id } = useParams();
  const blog = blogData.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

  return (
    <div className='rootClass'>
      <div className="blog-container">
        <div className="blog-content">
          <h1 className="blog-place-name">{blog.place}</h1>
          <div className="blog-ratings">
            <span className="blog-stars">★★★★☆</span>
            <span className="blog-rating-value">(3.8 out of 5)</span>
            <div className="blog-global-ratings">164 global ratings</div>
          </div>
          <p className="blog-header-text">{blog.heading}</p>
        </div>
        <div className="blog-image-container">
          <img src={blog.image} alt="" />
          <div className="blog-background-layer"></div>
          <div className="blog-background-layer1"></div>
        </div>
      </div>
      <div className="blog-container1">
        <p className="blog-text">{blog.bodyData}</p>
        <p className="blog-fav-icons">
          <i className="fa-regular fa-thumbs-up"></i>
          <spam className="blog-likeCount">54</spam>
          <i className="fa-solid fa-thumbs-down"></i>
        </p>
      </div>
    </div>
  );
}




