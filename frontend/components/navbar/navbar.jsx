import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
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
      <div className="navbar">
        <span className='navbar-left'>
          <i className="fab fa-pinterest"/>
        </span>

        <span className='navbar-center'>
          <i className="fas fa-search"></i>
        </span>

        <span className='navbar-right'>
          <i className="fas fa-user-circle"></i>
          <i className="fas fa-comment-dots"></i>
          <i className="fas fa-bell"></i>
          <i className="fas fa-ellipsis-h"></i>
          <button className="header-button" onClick={this.props.logout}>Log Out</button>

        </span>
      </div>
    );

  }
}


export default NavBar;
