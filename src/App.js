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

  const [userInfo, setUserInfo] = useState({username: 'Guest', email: ''});

  useEffect(() => {
    axios.post('http://localhost/karlis/jira/api/check_login.php')
        .then((res) => {
            console.log(res.data); // Log the entire response
            if (res.data.code === 0) {
                navigate('/login');
            } else if (res.data.reason) {
                if (res.data.reason === false) {
                    console.error("Error: User information not found");
                    // Handle the case where user information is not found
                } else {
                    console.log(res.data.reason); // Log the reason property
                    setUserInfo(res.data.reason);
                }
            } else {
                console.error("Unexpected API response format:", res.data);
            }
        })
        .catch((error) => {
            console.error("Error fetching data from the API:", error);
        });
}, []);



//uztaisit vel sitadas navigateToXXXXX funkcijas lai aizsutitu uz citam lapam (calendar, projects etc.)

    return (
      <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <Header username={userInfo.username} email={userInfo.email}/>
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


