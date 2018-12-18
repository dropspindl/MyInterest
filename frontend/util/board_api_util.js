export const fetchBoards = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/boards?user_id=${userId}`,
  })
);

export const fetchBoard = id => (
  $.ajax({
    method: 'GET',
    url: `api/boards/${id}`
  })
);

export const createBoard = board => (
  $.ajax({
    url: 'api/boards',
    method: 'POST',
    data: { board }
  })
);

export const updateBoard = board => (
  $.ajax({
    url: `api/boards/${board.id}`,
    method: 'PATCH',
    data: { board }
  })
);

export const deleteBoard = id => (
  $.ajax({
    url: `api/boards/${id}`,
    method: 'DELETE'
  })
);
