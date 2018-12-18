import React from 'react';
import BoardIndexItem from './board_index_item';
// import CreateBoardFormContainer from './create_board_form_container';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    this.props.fetchBoards(this.props.match.params.userId);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchBoards(this.props.match.params.userId);
    }
  }

  render() {
    const boards = this.props.boards.map(board => {
      return (
          <BoardIndexItem
            key={board.id}
            board={board}
            deleteBoard={this.props.deleteBoard} />
      );
    });

    return (
      <div className="board-index">
        <ul className='board-list'>
          { boards }
        </ul>
      </div>
    );
  }
}


export default BoardIndex;
