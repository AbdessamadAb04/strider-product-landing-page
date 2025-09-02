import React from 'react';
import { Link } from 'react-router-dom';
import Headings from '../../components/headings';
import CTA from '../../components/cta';
import './index.css';

const BenefitsBlocs: React.FC = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        {/* Main heading */}
        <Headings 
          upheadline="Empower"
          title="Unstoppable Strength, Endless Freedom"
          subtitle="Discover the elite features that conceals power, resilience, and complexity - Strider is subtle in looks but dominant on any surface."
          className="benefits-headings"
        />

        {/* Three-column grid */}
        <div className="benefits-grid">
          {/* Left Column */}
          <div className="benefit-card">
            <div className="benefit-image">
              <div className="benefit-image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 20L9 12L13 16L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 8H17M21 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="benefit-title">Unshakeable Confidence on Any Terrain</h3>
            <p className="benefit-description">
              With Strider's shock-absorbing design, you gain peace of mind on every trail, 
              empowering you to explore boldly and embrace adventure without hesitation.
            </p>
          </div>

          {/* Center Column */}
          <div className="benefit-card">
            <div className="benefit-image">
              <div className="benefit-image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="benefit-title">Built to Last, Crafted to Adapt</h3>
            <p className="benefit-description">
              Strider's durable engineering means fewer repairs and more time riding, 
              giving you freedom and savings that enhance your active lifestyle.
            </p>
          </div>

          {/* Right Column */}
          <div className="benefit-card">
            <div className="benefit-image">
              <div className="benefit-image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61A5.5 5.5 0 0 0 16.5 2.03A5.5 5.5 0 0 0 12 4.61A5.5 5.5 0 0 0 7.5 2.03A5.5 5.5 0 0 0 3.16 4.61C1.84 5.93 1.84 8.07 3.16 9.39L12 18.23L20.84 9.39C22.16 8.07 22.16 5.93 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="benefit-title">A Bike That Matches Your Spirit</h3>
            <p className="benefit-description">
              Strider's strong yet simple design inspires confidence and connection with nature, 
              fueling your passion for exploration and personal growth.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="benefits-cta">
          <Link to="/product">
            <CTA text="Get Your Strider" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenefitsBlocs;
