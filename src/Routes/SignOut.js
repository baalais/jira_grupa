import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
    const navigate = useNavigate();

    useEffect(() => {
        axios.post('http://localhost/jira_grupa/jira_grupa/api/logout.php')
            .then(response => {
                if (response.data.status === 'success') {
                    // Redirect or perform any other action after successful sign out
                    navigate('/login');
                } else {
                    console.error('Error occurred during sign out');
                }
            })
            .catch(error => {
                console.error('Axios request failed:', error);
            });
    }, [navigate]);

    // Render nothing
    return null;
}
