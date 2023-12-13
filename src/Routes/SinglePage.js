import React, { useEffect, useState } from 'react';

const SinglePage = () => {
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    // Fetch task data from the PHP backend
    const fetchData = async () => {
      try {
        const taskId = 1; // replace with the actual task ID
        const response = await fetch(`http://localhost/api/singlepage.php?id=${taskId}`);
        const data = await response.json();

        if (response.ok) {
          // Update the task data in state
          setTaskData(data.data);
        } else {
          console.error("Error fetching data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <main>
      {taskData && (
        <div>
          <h2>{taskData.title}</h2>
          <p>{taskData.description}</p>
          <p>Due Date: {taskData.due_date}</p>
          <p>Status: {taskData.status}</p>
        </div>
      )}
    </main>
  );
};

export default SinglePage;
