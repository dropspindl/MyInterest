import React from 'react';
import { Link } from 'react-router-dom';


const PinIndexItem = ({ pin }) => {
  return (
    <li className='pin-item'>
      <div className='margin-holder'>
        <img src={pin.photo} className='pin-photo'/>
        <div className='pin-title'>{pin.title}</div>
      </div>
    </li>);
};

export default PinIndexItem;
