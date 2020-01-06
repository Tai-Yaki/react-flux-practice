import React from 'react';

import Todo from '../components/Todo';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

export default class Todos extends React.Component {
  static createTodo() {
    TodoActions.createTodo('New Todo');
  }

  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentDidMount() {
    TodoStore.on('change', () => {
      this.setState({
        todos: TodoStore.getAll(),
      });
    });
  }

  render() {
    const { todos } = this.state;

    const handleClickIcon = (id) => {
      TodoActions.completeTodo(id);
    };

    const TodoComponents = todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text}
        complete={todo.complete}
        handleClickIcon={() => { handleClickIcon(todo.id); }}
      />
    ));

    return (
      <div>
        <button type="button" onClick={() => Todos.createTodo()}>Create!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
