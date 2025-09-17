import React from 'react'
import "./Login.css"


function Login() {
  return (
    <div className='login-container'>
        <h5>Welcome back</h5>
        <p>Please sign in to continue</p>
        <div className='login-input'>
            <div>
            <label>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' />
            </div>
            <div>
            <label>Password</label>
            <input type='password' placeholder='Enter password' className='form-control'/>
           </div>
        </div>
        <div>
            <button className='btn-login'>Login</button>
        </div>
        <div className='login-createAcc'>Don't have an account?
            {/* <Link to=""> Create Account</Link> */}
            </div>
    </div>
  )
}

export default Login