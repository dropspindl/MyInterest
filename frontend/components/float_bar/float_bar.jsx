import React from 'react';
import { Link } from 'react-router-dom';

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

    return (
      <div className="float-bar">
        <i className="fas fa-plus"></i>
        <i className="fas fa-pencil-alt"></i>
        <i className="fas fa-upload"></i>

      </div>
    );

  }
}


export default FloatBar;
