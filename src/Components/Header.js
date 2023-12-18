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
  const navigateToHome = () =>{
    navigate('/');
  }


  //uztaisit navigateTo
  return (
    <header>
      <div className="navbar">
        <a onClick={navigateToHome} >Home</a>
        <a onClick={navigateToAddTask} >Tasks</a>
        <a href="#profile">Profile</a>
        {props.username ? (
          <a onClick={navigateToSignOut}>Sign Out</a>
        ) : (
          <a onClick={navigateToLogin}>Sign In</a>
        )}
        <h1>Welcome {props.username}</h1>
      </div>
    </header>
  );
};



export default Header;