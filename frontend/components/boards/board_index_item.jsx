import React from 'react';
import { Link } from 'react-router-dom';


const BoardIndexItem = ({ board, deleteBoard }) => {
  return (
    <li className='board-item'>

      <div className='extra-margin-box'>
        <Link to={`/boards/${board.id}`}>
          <img className="board-image" src={window.images.board_placeholder}/>
        </Link>

        <span className="board-title-span">
          <div className='board-info'>
            <Link to={`/boards/${board.id}`}>
              <p className='board-title'>{board.title}</p>
              <p className='board-pins'>0 pins</p>
            </Link>
          </div>

          <div className='board-edit-button'>
            <Link to={`/boards/${board.id}/edit`}>
            <i className="fas fa-pencil-alt"></i>
            </Link>
          </div>
        </span>

      </div>

    </li>);
};

export default BoardIndexItem;
