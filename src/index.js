import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import axios from 'axios';
import Login from './Routes/Login';
import Register from './Routes/Register';
import AddTask from './Routes/Add-task';
import SinglePage from './Routes/SinglePage';

export default function Index() {

  domain_detect();

  function domain_detect(){
      const currentDomain = window.location.hostname;
      const protocol = window.location.protocol;
      window.baseImgUrl = 'https://image.tmdb.org/t/p/original';
      
      window.baseApiUrl   = protocol + '//'+ currentDomain +':3000/api/'; // public url to your api files
      window.notification_color = '#FF9900';
      
      // default axios settings
      axios.defaults.baseURL = window.baseApiUrl;
      axios.defaults.withCredentials = true;
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Add-task" element={<AddTask/>} />
          <Route path="/SinglePage" element={<SinglePage/>} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);