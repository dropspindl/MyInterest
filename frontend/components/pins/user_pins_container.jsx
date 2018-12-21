import { connect } from 'react-redux';
import UserPins from './user_pins';
import { fetchUserPins } from '../../actions/pin_actions';

const mapStateToProps = (state) => {

  return {
    pins: Object.values(state.entities.pins),
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserPins: userId => dispatch(fetchUserPins(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPins);
