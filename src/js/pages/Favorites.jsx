import React from 'react';

import Todo from '../components/Todo';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

export default class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getFavorite(),
    };
  }

  componentDidMount() {
    TodoStore.on('change', () => {
      this.setState({
        todos: TodoStore.getFavorite(),
      });
    });
  }

  render() {
    const { todos } = this.state;

    const handleClickComplete = (id) => {
      TodoActions.completeTodo(id);
    };

    const handleClickFavorite = (id, favorite) => {
      TodoActions.favoriteTodo(id, !favorite);
    };

    const TodoComponents = todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text}
        complete={todo.complete}
        favorite={todo.favorite}
        handleClickComplete={() => { handleClickComplete(todo.id); }}
        handleClickFavorite={() => { handleClickFavorite(todo.id, todo.favorite); }}
      />
    ));

    return (
      <div>
        {console.log(todos)}
        <h1>Favorites</h1>
        {
          todos.length
            ? <ul>{TodoComponents}</ul>
            : <p>登録されていません。</p>
        }
      </div>
    );
  }
}
