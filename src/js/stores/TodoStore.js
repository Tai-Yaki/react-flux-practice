import { EventEmitter } from 'events';

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
}

const todoStore = new TodoStore();

export default todoStore;
