import React from 'react';
import { Link } from 'react-router-dom';
import Headings from '../../components/headings';
import CTA from '../../components/cta';
import './index.css';

const PureCTA: React.FC = () => {
  return (
    <section className="purecta-section">
      <div className="purecta-container">
        <Headings 
          upheadline="Limited Time Offer"
          title="Get Your Strider Today — Save 20%!"
          subtitle="For a limited time, access 20% savings on your precision-engineered conquest machine. Experience battlefield-tested durability and championship-grade performance on every terrain you dominate."
          align="center"
          className="purecta-headings"
        />
        
        {/* Urgency Indicator */}
        <div className="mission-status">
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span className="status-text">PREMIUM UNITS AVAILABLE</span>
          </div>
          <div className="mission-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <span className="progress-text">TACTICAL ADVANTAGE: 72% SECURED</span>
          </div>
        </div>
        
        <div className="purecta-cta">
          <Link to="/product">
            <CTA text="Get Your Strider Now" className="purectabutton conquest-button" />
          </Link>
        </div>
      </div>
      
      {/* Industrial Background Elements */}
      <div className="technical-grid"></div>
      <div className="mountain-silhouette"></div>
      <div className="carbon-texture"></div>
    </section>
  );
};

export default PureCTA;
