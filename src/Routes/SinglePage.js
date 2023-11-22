import '../Style/SinglePage.css';
import React, { useEffect, useState } from 'react';

function SinglePage() {
    const [task, setTask] = useState(null);
    const defaultTaskId = 1; // Set your default task ID here

    useEffect(() => {
        // For testing purposes, use the defaultTaskId instead of getting it from the URL
        const taskId = defaultTaskId;

        // Make an AJAX request to fetch task details
        fetch(`../api/singlepage.php?id=${taskId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setTask(data);
            })
            .catch(error => {
                console.error('Error fetching task:', error.message); // Log the detailed error message
            });
    }, []);

    return (
        <div className="box">
            <div className="top">
                <h1>{task ? task.title : 'Loading...'}</h1>
            </div>
            <div className="desc">
                <p>Description: {task ? task.description : 'Loading...'}</p>
            </div>
            <div className="bottom">
                <p>Date: {task ? task.due_date : 'Loading...'}</p>
                <p>Status: {task ? task.status : 'Loading...'}</p>
                <p>User: {task ? task.username : 'Loading...'}</p>
            </div>
        </div>
    );
}

export default SinglePage;
