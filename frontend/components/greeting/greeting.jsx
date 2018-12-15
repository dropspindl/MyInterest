import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {




  const personalGreeting = () => (
    <div className="greeting">
      <h2 className="greeting-name">{currentUser.username}!</h2>
      <span className='user-icon'><i className="fas fa-user-circle"></i></span>
    </div>
  );

  return personalGreeting();
};


export default Greeting;
