import OverviewBike from '../../assets/Lucid_Origin_Actually_I_want_A_highresolution_full_side_view_o_1.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import Headings from '../../components/headings';
import CTA from '../../components/cta';
import './index.css';

const Overview: React.FC = () => {
  return (
    <section className="overview-section" id="overview">
      <div className="overview-container">
        {/* Main heading */}
        <Headings 
          upheadline="Why Choose Strider"
          title="Engineered for Every Adventure"
          subtitle="Experience the perfect fusion of cutting-edge technology and refined craftsmanship. Every component is precision-engineered to deliver uncompromising performance on any trail."
          className="overview-headings"
        />

        {/* Features grid with central image */}
        <div className="features-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Top Left - Durability */}
            <div className="feature-card feature-top-left">
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

            {/* Bottom Left - Comfort */}
            <div className="feature-card feature-bottom-left">
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
          </div>

          {/* Central Image */}
          <div className="central-image">
            <div className="overview-image-placeholder">
              <img src={OverviewBike} alt="Strider Overview Bike" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Top Right - Mobility */}
            <div className="feature-card feature-top-right">
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

            {/* Bottom Right - Performance */}
            <div className="feature-card feature-bottom-right">
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

        {/* CTA Button */}
        <div className="overview-cta">
          <Link to="/product">
            <CTA text="Get Your Strider" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Overview;
