import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      <h1>myInterest</h1>
      <ProtectedRoute path='/' component={GreetingContainer}/>
    </header>
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/" component={LoginFormContainer} />
    </Switch>
  </div>
);

export default App;
