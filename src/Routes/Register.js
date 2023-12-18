import React, { useEffect, useState } from 'react';
import '../Style/Login.css';
import { useNavigate } from 'react-router-dom';


export default function Register(){

    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        re_password: '',
    });

    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState(null);

    const [errors, setErrors] = useState({
        username: false,
        email: false,
        password: false,
        re_password: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: false });
    };

    const registerHandler = async (event) => {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

        if (formData.username.trim().length === 0) {
            setErrors({ ...errors, username: 'Username field is empty!' });
        }else if(formData.email.trim().length === 0){
            setErrors({ ...errors, email: 'Email field is empty!' });
        }else if (!emailRegex.test(formData.email)) {
            setErrors({ ...errors, email: 'Invalid email format!' });
        }else if(formData.password.trim().length === 0){
            setErrors({ ...errors, password: 'Password field is empty!' });
        }else if (!passwordRegex.test(formData.password)) {
            setErrors({ ...errors, password: 'Password must be at least 8 characters long and contain at least 1 number and 1 capital letter!' }); 
        }else if(formData.re_password.trim().length === 0){
            setErrors({ ...errors, re_password: 'Password field is empty!' });
        }else if(formData.password !== formData.re_password){
            setErrors({ ...errors, re_password: 'Passwords do not match!' });
        }else{
        
        //probably will need to change this api endpoint to work for other computers
        //http://localhost/jira_grupa/jira_grupa/api/register.php   <----- This is link to use at home
        //http://localhost/karlis/jira/api/register.php   <-------- This is link to use at school
        fetch('http://localhost/karlis/jira/api/register.php', { method: 'POST', body: JSON.stringify(formData) })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();  // parse the response as JSON
        })
        .then(data => {
            setStatus(data.status);
            setMessage(data.message);  // set the message from the server response
            if (data.status === 'success') {
                // Start countdown
                let countdown = 5;
                const timerId = setInterval(() => {
                    countdown--;
                    setMessage(`User registered successfully. Redirecting in ${countdown} seconds...`);
                    if (countdown <= 0) {
                        clearInterval(timerId);
                        navigate('/login');
                    }
                }, 1000);
            } else if (data.status === 'error') {
                setErrors({ ...errors, username: data.message });
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            setErrors({ ...errors, username: 'There has been a problem with your fetch operation.' });
        });
        };
    };
    
    return (
        <>
        <div className='background-secondary'></div>
        <div className='background-primary'></div>
            <div className='register-container'>
                <div className='register-box'>
                    <div className='split-left'></div>
                    <div className='split-right'>
                        <div className='form-header'>
                            <h1>Sign Up</h1>
                        </div>
                        <form name='register_form' id='register_form'>
                            <div className={(errors.username) ? 'input-error' : 'input'}>
                                <input onChange={handleInputChange} type='text' id='username' name='username' placeholder='Username' />
                                {errors.username && <p className="error-message">{errors.username}</p>}
                            </div>
                            <div className={(errors.email) ? 'input-error' : 'input'}>
                                <input onChange={handleInputChange} type='text' id='email' name='email' placeholder='Email' />
                                {errors.email && <p className="error-message">{errors.email}</p>}
                            </div>
                            <div className={(errors.password) ? 'input-error' : 'input'}>
                                <input onChange={handleInputChange} type='password' id='password' name='password' placeholder='Password' />
                                {errors.password && <p className="error-message">{errors.password}</p>}
                            </div>
                            <div className={(errors.re_password) ? 'input-error' : 'input'}>
                                <input onChange={handleInputChange} type='password' id='re_password' name='re_password' placeholder='Repeat password' />
                                {errors.re_password && <p className="error-message">{errors.re_password}</p>}
                                {message && <p className={status === 'success' ? "success-message" : "error-message"}>{message}</p>}

                                
                            </div>
                            
                            <button onClick={(event) => registerHandler(event)} id='sign_up_button'>Sign Up</button>
                        </form>
                        <div className='form-footer'>
                            <p>Already have an account? <a onClick= {() => {navigate('/login')}}>Sign In!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}