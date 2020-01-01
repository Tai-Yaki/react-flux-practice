import React, { useEffect, useState } from 'react';

import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';

const Todos = () => {
  const [todos, setTodos] = useState(TodoStore.getAll());

  useEffect(() => {
    TodoStore.on('change', () => {
      setTodos(TodoStore.getAll());
    });
  }, []);

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
