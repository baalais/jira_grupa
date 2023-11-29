import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Main.css';
import Header from './Components/Header.js';

export default function App() {
  const navigate = useNavigate();
    return (
      <>
      <Header/>
      <div class="mainContainer">
        <div class="text">My project</div>
        <div class="square"></div>
</div>
   
      <div class="mainContainer">
        <div class="text">Helpful</div>
        <div class="square"></div>
        {/* <div class="square" onclick="goToPage('./Login.css')"></div> */}

      </div>
   
      
      </>
      
    )
}


