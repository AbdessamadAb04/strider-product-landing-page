import React from 'react';
import './index.css';

interface HeadingsProps {
  upheadline?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const Headings: React.FC<HeadingsProps> = ({ 
  upheadline, 
  title, 
  subtitle, 
  className = "",
  align = "center"
}) => {
  return (
    <div className={`headings-container ${className}`} data-align={align}>
      {upheadline && (
        <div className="headings-upheadline">{upheadline}</div>
      )}
      <h2 className="headings-title">{title}</h2>
      {subtitle && (
        <p className="headings-subtitle">{subtitle}</p>
      )}
    </div>
  );
};

export default Headings;
