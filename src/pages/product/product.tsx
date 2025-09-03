import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import Testimonials from '../../sections/testimonials';
import FAQ from '../../sections/faq';
import ProductFeatures from '../../sections/productFeatures'; // Product-specific features component
import './index.css';
import BikeGold from '../../assets/Untitled design (15).png';
import PremiumHelmet from '../../assets/bycicle helmet.jpg';
import TrailGloves from '../../assets/gloves helmet.jpg';
import MaintenanceKit from '../../assets/bycicle repair kit.jpg';
import BikeBlue from '../../assets/Untitled design (16).png';
import BikeRed from '../../assets/Untitled design (17).png';
import BikeYellow from '../../assets/Untitled design (18).png';
import BikeBlack from '../../assets/Untitled design (19).png';

const ProductPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Matte Black');
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const popupTimeoutRef = React.useRef<number | null>(null);

  const handleShowPopup = () => {
    setShowPopup(false); // Reset animation
    if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    setTimeout(() => {
      setShowPopup(true);
      popupTimeoutRef.current = setTimeout(() => setShowPopup(false), 1800);
    }, 10); // Small delay to retrigger animation
  };

  const productImages = [

    { id: 1, url: BikeGold, alt: 'Mountain Bike - Gold Accents' },
    { id: 2, url: BikeBlue, alt: 'Mountain Bike - Blue Accents' },
    { id: 3, url: BikeRed, alt: 'Mountain Bike - Red Accents' },
    { id: 4, url: BikeYellow, alt: 'Mountain Bike - Yellow Accents' },
    { id: 5, url: BikeBlack, alt: 'Mountain Bike - Black Accents' }
  ];

  const sizeOptions = ['S', 'M', 'L', 'XL'];
  const colorOptions = [
    { name: 'Matte Black', color: '#2C2C2C' },
    { name: 'Forest Green', color: '#2D5016' },
    { name: 'Arctic Blue', color: '#1B365D' }
  ];

  return (
    <div className="product-page">
      <Navbar />
      
      {/* Hero Product Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-content">
            {/* Product Gallery */}
            <div className="product-gallery">
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '1rem' }}>
                <img 
                  src={productImages[selectedImage].url} 
                  alt={productImages[selectedImage].alt} 
                  style={{ 
                    width: '460px', 
                    height: '460px', 
                    objectFit: 'contain', 
                    display: 'block', 
                    zIndex: 2
                  }}
                />
              </div>
              
              <div className="thumbnail-gallery">
                {productImages.map((image, index) => (
                  <div 
                    key={image.id} 
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt} 
                      style={{ width: '80px', height: '80px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="product-details">
              <div className="product-header">
                <h1>Strider Mountain Bike</h1>
                <div className="product-rating">
                  <div className="stars">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="#C4A574">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="rating-text">(127 reviews)</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="product-pricing">
                <span className="current-price">$3,499</span>
                <span className="original-price">$3,999</span>
                <span className="savings-badge">Save $500</span>
              </div>

              {/* Product Options */}
              <div className="product-options">
                {/* Size Selection */}
                <div className="option-group">
                  <label>Size</label>
                  <div className="size-options">
                    {sizeOptions.map(size => (
                      <div 
                        key={size}
                        className={`size-option ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div className="option-group">
                  <label>Color: {selectedColor}</label>
                  <div className="color-options">
                    {colorOptions.map(colorOption => (
                      <div 
                        key={colorOption.name}
                        className={`color-option ${selectedColor === colorOption.name ? 'active' : ''}`}
                        onClick={() => setSelectedColor(colorOption.name)}
                      >
                        <div 
                          className="color-swatch"
                          style={{ backgroundColor: colorOption.color }}
                        ></div>
                        <span>{colorOption.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="option-group">
                  <label>Quantity</label>
                  <div className="quantity-selector">
                    <button 
                      className="qty-btn"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >-</button>
                    <span className="quantity">{quantity}</span>
                    <button 
                      className="qty-btn"
                      onClick={() => setQuantity(quantity + 1)}
                    >+</button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="product-actions">
                <button className="add-to-cart-btn" onClick={handleShowPopup}>Add to Cart</button>
                <button className="buy-now-btn" onClick={handleShowPopup}>Buy Now</button>
              </div>

              {/* Popup Alert */}
              <style>{`
                @keyframes popupSlideDown {
                  0% { opacity: 0; transform: translate(-50%, -40px); }
                  100% { opacity: 1; transform: translate(-50%, 0); }
                }
                @keyframes popupSlideUp {
                  0% { opacity: 1; transform: translate(-50%, 0); }
                  100% { opacity: 0; transform: translate(-50%, -40px); }
                }
              `}</style>
              <div
                style={{
                  pointerEvents: 'none',
                  position: 'fixed',
                  top: '40px',
                  left: '50%',
                  transform: showPopup ? 'translate(-50%, 0)' : 'translate(-50%, -40px)',
                  background: 'linear-gradient(135deg, #ececec 60%, #d1d1d1 100%)',
                  color: '#444',
                  borderRadius: '14px',
                  boxShadow: '0 6px 32px 0 rgba(0,0,0,0.18)',
                  padding: '1.2rem 2.5rem',
                  zIndex: 9999,
                  fontWeight: 700,
                  fontSize: '1.13rem',
                  textAlign: 'center',
                  letterSpacing: '0.01em',
                  fontFamily: 'Segoe UI, Arial, sans-serif',
                  textShadow: '0 1px 0 #fff, 0 2px 8px #bbb',
                  border: '1.5px solid #e0e0e0',
                  opacity: showPopup ? 1 : 0,
                  animation: showPopup
                    ? 'popupSlideDown 0.5s cubic-bezier(.6,1.5,.5,1)'
                    : 'popupSlideUp 0.5s cubic-bezier(.6,1.5,.5,1) forwards',
                  transition: 'opacity 0.5s, transform 0.5s',
                  willChange: 'opacity, transform',
                }}
              >
                The program ends here
              </div>

              {/* Shipping Info */}
              <div className="shipping-info">
                <div className="shipping-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3H5A2 2 0 0 0 3 5V16A2 2 0 0 0 5 18H16A2 2 0 0 0 18 16V5A2 2 0 0 0 16 3Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 6V8H18V6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Free shipping on orders over $2,500</span>
                </div>
                <div className="shipping-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Ships within 2-3 business days</span>
                </div>
                <div className="shipping-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>30-day return guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - Product-specific features component isolated from main overview */}
      <section className="product-features-section">
        <div className="container">
          <h2>Engineered for Every Adventure</h2>
          <ProductFeatures />
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="tech-specs-section">
        <div className="container">
          <h2>Technical Specifications</h2>
          <div className="tech-specs-content">
            <div className="specs-text">
              <div className="specs-group">
                <h3>Frame & Construction</h3>
                <div className="spec-item">
                  <span className="spec-label">Material:</span>
                  <span className="spec-value">Carbon Fiber Monocoque</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Weight:</span>
                  <span className="spec-value">22.5 lbs (10.2 kg)</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Frame Size:</span>
                  <span className="spec-value">S, M, L, XL</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Geometry:</span>
                  <span className="spec-value">Trail Optimized</span>
                </div>
              </div>

              <div className="specs-group">
                <h3>Drivetrain & Performance</h3>
                <div className="spec-item">
                  <span className="spec-label">Gearing:</span>
                  <span className="spec-value">12-Speed SRAM Eagle</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Brakes:</span>
                  <span className="spec-value">Hydraulic Disc, 180mm Rotors</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Suspension:</span>
                  <span className="spec-value">120mm Front, 110mm Rear</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Wheels:</span>
                  <span className="spec-value">29" Carbon Fiber Rims</span>
                </div>
              </div>

              <div className="specs-group">
                <h3>Dimensions & Compatibility</h3>
                <div className="spec-item">
                  <span className="spec-label">Wheelbase:</span>
                  <span className="spec-value">1,165mm - 1,210mm</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Head Angle:</span>
                  <span className="spec-value">67.5° - 68.5°</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Seat Tube:</span>
                  <span className="spec-value">74° Effective</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Max Tire:</span>
                  <span className="spec-value">2.6" Width</span>
                </div>
              </div>
            </div>
            
            <div className="specs-visual">
              <div className="engineering-highlight">
                <h3>Engineering Excellence</h3>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4>Aerospace-Grade Materials</h4>
                  <p>T800 carbon fiber with strategic fiber layup for optimal strength-to-weight ratio.</p>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 1V5M12 19V23M4.22 4.22L7.05 7.05M16.95 16.95L19.78 19.78M1 12H5M19 12H23M4.22 19.78L7.05 16.95M16.95 7.05L19.78 4.22" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4>Precision Manufacturing</h4>
                  <p>CNC-machined components with tolerances within 0.1mm for perfect alignment.</p>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3 14L12 14L11 22L21 10L12 10L13 2Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4>Advanced Geometry</h4>
                  <p>Computer-optimized frame geometry for superior handling and rider comfort.</p>
                </div>
              </div>
              
              <div className="specs-diagram">
                <div className="diagram-placeholder">
                  <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="80" width="260" height="40" rx="20" stroke="#C4A574" strokeWidth="3" fill="none"/>
                    <circle cx="50" cy="150" r="25" stroke="#C4A574" strokeWidth="3" fill="none"/>
                    <circle cx="250" cy="150" r="25" stroke="#C4A574" strokeWidth="3" fill="none"/>
                    <line x1="75" y1="150" x2="225" y2="150" stroke="#C4A574" strokeWidth="2"/>
                    <line x1="150" y1="100" x2="150" y2="40" stroke="#C4A574" strokeWidth="2"/>
                    <text x="150" y="30" textAnchor="middle" fill="#C4A574" fontSize="12" fontWeight="bold">STRIDER</text>
                  </svg>
                  <p>Technical Frame Geometry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products section */}
      <section className="related-products">
        <div className="container">
          <h2>Complete Your Setup</h2>
          <div className="products-grid">
            <div className="product-card" style={{ cursor: 'pointer' }} onClick={handleShowPopup}>
              <div className="product-image-placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '260px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={PremiumHelmet}
                  alt="Premium Helmet"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <h3>Premium Helmet</h3>
              <p>Professional-grade protection</p>
              <span className="product-price">$149</span>
            </div>
            <div className="product-card" style={{ cursor: 'pointer' }} onClick={handleShowPopup}>
              <div className="product-image-placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '260px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={TrailGloves}
                  alt="Trail Gloves"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <h3>Trail Gloves</h3>
              <p>Enhanced grip and comfort</p>
              <span className="product-price">$39</span>
            </div>
            <div className="product-card" style={{ cursor: 'pointer' }} onClick={handleShowPopup}>
              <div className="product-image-placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '260px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={MaintenanceKit}
                  alt="Maintenance Kit"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <h3>Maintenance Kit</h3>
              <p>Keep your Strider in perfect condition</p>
              <span className="product-price">$89</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section - moved below Complete Your Setup for better flow */}
      <FAQ />

      <Footer />
    </div>
  );
};

export default ProductPage;
