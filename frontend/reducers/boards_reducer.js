import {
  RECEIVE_ALL_BOARDS,
  RECEIVE_BOARD,
  REMOVE_BOARD,
} from '../actions/board_actions';
import merge from 'lodash/merge';

const BoardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_BOARDS:
      return merge({}, action.boards);
    case RECEIVE_BOARD:
      return merge({}, oldState, {[action.board.id]: action.board});
    case REMOVE_BOARD:
      let newState = merge({}, oldState);
      delete newState[action.boardId];
      return newState;
    default:
      return oldState;
  }
};

export default BoardsReducer;
