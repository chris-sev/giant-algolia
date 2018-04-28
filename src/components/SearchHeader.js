import React from 'react';
import './SearchHeader.css';

export default ({ text, children }) => (
  <div className="section-header">
    <h3 className="title section-title">{text}</h3>
    
    {children}
  </div>
);