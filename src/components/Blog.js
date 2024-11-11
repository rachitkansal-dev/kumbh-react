import React, { useContext, useEffect, useState } from 'react';
import blogData from '../bolgData/blogData'; // Assuming this is a fallback for local data
import BlogContext from '../context/BlogContext';
import UserContext from '../context/UserContext';
import { useParams, useNavigate } from 'react-router-dom';

export default function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBlogById } = useContext(BlogContext);
  const { user } = useContext(UserContext);

  const [blog, setBlog] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true); // Track loading state

  // useEffect to fetch the blog details and initialize like state
  useEffect(() => {
    setLoading(true); // Start loading when fetching the blog
    getBlogById(id).then(fetchedBlog => {
      if (fetchedBlog && !fetchedBlog.error) {
        setBlog(fetchedBlog);
        setLikeCount(fetchedBlog.likes);
        // Ensure user._id is checked before accessing it
        if (user) {
          setIsLiked(fetchedBlog.likedBy.includes(user._id)); // Check if the user has already liked
        }
      } else {
        const localBlog = blogData.find(blog => blog.id === parseInt(id));
        if (localBlog) {
          setBlog(localBlog);
        } else {
          alert("Blog Not Found !!");
          navigate('/blog');
        }
      }
      setLoading(false); // Set loading to false once the blog is fetched
    });
  }, [id, getBlogById, navigate, user]);

  // Like functionality
  const handleLike = async () => {
    if (!user) {
      alert("Please log in to UpVote the blog.");
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/blog/${id}/like`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user._id, // Only access _id if user is not null
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setLikeCount(data.likes);
        setIsLiked(true);
        alert('Upvote Successful');
      } else {
        alert(data.error || "Error liking the blog.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to like the blog.");
    }
  };

  // Dislike functionality (unlike)
  const handleDislike = async () => {
    if (!user) {
      alert("Please log in to downvote the blog.");
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/blog/${id}/dislike`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user._id, // Only access _id if user is not null
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setLikeCount(data.likes); // Update the like count
        setIsLiked(false); 
        alert('DownVote Successful');
        // Set isLiked to false after unliking
      } else {
        alert(data.error || "Error unliking the blog.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to unlike the blog.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading state while the blog is being fetched
  }

  if (!blog) {
    return <div>Blog Not Found!</div>; // Display message if the blog is not found
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
          <i
            className={`fa-regular fa-circle-up ${isLiked ? 'liked' : ''}`}
            onClick={handleLike} // Handle like
            disabled={isLiked} // Disable like button if already liked
          ></i>
          <p className="blog-likeCount">{likeCount}</p>
          <i
            className={`fa-solid fa-circle-down ${!isLiked ? 'disliked' : ''}`}
            onClick={handleDislike} // Handle dislike/unlike
            disabled={!isLiked} // Disable dislike button if not liked
          ></i>
        </p>
      </div>
    </div>
  );
}
