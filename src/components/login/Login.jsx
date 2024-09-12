import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className='login-container'>
      <div className='login-box'>
        <h3>Login</h3>
      <input type="text" placeholder='Email' required/>
        <input type="password" placeholder='Password' required/>
       <Link to={'/note'}><button type='submit'>Login</button></Link>         
      </div>      
    </div>
  )
}

export default Login