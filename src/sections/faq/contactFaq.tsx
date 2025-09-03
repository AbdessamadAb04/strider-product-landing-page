import React, { useState } from 'react';
import './index.css'; // Use original FAQ styles

interface FAQItem {
  question: string;
  answer: string;
}

// Contact-specific FAQ data - only content differs from original
const contactFaqData: FAQItem[] = [
  {
    question: "How quickly will I receive a response?",
    answer: "We typically respond to all inquiries within 24 hours during business days. For urgent technical support, please call our direct line at +1 (650) 555-0142 for immediate assistance."
  },
  {
    question: "What are your customer support hours?",
    answer: "Our phone support is available Monday through Friday, 9:00 AM - 6:00 PM PST. Email support is monitored 24/7, and we respond to messages within one business day."
  },
  {
    question: "What's the best way to contact you for different types of inquiries?",
    answer: "For general questions, use our contact form or email. For technical support or urgent issues, call our direct line. For business partnerships or press inquiries, please specify in your message subject line."
  },
  {
    question: "What information should I include when contacting support?",
    answer: "Please include as much detail as possible: your specific question, any error messages, your operating system, and relevant background information. This helps us provide faster, more accurate assistance."
  }
];

// Contact-specific FAQ component - uses identical styling to original FAQ
const ContactFAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section"> {/* Same class as original FAQ */}
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Find quick answers to common questions about contacting Strider</p>
        </div>
        
        <div className="faq-accordion">
          {contactFaqData.map((faq, index) => (
            <div key={index} className="faq-item"> {/* Same class as original FAQ */}
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
        
        {/* No contact prompt section for contact page */}
      </div>
    </section>
  );
};

export default ContactFAQ;
