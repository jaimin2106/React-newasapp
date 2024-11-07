import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="/news">News</a></li>
            <li><a href="/sports">Sports</a></li>
            <li><a href="/entertainment">Entertainment</a></li>
            <li><a href="/technology">Technology</a></li>
            <li><a href="/politics">Politics</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Contact Us: <a href="mailto:support@quickbuzz.com">support@quickbuzz.com</a></p>
        <p>© {new Date().getFullYear()} Quickbuzz. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
