import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import FloatBarContainer from './float_bar/float_bar_container';
import GreetingBarContainer from './greeting/greeting_container';
import BoardIndexContainer from './boards/board_index_container';
import BoardShowContainer from './boards/board_show_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import DiscoveryPlaceholder from './discovery/discovery_placeholder';
import { Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      <ProtectedRoute path='/' component={NavBarContainer} />
      <ProtectedRoute path='/users' component={FloatBarContainer} />
      <Route path='/boards' component={FloatBarContainer} />
      <ProtectedRoute path='/users' component={GreetingBarContainer}/>
    </header>

    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path='/users/:userId' component={BoardIndexContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <Route path='/boards/:boardId' component={BoardShowContainer} />
      <ProtectedRoute path='/' component={DiscoveryPlaceholder} />


    </Switch>
  </div>
);

export default App;

// <ProtectedRoute exact path="/" render={() => (
//     <Redirect to="/users/:userId"/>
//   )} />
