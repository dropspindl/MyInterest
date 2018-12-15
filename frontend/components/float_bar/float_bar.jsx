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
        <i class="fas fa-plus"></i>
        <i class="fas fa-pencil-alt"></i>
        <i class="fas fa-upload"></i>

      </div>
    );

  }
}


export default FloatBar;
