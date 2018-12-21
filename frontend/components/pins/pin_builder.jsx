import React from 'react';
import { Link } from 'react-router-dom';
import BoardPinDropdown from './board_pin_dropdown';

class PinBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      user_id: this.props.currentUser.id,
      link: '',
      boardId: null ,
      photoFile: null,
      photoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchBoards(this.state.user_id);
  }
// <i className="fas fa-angle-left"></i>
  update(field) {
    return e => {

      this.setState({
      [field]: e.currentTarget.value
    });}
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
    fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pin[title]', this.state.title);
    formData.append('pin[photo]', this.state.photoFile);
    formData.append('pin[description]', this.state.description);
    formData.append('pin[link]', this.state.link);
    formData.append('pin[user_id]', this.state.userId);

    // const pin = Object.assign({}, this.state);
    const boardId = this.state.boardId;
    this.props.processPin(formData).then((newPin) =>
    {
      const pinId = Object.values(newPin.pin)[0].id;
      this.props.processBoardPin(pinId, boardId);
    });

    this.props.history.push(`/boards/${boardId}`);
  }


  render() {
    const boards = this.props.boards.map(board => {
      return (
        <option value={board.id}>{board.title}</option>
      );
    });

    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

    return (
      <div className='pin-builder-main'>
        <div className='pin-builder-title'>Pin Builder</div>

        <form onSubmit={this.handleSubmit} className='pin-builder'>
          <input className='pin-builder-submit' type='submit' value='Save' />


          <div className='pin-builder-parent'>

            <div className='pin-builder-left'>
              <div className='pin-photo-preview-placeholder'>
                <div className='pin-photo-preview'>{preview}</div>
                <br/><br/><br/><br/>
                <i className="fas fa-camera"></i><br/><br/>
                <p>Photo Preview</p>

              </div>


              <input type="file"
                value={this.state.photo}
                onChange={this.handleFile.bind(this)}
                className="pin-photo-input"
                placeholder="Import photo"
              />
            </div>

            <div className='pin-builder-right'>
              <input type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="pin-title-input"
                placeholder="Add a Title"
              />
              <div className='pin-user-box'>
                <i className="fas fa-user-circle"></i>
                <span className='pin-user-info'>
                  <h3 className='pin-user-name'>{this.props.currentUser.username}</h3>
                  <p>0 followers</p>
                </span>
              </div>

            <textarea className="pin-description-input"
              value={this.state.description}
              onChange={this.update('description')}
              name="pin-description-input"
              placeholder="Say more about this Pin"
              rows="4" cols="25">
            </textarea>

            <input type="text"
              value={this.state.link}
              onChange={this.update('link')}
              className="pin-link-input"
              placeholder="Add the URL this Pin links to"
            />
          <br/>
            <select className="pin-board"

              onChange={this.update('boardId')}
            >
            <option selected={true} disabled='disabled'>Please select a Board</option>
              {boards}
            </select>


            </div>

          </div>


        </form>
      </div>
    );

  }
}


export default PinBuilder;


//
// <input type="textarea"
//   value={this.state.description}
//   onChange={this.update('description')}
//   className="pin-description-input"
//   placeholder="Say more about this Pin"
// />
