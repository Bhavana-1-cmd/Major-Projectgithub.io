import React,{useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./auth.css"
import { signup, login } from '../../actions/auth.js';
import { Link } from 'react-router-dom';

const Auth = () => {
    const [isSignup,setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate =  useNavigate();

    useEffect( () => {
        
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email && !password){
            alert("Enter email and pasword")
        }
        if(isSignup){
            if(!name){
                alert("Enter FullName to continue")
            }
            dispatch(signup({ name, email, password},navigate))
        }else{
            dispatch(login({ email, password },navigate))
        }
        // console.log({name,email,password});
    }

  return (
    <div className='auth-container'>
        <div className='auth-box'>
            <form className='login-form' onSubmit={handleSubmit}>
                {isSignup ? <h1>SignUp</h1>:<h1>Login</h1>}

                {isSignup && (<>
                    <input type="name" onChange={(e) => {setName(e.target.value)}} placeholder='Your Full Name' />
                </>)}
                <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder='Your Email' />
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Your Password' />

                {isSignup && (
                    <><p><span><input type="checkbox"/></span>I agree to the terms of services</p></>
                )}

                <button type="submit" className="signup-btn">{isSignup ? "SignUp":"Login"}</button>
                
                {!isSignup ? (<><p>Don't have an account</p></>):(<><p>Already have an account </p></>)}
                <strong><Link type='button' onClick={()=>setIsSignup(!isSignup)}>{!isSignup ? "SignUp":"Login"}</Link></strong>
            </form>
        </div>
        
    </div>
  )
}

export default Auth
