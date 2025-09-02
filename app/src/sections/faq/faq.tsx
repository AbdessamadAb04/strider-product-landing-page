import React, { useState } from 'react';
import CTA from '../../components/cta';
import './index.css';

interface FAQItem {
  question: string;
  answer: string;
}

// Original FAQ data - focused on product information
const faqData: FAQItem[] = [
  {
    question: "What materials is the Strider bike made from?",
    answer: "Strider uses a specially engineered alloy frame combined with reinforced carbon composites, making it both lightweight and incredibly durable."
  },
  {
    question: "How adjustable is the bike for different riders?",
    answer: "The Strider features customizable seat height, handlebar position, and suspension settings, designed to fit riders of various sizes comfortably."
  },
  {
    question: "Can Strider handle extreme terrains like mountains and rough trails?",
    answer: "Absolutely! It's built specifically for tough environments, with shock-absorbing suspension and rugged tires to tackle mountains, mud, and rocky paths."
  },
  {
    question: "What kind of maintenance does the Strider require?",
    answer: "Routine maintenance like chain lubrication and brake checks are recommended, but the bike's durable construction minimizes frequent repairs."
  },
  {
    question: "Do you offer worldwide shipping?",
    answer: "Yes, we ship Strider bikes globally with reliable carriers to ensure your bike arrives safely wherever you are."
  }
];

// Original FAQ component - used for home and product pages
const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">FAQs</h2>
          <p className="faq-subtitle">Got questions? We've got answers to help!</p>
        </div>
        
        <div className="faq-accordion">
          {faqData.map((faq, index) => (
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
        
        {/* Contact Prompt Section - restored for original FAQ */}
        <div className="faq-contact-prompt">
          <h3 className="faq-contact-title">Still have questions?</h3>
          <p className="faq-contact-text">
            Don't hesitate to reach out - our contact team is available 24/7 to<br />
            assist you!
          </p>
          <div className="faq-contact-cta">
            <CTA text="Contact" className="faq-contact-button" to="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
