import React, { useState } from 'react';
import CTA from '../../components/cta';
import './index.css';

interface FAQItem {
  question: string;
  answer: string;
}

// About page FAQ data - focused on company information
const aboutFaqData: FAQItem[] = [
  {
    question: "When was Strider founded and by whom?",
    answer: "Strider was founded in 2018 by a passionate team of engineers and designers who shared a vision to revolutionize personal mobility through cutting-edge engineering and uncompromising quality."
  },
  {
    question: "What makes Strider different from other mobility brands?",
    answer: "Our commitment to combining exceptional performance with style and comfort sets us apart. We believe great design should be invisible—it simply works. Every product is engineered to integrate effortlessly into your lifestyle."
  },
  {
    question: "How does Strider approach sustainability?",
    answer: "Sustainability is a core principle that guides every decision we make. From selecting eco-friendly materials to optimizing our manufacturing processes, we're committed to reducing our environmental footprint while delivering exceptional products."
  },
  {
    question: "Where are Strider products manufactured?",
    answer: "Our products are manufactured in our state-of-the-art facilities using rigorous quality control processes. Our team of engineers, designers, and craftspeople work together to ensure every component meets our exacting standards."
  },
  {
    question: "What is Strider's mission and vision for the future?",
    answer: "Our mission is to empower individuals with mobility solutions that seamlessly blend performance, style, and sustainability. We envision a future where innovative mobility enhances every journey while respecting our shared environment."
  },
  {
    question: "How does Strider ensure product quality and reliability?",
    answer: "We never compromise on quality. Every component is rigorously tested and validated through our comprehensive quality control processes. From material selection to final product delivery, we maintain exacting standards for performance, durability, and safety."
  }
];

// About FAQ component - customized for company information
const AboutFAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Learn more about our company, mission, and values</p>
        </div>
        
        <div className="faq-accordion">
          {aboutFaqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(index);
                  }
                }}
              >
                <h3 className="faq-question-text">{faq.question}</h3>
                <span className={`faq-icon ${expandedIndex === index ? 'expanded' : ''}`}>
                  {expandedIndex === index ? '−' : '+'}
                </span>
              </div>
              
              <div className={`faq-answer ${expandedIndex === index ? 'expanded' : 'collapsed'}`}>
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Prompt Section - customized for about page */}
        <div className="faq-contact-prompt">
          <h3 className="faq-contact-title">Want to know more?</h3>
          <p className="faq-contact-text">
            Have questions about our story, mission, or values? We'd love to<br />
            share more about what drives us!
          </p>
          <div className="faq-contact-cta">
            <CTA text="Get in Touch" className="faq-contact-button" to="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFAQ;
