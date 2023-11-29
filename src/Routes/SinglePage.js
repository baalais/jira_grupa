import React, { useState, useEffect } from 'react';

const SinglePage = ({ taskId }) => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/singlepage.php?id=${taskId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch task');
        }

        setTask(data);
        setError(null);
      } catch (error) {
        setError(`Failed to fetch task: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [taskId]);

  return (
    <div className="container">
      <h1>Task Details</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {task && (
        <div>
          <p>ID: {task.id}</p>
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
          <p>Due Date: {task.due_date}</p>
          <p>User ID: {task.user_id}</p>
          <p>Status: {task.status}</p>
        </div>
      )}
    </div>
  );
};

export default SinglePage;
