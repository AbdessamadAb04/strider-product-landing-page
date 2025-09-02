
import React from 'react';
import BikeImage from '../../assets/fe9008ea-6c73-440d-ab77-1e9bd85531f5_removalai_preview.png';
import { Link } from 'react-router-dom';
import CTA from '../../components/cta';
import './index.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Left half: Text content */}
      <div className="text-content">
        <div className="content-wrapper">
          <p className="tagline">Strider's power, Your freedom</p>
          <h1 className="heading">Ride Every Trail With Absolute <span className="heading-accent">Conquerence</span></h1>
          <p className="description">
            Every-inch engineered for wild nature and mountain extremes, Strider absorbs shock like no other.
          </p>
          <Link to="/product">
            <CTA text="Get Your Strider" />
          </Link>
        </div>
      </div>
      {/* Right half: Image/Visual content */}
      <div className="image-section">
        <img src={BikeImage} alt="Strider Bike" className="hero-bike-image" />
      </div>
    </section>
  );
};


export default Hero;

