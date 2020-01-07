import React from 'react';
import PropTypes from 'prop-types';
import './styles/todoStyle.css';

const Todo = ({ text, complete, handleClickIcon }) => {
  const icon = complete ? '\u2714' : '\u2716';
  return (
    <li>
      <span>{ text }</span>
      <button type="button" className="todoIcon" onClick={handleClickIcon}>{ icon }</button>
    </li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  handleClickIcon: PropTypes.func.isRequired,
};

export default Todo;
