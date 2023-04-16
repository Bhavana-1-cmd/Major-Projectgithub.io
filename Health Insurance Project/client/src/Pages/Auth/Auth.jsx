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

    const userType = (email) => {
        // if(email.localeCompare("admin@gmail.com",email)===0) return 0;
        // else if(email.localeCompare("hospitalStaff@gmail.com",email)===0) return 1;
        // else return 2;
        if(email === 'admin@gmail.com') return 0;
        else if(email === 'hospitalStaff@gmail.com' ) return 1;
        else return 2;
    }

    //valid email check krne ke liye
    const isValid = (email,password) =>{
        return true;
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if(!email && !password){
    //         alert("Enter email and pasword")
    //     }
    //     if(isSignup){
    //         // if(!name){
    //         //     alert("Enter FullName to continue")
    //         // }
    //         // dispatch(signup({ name, email, password},navigate))

            
    //         // go for authentication 

    //         //fetch data from 
    //         console.log(e);

    //         // navigate('/Admin')
    //     }else{
    //         // dispatch(login({ email, password },navigate))
    //     }
    //     // console.log({name,email,password});
    // }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if((!email) ||  (!password)){
                  return   alert("All Fields are Required.")
        }
        if(!isValid(email,password)) return alert('please enter a valid email and password');

        //jab backend taiyaar ho jayega tb ye type hume database se milega
        const uType = userType(email);
        
        switch(uType){
            case 0 : navigate('/Admin'); break;
            case 1 : navigate('/HospitalStaff'); break;
            case 2 : navigate('/Patient'); break;
        }

        console.log(e);
    }

  return (
    <div className='auth-container'>
        <div className='auth-box'>
            <form className='login-form' >
                {isSignup ? <h1>SignUp</h1>:<h1>Login</h1>}

                {isSignup && (<>
                    <input type="name" onChange={(e) => {setName(e.target.value)}} placeholder='Your Full Name' />
                </>)}
                <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder='Your Email' />
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Your Password' />

                {isSignup && (
                    <><p><span><input type="checkbox"/></span>I agree to the terms of services</p></>
                )}

                <button type="submit" className="signup-btn" onClick={handleSubmit}>{isSignup ? "SignUp":"Login"}</button>
                
                {!isSignup ? (<><p>Don't have an account</p></>):(<><p>Already have an account </p></>)}
                <strong><Link type='button' onClick={()=>setIsSignup(!isSignup)}>{!isSignup ? "SignUp":"Login"}</Link></strong>
            </form>
        </div>
        
    </div>
  )
}

export default Auth
