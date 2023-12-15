import React, { useState, useEffect } from 'react';
import '../Style/SinglePage.css';

const SinglePage = () => {
    const [task, setTask] = useState(null);
    const [error, setError] = useState(null);
    const [boxHeight, setBoxHeight] = useState(300); // Set an initial height

    useEffect(() => {
      const fetchTask = async () => {
          try {
              const response = await fetch('http://localhost/justsipb21/Jauna%20mape/api/singlepage.php');
              const data = await response.json();
  
              if (response.ok) {
                  setTask(data);
  
                  // Set a maximum height for the box
                  const maxHeight = 500; // Adjust the maximum height as needed
                  setBoxHeight(maxHeight);
              } else {
                  setError(`Error: ${data.error || 'Unknown error'}`);
              }
          } catch (error) {
              setError(`Error: ${error.message}`);
          }
      };
  
      fetchTask();
  }, []);
  

    return (
        <div className="container">
            <div className="box" style={{ height: `${boxHeight}px` }}>
                <div className="top">
                    <h1>{task?.title}</h1>
                </div>
                <div className="desc">
                    <p>{task?.description}</p>
                </div>
                <div className="bottom">
                    <p>Due Date: {task?.due_date}</p>
                    <p>{task?.status}</p>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default SinglePage;
