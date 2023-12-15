import React, { useState } from 'react'
import "../login/login.css"

const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {}

    const handleLogin = ()=>{
        e.preventDefault();
        dispatch
    }
  return (
    <div className="login">
        <form action="" className="loginForm">
            <input type="text" placeholder='email' className="loginInput" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder='password' className="loginInput" onChange={(e)=>setPassword(e.target.value)} />
            <button className='loginButton' onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default login
