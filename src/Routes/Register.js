import React, { useEffect, useState } from 'react';
import '../Style/Login.css';
import { useNavigate } from 'react-router-dom';
import { areAllValuesFalse, form_to_obj, get_form_object } from '../functions';
import axios from 'axios';



export default function Register(){

    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        re_password: '',
    });

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

        if (formData.username.trim().length === 0) {
            console.log('Username is empty');
        }else if(formData.email.trim().length === 0){
            console.log('Email field is empty!');
        }else if(formData.password.trim().length === 0){
            console.log('Password field is empty!');
        }else if(formData.re_password.trim().length === 0){
            console.log('Password field is empty!');
        }else if(formData.password !== formData.re_password){
            console.log('Passwords do not match');
        }else{
        
        
        fetch('http://localhost/karlis/jira/api/tests.php', { method: 'POST', body: JSON.stringify(formData) })
            .then(function (response) {
              return response.text();
            })
            .then(function (body) {
              console.log(body);
            });
        }
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
                            <input onChange={handleInputChange} type='text' id='username' name='username' placeholder='Username' />
                            <input onChange={handleInputChange} type='text' id='email' name='email' placeholder='Email'></input>
                            <input onChange={handleInputChange} type='password' id='password' name='password' placeholder='Password'></input>
                            <input onChange={handleInputChange} type='password' id='re_password' name='re_password' placeholder='Repeat password'></input>
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