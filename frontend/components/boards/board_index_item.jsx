import React from 'react';
import { Link } from 'react-router-dom';


const BoardIndexItem = ({ board, deleteBoard }) => {
  return (
    <li className='board-item'>
      <div className='extra-margin-box'>
        <img className="board-image" />

        <span className="board-title-span">
          <div className='board-info'>
            <p className='board-title'>{board.title}</p>
            <p className='board-pins'>0 pins</p>
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

// <li>
//   <Link to={`/boards/${board.id}`}>
//     {board.title}
//   </Link>&nbsp;
//   <Link to={`/posts/${post.id}/edit`}>
//     Edit
//   </Link>
//   <button onClick={() => deletePost(post.id)}>Delete</button>
// </li>);
