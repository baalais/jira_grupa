import React, { useState, useEffect } from 'react';

const SinglePage = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
        const response = await fetch('singlepage.php?id=1');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
      
}

  
  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SinglePage;
