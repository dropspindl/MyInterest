import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // first_name: '',
      // last_name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoClick = this.handleDemoClick.bind(this);
  }

  update(field) {
    return e => (this.setState({
      [field]: e.currentTarget.value
    })
  );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoClick(e) {
    e.preventDefault();
    const demoUser = {username: "Erica", password: "myinterest"};
    this.props.login(demoUser);
    // dispatch(login(demoUser));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

 // Please {this.props.formType} or {this.props.navLink}

  render() {

    return (
      <div>
        <div className='login-toggle-button'> {this.props.navLink}</div>

        <div className="login-form-container"></div>
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <span className="logo"><i className="fab fa-pinterest"/></span>
            <br/>

            <h1 className="center"> {this.props.formType} to see more </h1>
            <br />
            <p className='center'> Access Pinterest's best ideas with a free account</p>
            <br/>

            {this.renderErrors()}

            <div className="login-form">
              <br/>
              <label>
                <input type="text"
                  className="login-text-box"
                  value={this.state.username}
                  placeholder="username"
                  onChange={this.update('username')}
                />
              </label>
              <br/><br/>
              <label>
                <input type="password"
                  className="login-text-box"
                  placeholder='password'
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
              <br/><br/>
              <input className="session-submit" type="submit" value={this.props.formType} />

              <br/><br/>
              <p className="center">OR</p>
              <br/>

              <button className='demo-button' onClick={this.handleDemoClick}>Demo User</button>
            </div>
          </form>
        </div>

    );
  }
}

export default SessionForm;
