import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function BlogReview() {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const { user } = useContext(UserContext);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:8080/blog/${id}`, {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setReviews(data.comments); // Assuming `data.comments` contains an array of review objects
      } else {
        console.error('Failed to fetch reviews');
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews(); 
  }, [id]);

  useEffect(() => {
    const interval = setInterval(moveNext, 5000); 
    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const movePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      try {
        const response = await fetch(`http://localhost:8080/blog/${id}/comment`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ comment: newReview }),
        });

        if (response.ok) {
          const result = await response.json();
          setReviews([...reviews, result.comment]); // Add the new comment to the list
          setNewReview('');
          alert('Comment submitted successfully');
          fetchReviews(); 
        } else {
          alert('Failed to post comment');
        }
      } catch (error) {
        alert('Error:', error);
      }
    }
  };

  return (
    <div>
      <section className="review">
        <div className="carousel-container">
          <h2 className="carousel-title">What Others Think</h2>
          <div className="carousel" id="testimonialCarousel">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`carousel-item ${currentIndex === index ? 'active' : ''} ${
                  currentIndex === (index - 1 + reviews.length) % reviews.length ? 'left' : ''
                } ${
                  currentIndex === (index + 1) % reviews.length ? 'right' : ''
                }`}
              >
                <div className="testimonial">
                  <i className="quote-icon fas fa-quote-left"></i>
                  <p>{review.body}</p>
                  {review.username && <h4>{review.username}</h4>}
                </div>
              </div>
            ))}
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
        <h2 className="carousel-title">Rate Your Experience</h2>
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
            <button type="submit" className="btn-primary lost-btn toCenter">Submit Review</button>
          </div>
        </form>
      </section>
    </div>
  );
}
