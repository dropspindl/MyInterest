import React from 'react';
import { Link } from 'react-router-dom';

class CreationDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: 'close-dropdown'
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ dropdown: "open-dropdown"}, () => {
      document.addEventListener('click', this.close);
    });
  }

  close() {
    this.setState({ dropdown: "close-dropdown"}, () => {
      document.removeEventListener('click', this.close);
    });
  }

  render() {

    return (
      <div className='banana'>
        <i className="fas fa-plus" onClick={this.open}></i>
        <ul className={this.state.dropdown}>
          <li>
            <button onClick={this.props.openModal}>
            Create Board
            </button>
          </li>
          <li>
            <Link to={`/pins/create`} >Create Pin</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default CreationDropdown;
