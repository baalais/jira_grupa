import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const navigateToAddTask = () => {
      navigate('/addTask');
  };

  //uztaisit navigateTo
  return (
    <header>
      <div class="navbar">
        <a >Home</a>
        <a onClick={navigateToAddTask} >Tasks</a>
        <a href="#profile">Profile</a>
      </div>
    </header>

  );
};



export default Header;