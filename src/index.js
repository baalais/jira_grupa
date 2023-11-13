import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Addtask from './Routes/Add-task.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Addtask />
    </React.StrictMode> 
);
