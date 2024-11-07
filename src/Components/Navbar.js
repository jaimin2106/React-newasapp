import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="/">Quickbuzz</a>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>

        {/* Font Awesome Hamburger Icon */}
        <button className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
