import React from 'react';
import UserPinsContainer from './user_pins_container';
import PinIndexItem from './pin_index_item';
// import CreateBoardFormContainer from './create_board_form_container';

class UserPins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    // this.props.fetchUserPins(this.props.match.params.userId);
    this.props.fetchUserPins(this.props.currentUser.id);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUserPins(this.props.match.params.userId);
    }
  }

  render() {
    if (this.props.pins === undefined) {
      return null;
    }

    const pins = this.props.pins.map(pin => {
      return (
          <PinIndexItem
            key={pin.id}
            pin={pin} />
      );
    });

    return (
      <div className='user-pins-show'>

        <div className="pin-index">
          <ul className='pin-list'>
            { pins }
          </ul>
        </div>

    </div>
  );

  }
}

export default UserPins;
