import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
          <nav class="gnav">
            <ul class="gnav-list">
            <li class="gnav-item"><a href="#about-section">ABOUT</a></li>
            <li class="gnav-item"><a  href="#gemes-section">GAMES</a></li>
            <li class="gnav-item"><a  href="#contact-section">CONTACT</a></li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default Header;