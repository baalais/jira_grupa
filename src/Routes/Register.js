import React, { useEffect, useState } from 'react';
import '../Style/Register.css';
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
            <div className='border 1px black'> Hello World! </div>
            <form name='register_form' id='register_form'>
                <input type='text'></input>
            </form>
        </>
    )
}