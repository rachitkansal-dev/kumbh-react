import React, { useContext,useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../context/UserContext';
export default function BlogReview() {
  const { postId } = useParams(); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const { user } = useContext(UserContext);

  const carouselItems = [
    {
      quote: "Good try! This page is helping people to handle the lost and found things easily.",
      name: "Nehul Neha",
      location: "Mumbai",
    },
    {
      quote: "Thank you for helping me to get my mobile back. Such a great help!",
      name: "Krishnan Kutti",
      location: "Trivandrum",
    },
    {
      quote: "I am really grateful to have found my lost items through this service.",
      name: "Sruthi Garu",
      location: "Hyderabad",
    },
  ];

  useEffect(() => {
    const interval = setInterval(moveNext, 5000); // Change to the next item every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const movePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      try {
        const response = await fetch(`http://localhost:8080/blog/${postId}/comment`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ comment: newReview ,
          }),
          
        });

        if (response.ok) {
          const result = await response.json();
          setReviews([...reviews, result.comment.body]); 
          setNewReview('');
        } else {
          console.error("Failed to post comment");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <section className="review">
        <div className="carousel-container">
          <h2 className="carousel-title">What Others Think</h2>
          <div className="carousel" id="testimonialCarousel">
            {carouselItems.concat(reviews.map(review => ({ quote: review }))).map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${currentIndex === index ? 'active' : ''} ${
                  currentIndex === (index - 1 + carouselItems.length) % carouselItems.length ? 'left' : ''
                } ${
                  currentIndex === (index + 1) % carouselItems.length ? 'right' : ''
                }`}
              >
                <div className="testimonial">
                  <i className="quote-icon fas fa-quote-left"></i>
                  <p>{item.quote}</p>
                  {item.name && <h4>{item.name}</h4>}
                  {item.location && <h5>{item.location}</h5>}
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
