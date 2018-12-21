import React from 'react';


class BoardPinDropdown extends React.Component {
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
      <div className='board-pin-dropdown'>
        <i className="board-pin-button" onClick={this.open}></i>
        <div className={this.state.dropdown}>
LALALALLALAL
        </div>
      </div>
    );

  }
}

export default BoardPinDropdown;
