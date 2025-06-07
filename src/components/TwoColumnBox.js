import React from 'react';
import '../styles/index.css';

const TwoColumnBox = ({ left, right }) => (
  <div className="two-column-box">
    <div className="column left-column">{left}</div>
    <div className="column right-column">{right}</div>
  </div>
);

export default TwoColumnBox; 