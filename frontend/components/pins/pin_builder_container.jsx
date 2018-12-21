import { connect } from 'react-redux';
import PinBuilder from './pin_builder';
import { createPin, createBoardPin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';


const mapStateToProps = state => ({
  boards: Object.values(state.entities.boards),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
 processPin: (pin) => dispatch(createPin(pin)),
 processBoardPin: (pinId, boardId) => dispatch(createBoardPin(pinId, boardId)),
 fetchBoards: (userId) => dispatch(fetchBoards(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinBuilder);
