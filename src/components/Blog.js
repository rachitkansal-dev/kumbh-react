import React, { useContext, useEffect, useState } from 'react';
import blogData from '../bolgData/blogData';
import BlogContext from '../context/BlogContext';
import { useParams, useNavigate } from 'react-router-dom';

export default function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBlogById } = useContext(BlogContext);

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Attempt to fetch blog from context (e.g., server or global state)
    getBlogById(id).then(fetchedBlog => {
      if (fetchedBlog && !fetchedBlog.error) {
        setBlog(fetchedBlog);
        console.log(fetchedBlog);
      } else {
        // If not found in context, look in local blogData as a fallback
        const localBlog = blogData.find(blog => blog.id === parseInt(id));
        if (localBlog) {
          setBlog(localBlog); // Use fallback local data
        } else {
          alert("Blog Not Found !!");
          navigate('/blog');
        }
      }
    });
  }, [id, getBlogById, navigate]);

  if (!blog) {
    return <div>Loading...</div>;
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
          <h1 className="blog-header-text">{blog.title}</h1>
          <h1 className="blog-author">--- By {blog.author}</h1>
        </div>
        <div className="blog-image-container">
          <img src={blog.image} alt={blog.title} />
          <div className="blog-background-layer"></div>
          <div className="blog-background-layer1"></div>
        </div>
      </div>
      <div className="blog-container1">
        <p className="blog-text" dangerouslySetInnerHTML={{ __html: blog.body }} />

        <p className="blog-fav-icons">
          <i className="fa-regular fa-thumbs-up"></i>
          <span className="blog-likeCount">54</span>
          <i className="fa-solid fa-thumbs-down"></i>
        </p>
      </div>
    </div>
  );
}
