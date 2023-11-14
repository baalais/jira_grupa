import React, { useEffect, useState } from 'react';
import '../Style/Login.css';
import { useNavigate } from 'react-router-dom';
import { areAllValuesFalse, form_to_obj, get_form_object, is_valid_img_link } from '../functions';

export default function Login(){

    const navigate = useNavigate();
    const [errors, setErrors] = useState({username: false, password: false});

    function loginHandler(){ 
        const obj = get_form_object('login_form');
    }
    
    return (
        <>
            <div className='border 1px black'> Hello World! </div>
            <form name='login_form' id='login_form'>
                <input type='text'></input>
            </form>
        </>
    )
}