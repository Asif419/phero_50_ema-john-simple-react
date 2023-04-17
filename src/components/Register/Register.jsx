import React from 'react';
import './Register.css';

const Register = () => {
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
        <div className='form-control'>
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="confirm" id="confirm" required placeholder='Enter your password again' />
        </div>
        <input className='btn-submit' type="button" value="Sign up" />
      </form>
      <p><small>Already have an account </small></p>
    </div>
  );
};

export default Register;