import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Routes, Link } from 'react-router-dom';
import App from './App';
import Login from './Routes/Login';
import Register from './Routes/Register';
import { MantineProvider } from '@mantine/core';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="dashboard" element={<Dashboard />} />
        {/* ... etc. */}
      </Route>
    )
  );


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <HashRouter>
         <Routes>
            <Route index element={<App />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
         </Routes>
      </HashRouter>

);
