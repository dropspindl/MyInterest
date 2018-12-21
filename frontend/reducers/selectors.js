export const selectBoardPins = (state, board) => {
  return board ? board.pins.map(pin => state.entities.pins[pin.id]) : [];
};
