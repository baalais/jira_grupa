import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Main.css';
import Header from './Components/Header.js';


export default function App() {
  const navigate = useNavigate();

  const navigateToAddTask = () => {
      navigate('/addTask');
  };

//uztaisit vel sitadas navigateToXXXXX funkcijas lai aizsutitu uz citam lapam (calendar, projects etc.)

    return (
      <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <Header/>
      <div className="base">
        <div class="mainContainer">
          <p>My project</p>
          <div class="square">
          <span class="material-symbols-outlined">folder_copy</span>
          </div>
        </div>
    
        <div class="mainContainer">
          <p>Helpful</p>
          <div class="square">
          <span class="material-symbols-outlined">help</span>
          </div> 
        </div>

          
        <div class="mainContainer">
          <p>Create New Project</p>
          <div onClick={navigateToAddTask} class="square">
          <span className="material-symbols-outlined">add_circle</span>
          </div> 
        </div>

        <div class="mainContainer">
          <p>Calendar</p>
          <div class="square">
          <span class="material-symbols-outlined">calendar_month</span>
          </div> 
        </div>
      </div>
      </>
    )
}


