import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

interface CTAProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  to?: string; // Route to navigate to
}

const CTA: React.FC<CTAProps> = ({ 
  text = "Enroll", 
  onClick,
  className = "",
  to
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button className={`cta-button ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default CTA;
