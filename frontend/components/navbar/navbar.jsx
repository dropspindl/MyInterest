import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ currentUser, logout }) => {


  const navBar = () => (
    <div className="navbar">
      <span className='navbar-left'>
        <i className="fab fa-pinterest"/>
      </span>

      <span className='navbar-center'>
        <i class="fas fa-search"></i>
      </span>
      
      <span className='navbar-right'>
        <i class="fas fa-user-circle"></i>
        <i class="fas fa-comment-dots"></i>
        <i class="fas fa-bell"></i>
        <i class="far fa-ellipsis-h"></i>
        <button className="header-button" onClick={logout}>Log Out</button>
      </span>
    </div>
  );

  return navBar();
};


export default NavBar;
