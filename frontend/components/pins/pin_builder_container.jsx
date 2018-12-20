import { connect } from 'react-redux';
import PinBuilder from './pin_builder';
import { createPin } from '../../actions/pin_actions';

const mapStateToProps = state => ({
  boards: Object.values(state.entities.boards),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
 processBoard: (pin) => dispatch(createPin(pin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinBuilder);
