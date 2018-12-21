import { connect } from 'react-redux';
import BoardShow from './board_show';
import { deleteBoard, fetchBoard } from '../../actions/board_actions';
import { fetchPins } from '../../actions/pin_actions';

const mapStateToProps = (state, ownProps) => {
  const board = state.entities.boards[ownProps.match.params.boardId];

  return {
    pins: Object.values(state.entities.pins),
    board
  };
};

const mapDispatchToProps = dispatch => ({
  deleteBoard: id => dispatch(deleteBoard(id)),
  fetchBoard: id => dispatch(fetchBoard(id)),
  fetchPins: boardId => dispatch(fetchPins(boardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
