import React from 'react';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import AboutFAQ from '../../sections/faq/aboutFaq';
import './index.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Navbar />
      
      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-container">
            <h1 className="about-title">About Strider</h1>
            <p className="about-subtitle">
              Pioneering the future of premium mobility with innovative engineering and timeless design.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <div className="about-container">
            <div className="story-content">
              <div className="story-text">
                <h2 className="section-title">Our Story</h2>
                <p className="story-paragraph">
                  Founded in 2018 with a simple yet ambitious vision: to revolutionize personal mobility through 
                  cutting-edge engineering and uncompromising quality. What started as a small team of passionate 
                  engineers and designers has evolved into a leading force in premium mobility solutions.
                </p>
                <p className="story-paragraph">
                  Every Strider product represents countless hours of research, development, and testing. We believe 
                  that exceptional performance shouldn't come at the expense of style or comfort. Our commitment to 
                  innovation drives us to push the boundaries of what's possible, creating products that don't just 
                  meet expectations—they exceed them.
                </p>
                <p className="story-paragraph">
                  From our state-of-the-art manufacturing facilities to our rigorous quality control processes, 
                  we ensure that every component meets our exacting standards. Our team of engineers, designers, 
                  and craftspeople work together to create products that are not only functional and reliable, 
                  but also beautiful and inspiring.
                </p>
              </div>
              <div className="story-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Innovation in Motion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="about-container">
            <div className="mission-content">
              <div className="mission-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1"/>
                      <path d="M16 8L8 16" stroke="currentColor" strokeWidth="1"/>
                      <path d="M8 8L16 16" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                    <span>Precision Engineering</span>
                  </div>
                </div>
              </div>
              <div className="mission-text">
                <h2 className="section-title">Our Mission</h2>
                <p className="mission-paragraph">
                  To empower individuals with mobility solutions that seamlessly blend performance, style, and 
                  sustainability. We're committed to creating products that not only enhance your journey but 
                  also respect the environment we all share.
                </p>
                <p className="mission-paragraph">
                  We believe that great design is invisible—it simply works. Our products are engineered to 
                  integrate effortlessly into your lifestyle, providing reliable performance without compromise. 
                  Whether you're navigating city streets or exploring new terrain, Strider products are designed 
                  to adapt to your needs.
                </p>
                <p className="mission-paragraph">
                  Sustainability isn't just a buzzword for us—it's a core principle that guides every decision 
                  we make. From selecting eco-friendly materials to optimizing our manufacturing processes, 
                  we're committed to reducing our environmental footprint while delivering exceptional products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="about-container">
            <h2 className="section-title centered">What Drives Us</h2>
            <div className="values-content">
              <p className="values-paragraph">
                At the heart of everything we do are three fundamental principles that guide our approach to 
                innovation and customer service. These values aren't just words on a wall—they're the foundation 
                of our company culture and the lens through which we evaluate every decision.
              </p>
              <p className="values-paragraph">
                <strong>Quality First:</strong> We never compromise on quality, from the materials we select to 
                the final product that reaches your hands. Every component is rigorously tested and validated 
                to ensure it meets our exacting standards for performance, durability, and safety.
              </p>
              <p className="values-paragraph">
                <strong>Innovation Always:</strong> We're constantly pushing the boundaries of what's possible, 
                investing in research and development to bring you the latest advances in mobility technology. 
                Our team of engineers and designers work tirelessly to solve complex challenges and create 
                breakthrough solutions.
              </p>
              <p className="values-paragraph">
                <strong>Customer Focused:</strong> Your satisfaction is our success. We listen to feedback, 
                continuously improve our products, and provide exceptional support throughout your journey with us. 
                Every product we create is designed with you, our customer, at the center of our thinking.
              </p>
            </div>
            <div className="values-image">
              <div className="image-placeholder large">
                <div className="placeholder-content">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Built to Last</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <AboutFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default About;
