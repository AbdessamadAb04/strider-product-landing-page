import React from 'react';
import './productFeatures.css';

const ProductFeatures: React.FC = () => {
  return (
    <div className="product-features-container">
      {/* Features grid with horizontal layout */}
      <div className="features-grid">
        {/* Durability */}
        <div className="feature-card feature-durability">
          <div className="feature-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="feature-title">Fortress-Grade Durability</h3>
          <p className="feature-description">
            Built with aerospace-grade materials and engineering precision. 
            Designed to withstand the most demanding conditions and deliver reliable performance for years.
          </p>
        </div>

        {/* Mobility */}
        <div className="feature-card feature-mobility">
          <div className="feature-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="feature-title">Unlimited Terrain Mastery</h3>
          <p className="feature-description">
            Advanced geometry and suspension technology adapt to every trail condition. 
            From smooth paths to challenging terrain, experience confidence on every ride.
          </p>
        </div>

        {/* Comfort */}
        <div className="feature-card feature-comfort">
          <div className="feature-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61A5.5 5.5 0 0 0 16.5 2.03A5.5 5.5 0 0 0 12 4.61A5.5 5.5 0 0 0 7.5 2.03A5.5 5.5 0 0 0 3.16 4.61C1.84 5.93 1.84 8.07 3.16 9.39L12 18.23L20.84 9.39C22.16 8.07 22.16 5.93 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="feature-title">Precision Comfort Engineering</h3>
          <p className="feature-description">
            Ergonomically designed for extended rides with optimized contact points. 
            Advanced shock absorption reduces fatigue and enhances your riding experience.
          </p>
        </div>

        {/* Performance */}
        <div className="feature-card feature-performance">
          <div className="feature-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="feature-title">Advanced Suspension System</h3>
          <p className="feature-description">
            State-of-the-art suspension technology delivers smooth, controlled performance. 
            Precision-tuned for optimal balance between comfort and responsiveness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
