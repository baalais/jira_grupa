import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Register(){

    axios.post('http://localhost/karlis/jira/api/logout.php')
        .then(response => {
            if (response.data.status === 'success') {
                // Redirect or perform any other action after successful sign out
                window.location.href = '/login'; // Replace with your desired redirect URL
            } else {
                console.error('Error occurred during sign out');
            }
        })
        .catch(error => {
            console.error('Axios request failed:', error);
        });
        
}



    