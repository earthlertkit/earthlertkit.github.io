import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="main-header">
    <nav>
      <Link to="/" rel="noopener">Home</Link>
      <Link to="/about" rel="noopener">About</Link>
      <Link to="/projects" rel="noopener">Projects</Link>
    </nav>
  </header>
);

export default Header; 