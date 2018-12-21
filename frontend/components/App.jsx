import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

import NavBarContainer from './navbar/navbar_container';
import FloatBarContainer from './float_bar/float_bar_container';
import GreetingBarContainer from './greeting/greeting_container';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import BoardIndexContainer from './boards/board_index_container';
import BoardShowContainer from './boards/board_show_container';
import BoardFormContainer from './boards/board_form_container';
import PinBuilderContainer from './pins/pin_builder_container';
import UserPinsContainer from './pins/user_pins_container';


import DiscoveryPlaceholder from './discovery/discovery_placeholder';



const App = () => (
  <div>
    <Modal />
    <header>
      <ProtectedRoute path='/' component={NavBarContainer} />
      <ProtectedRoute path='/users' component={FloatBarContainer} />
      <ProtectedRoute path='/boards' component={FloatBarContainer} />
      <ProtectedRoute path='/users' component={GreetingBarContainer}/>
    </header>

    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path='/users/:userId/pins' component={UserPinsContainer} />
      <Route path='/users/:userId' component={BoardIndexContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <ProtectedRoute path='/boards/:boardId/edit' component={BoardFormContainer} />
      <Route path='/boards/:boardId' component={BoardShowContainer} />
      <ProtectedRoute path='/pins/create' component={PinBuilderContainer} />

      <ProtectedRoute path='/' component={DiscoveryPlaceholder} />
    </Switch>
  </div>
);

export default App;

// <ProtectedRoute exact path="/" render={() => (
//     <Redirect to="/users/:userId"/>
//   )} />
