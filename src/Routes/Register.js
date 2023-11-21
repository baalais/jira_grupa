import React, { useEffect, useState } from 'react';
import '../Style/Login.css';
import { useNavigate } from 'react-router-dom';
import { areAllValuesFalse, form_to_obj, get_form_object } from '../functions';
import axios from 'axios';



export default function Register(){
    const navigate = useNavigate();
    const [errors, setErrors] = useState({username: false, email: false, password: false});

    function registerHandler(){
        const obj = get_form_object('register_form');
        var form_errors = errors;

        if(obj.password !== obj.re_password || obj.password === ''){
            form_errors.password = true;
        }

        if(areAllValuesFalse(form_errors)){  // check if theres no errors

            axios.post('register.php', form_to_obj('register_form')).then((res) => {
                if(res.data.code === 0){
                    form_errors.username = true;
                    setErrors({...errors, ...form_errors});
                }else{
                    navigate('/');
                }
            });

        }else{
            setErrors({...errors, ...form_errors});
        }

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
                            <button onClick={registerHandler} id='sign_up_button'>Sign Up</button>
                        </form>
                        <div className='form-footer'>
                            <p>Already have an account? <a href="login">Sign In!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}