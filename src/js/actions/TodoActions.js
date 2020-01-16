import dispatcher from '../dispatcher';

export function createTodo(text) {
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id,
  });
}

export function completeTodo(id) {
  dispatcher.dispatch({
    type: 'COMPLETE_TODO',
    id,
  });
}

export function favoriteTodo(id, favorite) {
  dispatcher.dispatch({
    type: 'FAVORITE_TODO',
    id,
    favorite,
  });
}
