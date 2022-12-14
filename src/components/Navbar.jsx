import React from 'react';
import reactLogo from '../../images/react-icon-small.png';
function Navbar() {
  return (
    <header>
      <nav className='nav'>
        <img src={reactLogo} className='nav--logo' />
        <h3 className='nav--logo-text'>ReactFacts</h3>
        <h4 className='nav--title'>React Course - Project 1</h4>
      </nav>
    </header>
  );
}
export default Navbar;
