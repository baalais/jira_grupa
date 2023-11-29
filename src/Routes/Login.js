import React, { useEffect, useState } from 'react';
import '../Style/Login.css';
import { useNavigate } from 'react-router-dom';
import { areAllValuesFalse, form_to_obj, get_form_object, is_valid_img_link } from '../functions';

export default function Login(){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: false,
        password: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: false });
    };

    const loginHandler = async (event) => {
        event.preventDefault();

        if (formData.username.trim().length === 0) {
            setErrors({ ...errors, username: 'Username field is empty!' });
        }else if(formData.password.trim().length === 0){
            setErrors({ ...errors, password: 'Password field is empty!' });
        }else{
        
        //probably will need to change this api endpoint to work for other computers
        //http://localhost/jira_grupa/jira_grupa/api/login.php   <----- This is link to use at home
        //http://localhost/karlis/jira/api/login.php   <-------- This is link to use at school
        fetch('http://localhost/karlis/jira/api/login.php', { method: 'POST', body: JSON.stringify(formData) })

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
                            <h1>Sign In</h1>
                        </div>
                        <form name='login_form' id='login_form'>
                            <div className={(errors.username) ? 'input-error' : 'input'}>
                                <input onChange={handleInputChange} type='text' id='username' name='username' placeholder='Username' />
                                {errors.username && <p className="error-message">{errors.username}</p>}
                            </div>
                            <div className={(errors.password) ? 'input-error' : 'input'}>
                                <input onChange={handleInputChange} type='password' id='password' name='password' placeholder='Password' />
                                {errors.password && <p className="error-message">{errors.password}</p>}
                            </div>
                            <button onClick={(event) => loginHandler(event)} id="sign_in_button">Sign In</button>
                        </form>
                        <div className='form-footer'>
                            <p>Already have an account? <a onClick={() => {navigate('/register')}}>Sign In!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}