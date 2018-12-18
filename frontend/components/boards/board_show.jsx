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
    
    return (
      <div className='board-show'>
        {this.props.board.title}
    </div>
  );

  }
}

export default BoardShow;
