import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Tasks</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </header>
  );
};

export default Header;