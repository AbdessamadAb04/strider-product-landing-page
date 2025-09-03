import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../../components/cta';
import './index.css';
import ZImg1 from '../../assets/bycicle part.jpg';
import ZImg2 from '../../assets/bycicle 2 .jpg';
import ZImg3 from '../../assets/Lucid_Origin_Premium_mountain_bike_studio_photography_matte_bl_2.jpg';

const ZPattern: React.FC = () => {
  return (
    <section className="zpattern-section" id="zpattern">
      {/* First Section - Text Left, Image Right */}
      <div className="zpattern-item">
        <div className="zpattern-container">
          <div className="zpattern-content">
            <p className="zpattern-eyebrow">Why Strider Stands Alone</p>
            <h2 className="zpattern-title">Ride Harder, Longer—Strider Doesn't Flinch</h2>
            <p className="zpattern-description">
              Strider's frame is built from aerospace-grade aluminum and reinforced carbon composites, 
              ensuring unmatched strength and durability. Designed to withstand the toughest trails and 
              harshest conditions, it delivers reliable performance ride after ride.
            </p>
            <div className="zpattern-cta">
              <Link to="/product">
                <CTA text="Get Your Strider" />
              </Link>
            </div>
          </div>
          <div className="zpattern-image">
            <div className="zpattern-image-placeholder">
              <img src={ZImg1} alt="Bicycle Part Closeup" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Image Left, Text Right */}
      <div className="zpattern-item zpattern-reverse">
        <div className="zpattern-container">
          <div className="zpattern-image">
            <div className="zpattern-image-placeholder">
              <img src={ZImg2} alt="Bicycle 2" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
          <div className="zpattern-content">
            <p className="zpattern-eyebrow">Advanced Engineering</p>
            <h2 className="zpattern-title">Precision Meets Performance in Every Component</h2>
            <p className="zpattern-description">
              Every component is meticulously engineered for optimal performance. From precision-machined 
              parts to advanced suspension systems, Strider delivers the smooth, responsive ride that 
              serious riders demand on any terrain.
            </p>
            <div className="zpattern-cta">
              <Link to="/product">
                <CTA text="Get Your Strider" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - Text Left, Image Right */}
      <div className="zpattern-item">
        <div className="zpattern-container">
          <div className="zpattern-content">
            <p className="zpattern-eyebrow">Built for Adventure</p>
            <h2 className="zpattern-title">Conquer Any Trail with Uncompromising Confidence</h2>
            <p className="zpattern-description">
              Whether you're tackling steep mountain paths or cruising through forest trails, Strider's 
              superior handling and stability give you the confidence to explore further. Built for 
              adventurers who refuse to settle for ordinary.
            </p>
            <div className="zpattern-cta">
              <Link to="/product">
                <CTA text="Get Your Strider" />
              </Link>
            </div>
          </div>
          <div className="zpattern-image">
            <div className="zpattern-image-placeholder">
              <img src={ZImg3} alt="Bicycle 3" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZPattern;
