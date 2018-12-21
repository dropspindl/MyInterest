import React from 'react';
import { Link } from 'react-router-dom';


const PinIndexItem = ({ pin }) => {
  return (
    <li className='pin-item'>
      <img src={pin.photo} className='pin-photo'/>
      <div>{pin.title}</div>
    </li>);
};

export default PinIndexItem;
