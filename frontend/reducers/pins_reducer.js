import {
  RECEIVE_ALL_PINS,
  RECEIVE_PIN,
  REMOVE_PIN,
} from '../actions/pin_actions';
import merge from 'lodash/merge';

const PinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_PINS:
      return merge({}, action.pins);
    case RECEIVE_PIN:
      return merge({}, oldState, action.pin);
    case REMOVE_PIN:
      let newState = merge({}, oldState);
      delete newState[action.pinId];
      return newState;
    default:
      return oldState;
  }
};

export default PinsReducer;
