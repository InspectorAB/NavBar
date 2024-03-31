import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const Navigate = useNavigate();
    useEffect(() => {
      const isUserLoggedIn = localStorage.getItem('IsLogin');
      setIsLoggedIn(isUserLoggedIn === 'true');
    }); 
    const handleLogout = () => {
        localStorage.removeItem("IsLogin");
        Navigate('/');
      };
  return (
    <div>
      {isLoggedIn ? (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/Portfolio"> Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" aria-disabled="true" to="/UserDetails"> User Details</Link>
          </li>
          <li className="nav-item">
            <button className="red btn" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      ) : (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to=""> Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Registration"> Registration</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
