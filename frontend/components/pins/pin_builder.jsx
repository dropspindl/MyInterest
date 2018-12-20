import React from 'react';
import { Link } from 'react-router-dom';

class PinBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      user_id: this.props.currentUser.id,
      link: '',
      photo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// <i className="fas fa-angle-left"></i>
update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

handleSubmit(e) {
  e.preventDefault();
  const pin = Object.assign({}, this.state);
  // const board =
  this.props.processPin(pin);
  // this.props.processPinJoin(boardId, pin.id);
}


  render() {

    return (
      <div className='pin-builder-main'>
        <div className='pin-builder-title'>Pin Builder</div>

        <form onSubmit={this.handleSubmit} className='pin-builder'>
          <input className='pin-builder-submit' type='submit' value='Save' />


          <div className='pin-builder-parent'>

            <div className='pin-builder-left'>
              <div className='pin-photo-preview'>
                <br/><br/><br/>
                <i className="fas fa-camera"></i><br/><br/>
                <p>Photo Preview</p>
              </div>
              <input type="text"
                value={this.state.photo}
                onChange={this.update('photo')}
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
