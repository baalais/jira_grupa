import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const LogoutComponent = () => {
  const navigate = useNavigate();

  // Effect to automatically logout on component mount
  useEffect(() => {
    handleLogout();
  }, []); // Empty dependency array means this effect runs once on mount

  // Remove token and navigate to '/login'
  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/login');
  };

  return (
    <div>
      {/* You can add any additional content or message here */}
      <p>Logging out...</p>
    </div>
  );
};

export default LogoutComponent;
