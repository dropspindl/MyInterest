import { connect } from 'react-redux';
import React from 'react';
import { createBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';

const mapStateToProps = ( state ) => {
  return {
    // errors: errors.board,
    formType: 'Create',
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processBoard: (board) => dispatch(createBoard(board)),
    otherForm: (
      <button onClick={() => dispatch(openModal('boardForm'))}>
        Create Board
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardForm);
