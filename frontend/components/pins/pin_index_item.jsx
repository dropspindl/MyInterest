import React from 'react';
import { Link } from 'react-router-dom';


const PinIndexItem = ({ pin }) => {
  return (
    <li className='pin-item'>
      <div className='pin-photo'>.</div>
      <div>{pin.title}</div>
    </li>);
};

export default PinIndexItem;
