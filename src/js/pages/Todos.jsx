import React from 'react';

import Todo from '../components/Todo';

const Todos = () => {
  const todos = [
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
