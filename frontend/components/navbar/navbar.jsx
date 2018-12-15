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
          <Link to='/'><i className="fab fa-pinterest"/></Link>
        </span>

        <span className='navbar-center'>
          <i className="fas fa-search"></i>
          <input type='text' placeholder='Search' className='search-bar' />
        </span>

        <span className='navbar-right'>
          <i className="fas fa-user-circle"></i>
          <p className="navbar-username">{this.props.currentUser.username}</p>
          <i className="fas fa-comment-dots"></i>
          <i className="fas fa-bell"></i>
          <i className="fas fa-ellipsis-h" onClick={this.props.logout}></i>

        </span>
      </div>
    );

  }
}


export default NavBar;
