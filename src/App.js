import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Main.css';

export default function App() {
  const navigate = useNavigate();
    return (
      <>
        <div className='flex flex-col items-center container mx-auto max-w-2xl shadow '>
            <span className='text-xl white '>JIRA like todo list</span>
        </div>
      </>

    )
}