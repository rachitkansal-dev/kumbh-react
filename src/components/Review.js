import React, { useState, useEffect,useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import LfContext from '../context/LfContext';

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const { user } = useContext(UserContext);
  const { comments,getComments,addComment } = useContext(LfContext);
  const navigate = useNavigate();



  useEffect(() => {
    const interval = setInterval(moveNext, 5000); // Change to the next item every 5 seconds
    return () => clearInterval(interval);
    
  }, [currentIndex]);

  const moveNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const movePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!user) {
      alert("Please login to submit a review");
      navigate('/login');
    }
    else{
      addComment(user.name,newReview);
      setNewReview("");
      getComments();
    }
  };
  useEffect(() => {
    getComments();
  }, [])

  return (
    <div>
      <section className="review">
        <div className="carousel-container">
          <h2 className="carousel-title">Success Stories</h2>
          <div className="carousel" id="testimonialCarousel">
          {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div
                  key={comment._id || index}
                  className={`carousel-item ${currentIndex === index ? 'active' : ''} ${
                    currentIndex === (index - 1 + comments.length) % comments.length ? 'left' : ''
                  } ${
                    currentIndex === (index + 1) % comments.length ? 'right' : ''
                  }`}
                >
                  <div className="testimonial">
                    <i className="quote-icon fas fa-quote-left"></i>
                    <p>{comment.commentText}</p>
                    <h4>{comment.username}</h4>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews available yet.</p>
            )}
          </div>
          <button className="prev" onClick={movePrev} aria-label="Previous Review">
            &#10094;
          </button>
          <button className="next" onClick={moveNext} aria-label="Next Review">
            &#10095;
          </button>
        </div>
      </section>
      <section className="write-review container">
        <h2 className="carousel-title">Rate Your Own Experience</h2>
        <form onSubmit={handleSubmit}>
          <div className="review-textarea">
            <label htmlFor="reviewInput" className="sr-only">Share your review</label>
            <textarea
              className="input-area"
              id="reviewInput"
              name="review"
              placeholder="Share your reviews"
              rows="5"
              value={newReview}
              onChange={handleReviewChange}
              required
            ></textarea>
          </div>
          <div className="to-center">
            <button type="submit" className="btn-primary lost-btn toCenter">Submit Review</button>
          </div>
        </form>
      </section>
    </div>
  );
}
