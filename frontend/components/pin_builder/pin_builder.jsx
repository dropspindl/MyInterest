import React from 'react';
import { Link } from 'react-router-dom';

class PinBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
      // first_name: '',
      // last_name: '',
    };
  }


  render() {

    return (
      <div className='pin-builder'>
        <span className='pin-builder-title'>Pin Builder</span>

        <span className='pin-builder-nav'>
          <i className="fas fa-angle-left"></i>
          <div className='pin-builder-save'><i className="fas fa-thumbtack"></i>Save</div>
        </span>

        <span className='pin-builder-topform'>
          
        </span>


      </div>
    );

  }
}


export default NavBar;
