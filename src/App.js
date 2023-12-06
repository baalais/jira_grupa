import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Main.css';
import Header from './Components/Header.js';
import axios from 'axios';


export default function App() {
  const navigate = useNavigate();
  const navigateToAddTask = () => {
    navigate('/addTask');
  };

  const [userInfo, setUserInfo] = useState({ username: 'Guest' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/karlis/jira/api/check_login.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.code === 0) {
          // Redirect to the login page if the login is not successful
          navigate('/login');
        } else {
          // Set user information if the login is successful
          setUserInfo(data.reason);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., show a user-friendly message
      }
    };

    fetchData();
  }, [navigate]); // Add 'navigate' to the dependency array to satisfy the ESLint exhaustive-deps rule



//uztaisit vel sitadas navigateToXXXXX funkcijas lai aizsutitu uz citam lapam (calendar, projects etc.)

    return (
      <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <Header/>
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


