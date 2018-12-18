import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { fetchBoards, deleteBoard } from '../../actions/board_actions';

const mapStateToProps = state => ({
  boards: Object.values(state.entities.boards)
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: (userId) => dispatch(fetchBoards(userId)),
  deleteBoard: id => dispatch(deleteBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardIndex);
