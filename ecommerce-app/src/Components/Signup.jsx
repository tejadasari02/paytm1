import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate }from 'react-router-dom';
import {addUser} from '../reduxtool/SignupSlice'

export default function Signup() {

    const[form,setform]=useState({name:"",email:"", password:""})
    const dispatch=useDispatch()
    const navigate=useNavigate()

    function handlechange(e){
        setform({ ...form, [e.target.name]: e.target.value

        })
    }

function handlesumbit(e){
        e.preventDefault();
        dispatch(addUser(form))
        alert("Signup Successful")
        navigate('/login')

    }


  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handlesumbit}>
        <input
          name="name"
          placeholder="Full Name"
          onChange={handlechange}
        />
        <br />

        <input
          name="email"
          placeholder="Email"
          onChange={handlechange}
        />
        <br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handlechange}
        />
        <br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}


