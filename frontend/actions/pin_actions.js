import * as PinApiUtil from '../util/pin_api_util';

export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";

const receiveAllPins = pins => ({
  type: RECEIVE_ALL_PINS,
  pins
});

const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
});

const removePin = pinId => ({
  type: REMOVE_PIN,
  pinId
});

export const fetchPins = (userId) => dispatch => (
  PinApiUtil.fetchPins(userId).then(payload => dispatch(receiveAllPins(payload.pins)))
);

export const fetchPin = id => dispatch => (
  PinApiUtil.fetchPin(id).then(pin => dispatch(receivePin(pin)))
);

export const createPin = pin => dispatch => (
  PinApiUtil.createPin(pin).then(pin => dispatch(receivePin(pin)))
);

export const deletePin = pinId => dispatch => (
  PinApiUtil.deletePin(boardId).then(board => dispatch(removePin(boardId)))
);
