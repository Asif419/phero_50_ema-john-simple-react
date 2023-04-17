import React, { useContext, useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const [user, setUser] = useState('');
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    setError('');
    if (password !== confirm) {
      setError('Your password did not match');
      return;
    }
    else if (password.length < 6) {
      setError('password must be 6 character');
    }

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        setUser(loggedUser);
        form.reset();
      })
      .catch(error => {
        setError(error.message);
        console.log(error);
      })
  }
  return (
    <div className='form-container'>
      <h2 className='form-title'>Sign up</h2>
      <form onSubmit={handleSignUp}>
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
        <input className='btn-submit' type="submit" value="Sign up" />
      </form>
      <p><small>Already have an account <Link to='/login'>Login</Link> </small></p>
      <p className='text-error'>{error}</p>
    </div>
  );
};

export default Register;