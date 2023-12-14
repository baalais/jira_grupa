import React, { useState, useEffect } from 'react';
import '../Style/SinglePage.css';

// Define the TaskDetails component
const SinglePage = () => {
    const [task, setTask] = useState(null);
    const [error, setError] = useState(null);

    // Fetch task data when the component mounts
    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await fetch('http://localhost/justs/jira_grupa/api/singlepage.php');
                const data = await response.json();

                if (response.ok) {
                    setTask(data);
                } else {
                    setError(`Error: ${data.error || 'Unknown error'}`);
                }
            } catch (error) {
                setError(`Error: ${error.message}`);
            }
        };

        fetchTask();
    }, []);

    // Render the component with dynamic data
    return (
        <div className="box">
            <div className="top">
                <h1>{task?.title}</h1>
            </div>
            <div className="desc">
                <p>{task?.description}</p>
            </div>
            <div className="bottom">
                <p>Due Date: {task?.due_date}</p>
                <p>Status: {task?.status}</p>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default SinglePage;
