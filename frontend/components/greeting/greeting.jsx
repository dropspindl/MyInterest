import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {


  const personalGreeting = () => (
    <div className="greeting">
      <span className="greeting-name"> {currentUser.username}
        <p className="followers"> 0 followers &#8226; 0 following </p>
        <br/>
        <ul className='page-toggle'>
          <li className='current'>Boards</li>
          <li><Link to={`/users/${currentUser.id}/pins/`}>Pins</Link></li>
        </ul>
      </span>
      <span id='user-icon'><i className="fas fa-user-circle"></i></span>
    </div>
  );

  return personalGreeting();
};


export default Greeting;
