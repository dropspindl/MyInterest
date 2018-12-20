import React from 'react';
import { Link } from 'react-router-dom';
import CreationDropdown from './creation_dropdown';

class FloatBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
      // first_name: '',
      // last_name: '',
    };
  }


  render() {

    function revealPopup() {
      var popup = document.getElementById("popup");
      popup.classList.toggle("show");
    }

    return (
      <div className="float-bar">

        <CreationDropdown openModal={this.props.openModal}/>
        <i className="fas fa-pencil-alt"></i>
        <i className="fas fa-upload"></i>

      </div>
    );

  }
}


export default FloatBar;


// id="popup" onClick='revealPopup()'>
// <ul className="popuptext hidden" id="myPopup">
//   <li>Create Board</li>
//   <li>Create Pin</li>
// </ul>
