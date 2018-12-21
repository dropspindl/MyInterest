export const fetchPins = (boardId) => (
  $.ajax({
    method: 'GET',
    url: `api/pins?board_id=${boardId}`
  })
);

export const fetchUserPins = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/pins`
    // url: `api/pins?user_id=${userId}`
  })
);


export const fetchPin = id => (
  $.ajax({
    method: 'GET',
    url: `api/pins/${id}`
  })
);

export const createPin = pin => (
  $.ajax({
    url: '/api/pins',
    method: 'POST',
    data: pin,
    contentType: false,
    processData: false
  })
);

export const deletePin = id => (
  $.ajax({
    url: `api/pins/${id}`,
    method: 'DELETE'
  })
);

export const createBoardPin = (pinId, boardId) => (
  $.ajax({
    url: 'api/board_pins',
    method: 'POST',
    data: { board_pin: {pin_id: pinId, board_id: boardId }}
  })
);

export const fetchUsersPins = (userId) => (
  $.ajax({
    url: `api/users/${userId}/pins`,
    method: 'GET'
  })
);
