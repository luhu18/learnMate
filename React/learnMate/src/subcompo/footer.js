import React from 'react';


function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} learnMate. All rights reserved.</p>
      <nav className="footer-nav">
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;