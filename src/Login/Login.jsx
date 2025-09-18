import React from 'react'
import "./Login.css"


function Login() {
  return (
    <div className='login-container'>
      <div>
        <div className='login-userIcon'>
          <i class="fa-regular fa-user"></i>
        </div>
      </div>
      <div className='flex-vertical text-center'>
        <h4>Welcome back</h4>
        <p>Please sign in to continue</p>
        </div>
        <div className='login-input'>
  <div className='input-with-icon'>
    <i className='fas fa-envelope icon'></i>
    <input type='email' placeholder='Email address' className='form-control input-field' />
  </div>
  <div className='input-with-icon'>
    <i className='fas fa-lock icon'></i>
    <input type='password' placeholder='Password' className='form-control input-field' />
  </div>
</div>

        <div>
            <button className='btn-login'>Sign In</button>
        </div>
        <div className='login-createAcc'>Don't have an account?
            <br/>
            {/* <Link to="/register">Sign up</Link> */}
            </div>
    </div>
  )
}

export default Login