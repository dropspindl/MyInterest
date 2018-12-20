import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      user_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = Object.assign({}, this.state);
    this.props.processBoard(board).then(this.props.closeModal);
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="board-form-container">
        <span className='board-form-heading'>
          <div className='placeholder'>o</div>
          <h2 className='board-form-title'>Create Board</h2>
          <div onClick={this.props.closeModal} className="close-x"><i className="fas fa-times"></i></div>
        </span>

        <form onSubmit={this.handleSubmit} className="board-form-box">
          <br/>
          <div className="login-form">

            <div className='board-input-row'>
              <label htmlFor='board-title' className='board-input-label'>Name: </label>
              <input type="text"
                  name='board-title'
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="board-form-input"
                  placeholder="Like 'Places to Go' or 'Recipes to Make'"
                />
            </div>
            <br/>

              <div className='board-input-row last-input'>
                <label htmlFor='board-description' className='board-input-label'>Description: </label>
                <input type="text-area"
                    name='board-description'
                    value={this.state.description}
                    onChange={this.update('description')}
                    className="board-form-input"
                    placeholder="What's your board about?"
                  />
              </div>

            <input className="board-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(BoardForm);


// this.renderErrors
