import { connect } from 'react-redux';
import BoardShow from './board_show';
import { deleteBoard, fetchBoard } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  const board = state.entities.boards[ownProps.match.params.boardId];

  return {
    board
    // pins: selectPins(state, board), (unwritten but should be in pokedex)
    // loading: state.ui.loading.detailLoading
  };
};

const mapDispatchToProps = dispatch => ({
  deleteBoard: id => dispatch(deleteBoard(id)),
  fetchBoard: id => dispatch(fetchBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
