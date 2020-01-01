import React from 'react';

import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';

const Todos = () => {
  const todos = TodoStore.getAll();

  const TodoList = todos.map((todo) => (
    <Todo key={todo.id} text={todo.text} complete={todo.complete} />
  ));

  return (
    <div>
      <h1>Todoリスト</h1>
      <ul>{ TodoList }</ul>
    </div>
  );
};

export default Todos;
