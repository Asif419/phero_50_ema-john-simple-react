import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { getAuth } from "firebase/auth";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log(user);
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <nav className='header'>
      <img src={logo} alt="" />
      <div className='menu'>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign up</Link>
        {user &&
          (
            <span className='text'>Welcome {user.email}
              <button onClick={handleLogOut}>Sign Out</button>
            </span>
          )
        }
      </div>
    </nav>
  );
};

export default Header;