import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header = (props) => {
  const navigate = useNavigate();

  const navigateToAddTask = () => {
      navigate('/addTask');
  };
  const navigateToLogin = () => {
    navigate('/login');
  };
  const navigateToSignOut = () => {
    navigate('/signOut');
  };


  //uztaisit navigateTo
  return (
    <header>
      <div className="navbar">
        <a >Home</a>
        <a onClick={navigateToAddTask} >Tasks</a>
        <a href="#profile">Profile</a>
        <a onClick={navigateToLogin}>Sign In</a>
        <a onClick={navigateToSignOut}>Sign Out</a>
        <h1>Welcome {props.username}</h1>
        <p>{props.email}</p>
      </div>
    </header>

  );
};



export default Header;