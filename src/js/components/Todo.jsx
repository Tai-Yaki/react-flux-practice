import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, complete }) => {
  const icon = complete ? '\u2714' : '\u2716';
  return (
    <li>
      <span>{ text }</span>
      <span>{ icon }</span>
    </li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
};

export default Todo;
