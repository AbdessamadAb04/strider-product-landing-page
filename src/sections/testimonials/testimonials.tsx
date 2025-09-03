import React, { useState, useEffect } from 'react';
import Headings from '../../components/headings';
import './index.css';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  
  // All testimonials data
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "The Strider bike has completely transformed my outdoor adventures. Its rugged build handles any terrain with ease, and the shock absorption makes every ride smooth and comfortable.",
      name: "John Doe",
      title: "Adventure Enthusiast"
    },
    {
      id: 2,
      rating: 5,
      text: "I've been using my Strider for mountain trails and urban commuting alike. The versatility and reliability are unmatched. Best investment I've made for my fitness journey.",
      name: "Jane Smith",
      title: "Fitness Coach"
    },
    {
      id: 3,
      rating: 5,
      text: "As someone who demands precision and quality, the Strider delivers on every front. The engineering excellence is evident in every component and every ride.",
      name: "Alice Johnson",
      title: "Engineering Consultant"
    },
    {
      id: 4,
      rating: 5,
      text: "Outstanding performance and reliability. This bike has exceeded all my expectations and transformed my daily commute into an adventure I look forward to every day.",
      name: "Michael Chen",
      title: "Product Manager"
    },
    {
      id: 5,
      rating: 5,
      text: "Incredible build quality and attention to detail. The team's dedication to excellence shows in every aspect of this remarkable machine. Simply the best bike I've ever owned.",
      name: "Sarah Williams",
      title: "UX Designer"
    },
    {
      id: 6,
      rating: 5,
      text: "Game-changing technology that delivers on every promise. I recommend the Strider to anyone looking for premium quality, uncompromising performance, and outstanding results.",
      name: "David Rodriguez",
      title: "Engineering Lead"
    },
    {
      id: 7,
      rating: 5,
      text: "The Strider has redefined what I expect from a mountain bike. Its tactical precision and military-grade durability make it the ultimate conquest machine for serious riders.",
      name: "Marcus Thompson",
      title: "Trail Guide & Explorer"
    },
    {
      id: 8,
      rating: 5,
      text: "Every component speaks to technical superiority. From the aerospace-grade frame to the precision-engineered suspension, this bike dominates every trail with tactical excellence.",
      name: "Elena Vasquez",
      title: "Mechanical Engineer"
    },
    {
      id: 9,
      rating: 5,
      text: "Built for conquest, engineered for victory. The Strider doesn't just handle extreme terrain—it conquers it. This is the weapon of choice for serious trail domination.",
      name: "James Mitchell",
      title: "Extreme Sports Athlete"
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false); // Disable auto-play when user interacts
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false); // Disable auto-play when user interacts
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    setIsAutoPlay(false); // Disable auto-play when user interacts
  };

  // Auto-advance slides every 8 seconds, but only if auto-play is enabled
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <svg key={index} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    ));
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 3;
    const endIndex = Math.min(startIndex + 3, testimonials.length);
    return testimonials.slice(startIndex, endIndex);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        {/* Main heading */}
        <Headings 
          upheadline="Testimonials"
          title="Real Riders, Real Stories"
          subtitle="See what our customers say about our products"
        />

        {/* Testimonials Carousel */}
        <div className="testimonials-carousel">
          {/* Left Arrow */}
          <button 
            className="carousel-arrow carousel-arrow-left" 
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Testimonial Cards */}
          <div className="testimonials-grid" key={`slide-${currentSlide}`}>
            {getCurrentTestimonials().map((testimonial, index) => (
              <div key={`${currentSlide}-${testimonial.id}-${index}`} className="testimonial-card">
                <div className="star-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="quote-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <p className="testimonial-text">
                  {testimonial.text}
                </p>
                <div className="customer-profile">
                  <div className="customer-avatar"></div>
                  <div className="customer-info">
                    <h4 className="customer-name">{testimonial.name}</h4>
                    <p className="customer-title">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            className="carousel-arrow carousel-arrow-right" 
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dot Pagination */}
        <div className="carousel-pagination">
          {Array.from({ length: totalSlides }, (_, index) => (
            <div 
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
