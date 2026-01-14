import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate }from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loginuser } from '../reduxtool/LoginSlice';

export default function Login() {
    const users=useSelector((state)=>state.signup.users);
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [form,setform]=useState({email:"", password:""})
    function handlechange(e){
        setform({ ...form, [e.target.name]: e.target.value})
    }
     function handlesumbit(e){
        e.preventDefault();
     
     const found=users.find((user)=>user.email===form.email && user.password===form.password);
     
     if(found){
        dispatch(loginuser(found))
        alert("Login Successful")
        navigate('/Dashboard')

     }else{
        alert("Invalid Credentials")
     }
    }


  return (
    <div>
        <h2>Login</h2>


        <form onSubmit={handlesumbit}>
        <input
          name="email"
          placeholder="Email"
          onChange={handlechange}
        />
        <br />
        <input type="password" name="password" placeholder="Password" onChange={handlechange} />


        </form>
        <br />
        <button type="submit" onClick={handlesumbit}>Login</button>
    </div>
  )
}
