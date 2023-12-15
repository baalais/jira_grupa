import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Main.css';
import Header from './Components/Header.js';
import axios from 'axios';

export default function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);


  const navigateToAddTask = () => {
    navigate('/addTask');
  };
  
  //http://localhost/jira_grupa/jira_grupa/api/check_login.php <----- Link to use at home
  //http://localhost/karlis/jira/api/check_login.php <---- Link to use at school
  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('http://localhost/karlis/jira/api/check_login.php');
      const data = response.data;

      console.log('Data received:', data);

      if (data.isLoggedIn) {
        setIsLoggedIn(true);
        setUsername(data.username);
        console.log('Username set:', data.username);
      } else {
        setIsLoggedIn(false);
        setUsername(null);
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    console.log('useEffect triggered');
    checkLoginStatus().then(loggedIn => {
      if (!loggedIn) {
        navigate('/login');
      }
    });
  }, []);
  



//uztaisit vel sitadas navigateToXXXXX funkcijas lai aizsutitu uz citam lapam (calendar, projects etc.)

    return (
      <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <Header username={username}/>
      <div className="base">
        <div className="mainContainer">
          <p>My project</p>
          <div className="square">
          <span className="material-symbols-outlined">folder_copy</span>
          </div>
        </div>
    
        <div className="mainContainer">
          <p>Helpful</p>
          <div className="square">
          <span className="material-symbols-outlined">help</span>
          </div> 
        </div>

          
        <div className="mainContainer">
          <p>Create New Project</p>
          <div onClick={navigateToAddTask} className="square">
          <span className="material-symbols-outlined">add_circle</span>
          </div> 
        </div>

        <div className="mainContainer">
          <p>Calendar</p>
          <div className="square">
          <span className="material-symbols-outlined">calendar_month</span>
          </div> 
        </div>
      </div>
      </>
    )
}


