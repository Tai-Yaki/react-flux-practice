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
      },
      {
        id: 391835039,
        text: '参考書を買いに行く',
        complete: false,
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

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch (action.type) {
      case 'CREATE_TODO': {
        this.createTodo(action.text);
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
