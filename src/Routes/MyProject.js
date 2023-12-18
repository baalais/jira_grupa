import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/MyProject.css';
import Header from '../Components/Header.js';

export default function App() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);

    const navigateToSinglePage = () => {
        navigate('/SinglePage');
      }

return (
    <>
    <Header />
    <div className="ja">
      <div className="ProjectContainer">
        <p>Nosaukums</p>
        <div onClick={navigateToSinglePage} className="kvadrats">
        {/* <span className="material-symbols-outlined">folder_copy</span> */}
        </div>
      </div>
  
      <div className="ProjectContainer">
        <p>Nosaukums</p>
        <div onClick={navigateToSinglePage} className="kvadrats">
        {/* <span className="material-symbols-outlined">help</span> */}
        </div> 
      </div>

        
      <div className="ProjectContainer">
        <p>Nosaukums</p>
        <div onClick={navigateToSinglePage} className="kvadrats">
        {/* <span className="material-symbols-outlined">add_circle</span> */}
        </div> 
      </div>

    
    </div>
    </>
  )
}
  