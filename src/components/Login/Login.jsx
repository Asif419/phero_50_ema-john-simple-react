import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || '/';

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message);
        console.log(error.message)
      })
  }

  return (
    <div className='form-container'>
      <h2 className='form-title'>Login</h2>
      <form onSubmit={handleLogin}>
        <div className='form-control'>
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" required placeholder='Enter your email' />
        </div>
        <div className='form-control'>
          <label htmlFor="">Password</label>
          <input type={show ? 'text' : 'password'} name="password" id="password" required placeholder='Enter your password' />
          <p onClick={() => setShow(!show)}>
            <small>
              {
                show ? <span>Hide password</span> : 
                <span>Show password</span>
              }
            </small>
          </p>
        </div>
        <input className='btn-submit' type="submit" value="Sign up" />
      </form>
      <p>{error}</p>
      <p><small>New to ema-john <Link to='/register'>Register</Link> </small></p>
    </div>
  );
};

export default Login;