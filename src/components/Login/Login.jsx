import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='form-container'>
      <h2 className='form-title'>Login</h2>
      <form>
        <div className='form-control'>
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" required placeholder='Enter your email' />
        </div>
        <div className='form-control'>
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="password" required placeholder='Enter your password' />
        </div>
        <input className='btn-submit' type="button" value="Login" />
      </form>
    </div>
  );
};

export default Login;