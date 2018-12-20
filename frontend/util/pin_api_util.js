export const fetchPins = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/pins?user_id=${userId}`,
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
    url: 'api/pins',
    method: 'POST',
    data: { pin }
  })
);

export const deletePin = id => (
  $.ajax({
    url: `api/pins/${id}`,
    method: 'DELETE'
  })
);
