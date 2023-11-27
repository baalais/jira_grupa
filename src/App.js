import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Main.css';
import Header from './Components/Header.js';

export default function App() {
  const navigate = useNavigate();
    return (
      <>
      <Header/>
      <div class="content">
        <h2>My Projects</h2>
        <p>Project 1</p>
        <p>Project 2</p>

        <h2>Helpful Links</h2>
        <p>Link 1</p>
        </div>
      
      </>
      
    )
}


