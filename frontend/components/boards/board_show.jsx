import React from 'react';
import BoardShowContainer from './board_show_container';
// import CreateBoardFormContainer from './create_board_form_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.boardId);
    this.props.fetchPins(13);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.boardId !== this.props.match.params.boardId) {
      this.props.fetchBoard(this.props.match.params.boardId);
    }
  }

  render() {
    if (this.props.board === undefined) {
      return null;
    }
    //css in greeting
    return (
      <div className='board-show'>

        <span className='board-show-info'>
          <div className='board-info-left'>
            <h1 className='board-show-title'>{this.props.board.title} </h1>
            <h3 className='board-show-followers'>0 Pins &#8226; 0 Followers</h3>
          </div>
          <div className='board-info-right'>
            <i className="fas fa-user-circle"></i>
          </div>
        </span>

    </div>
  );

  }
}

export default BoardShow;
