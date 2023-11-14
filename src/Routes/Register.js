import React, { useEffect, useState } from 'react';
import '../Style/Login.css';
import { useNavigate } from 'react-router-dom';
import { areAllValuesFalse, form_to_obj, get_form_object, is_valid_img_link } from '../functions';



export default function Register(){
    const navigate = useNavigate();
    const [errors, setErrors] = useState({username: false, password: false});

    function registerHandler(){ 
        const obj = get_form_object('register_form');
    }
    
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
                        <form method='post' name='register_form' id='register_form'>
                            <input type='text' placeholder='Username'></input>
                            <input type='text' placeholder='Email'></input>
                            <input type='password' placeholder='Password'></input>
                            <input type='password' placeholder='Repeat password'></input>
                            <button>Sign Up</button>
                        </form>
                        <div className='form-footer'>
                            <p>Already have an account?<a href="#">Sign In!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}