import React, { useState, useEffect } from 'react';

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    updateCarousel();
  }, [currentIndex]);

  const updateCarousel = () => {
    // This function is no longer necessary in this context since we are using React state
  };

  const moveNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const movePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div>
      <section className="review">
        <div className="carousel-container">
          <h2 className="carousel-title">Success Stories</h2>
          <div className="carousel" id="testimonialCarousel">
            {carouselItems.map((item, index) => (
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
                  <h4>{item.name}</h4>
                  <h5>{item.location}</h5>
                </div>
              </div>
            ))}
          </div>
          <button className="prev" onClick={movePrev}>
            &#10094;
          </button>
          <button className="next" onClick={moveNext}>
            &#10095;
          </button>
        </div>
      </section>
    </div>
  );
}
