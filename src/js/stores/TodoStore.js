import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 918274822,
        text: '勉強する',
        complete: false,
        favorite: false,
      },
      {
        id: 391835039,
        text: '参考書を買いに行く',
        complete: false,
        favorite: false,
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit('change');
  }

  completeTodo(id) {
    this.todos.find((todo) => todo.id === id).complete = true;

    this.emit('change');
  }

  favoriteTodo(id, favorite) {
    this.todos.find((todo) => todo.id === id).favorite = favorite;

    this.emit('change');
  }

  getAll() {
    return this.todos;
  }

  getFavorite() {
    return this.todos.filter((todo) => todo.favorite === true);
  }

  handleActions(action) {
    switch (action.type) {
      case 'CREATE_TODO': {
        this.createTodo(action.text);
        break;
      }
      case 'COMPLETE_TODO': {
        this.completeTodo(action.id);
        break;
      }
      case 'FAVORITE_TODO': {
        this.favoriteTodo(action.id, action.favorite);
        break;
      }
      default: {
        console.log('default');
      }
    }
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;
