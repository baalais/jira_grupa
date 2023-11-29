import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div class="navbar">
        <a href="#home">Home</a>
        <a href="#tasks">Tasks</a>
        <a href="#profile">Profile</a>
      </div>
    </header>

  );
};



export default Header;