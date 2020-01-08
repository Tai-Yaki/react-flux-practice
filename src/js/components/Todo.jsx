import React from 'react';
import PropTypes from 'prop-types';
import './styles/todoStyle.css';

const Todo = ({
  text, complete, favorite, handleClickComplete, handleClickFavorite,
}) => {
  const icon = complete ? '\u2714' : '\u2716';
  const favoriteIcon = favorite ? '\u2605' : '\u2606';
  return (
    <li>
      <button type="button" className="todoButton" onClick={handleClickFavorite}>{ favoriteIcon }</button>
      <span>{ text }</span>
      <button type="button" className="todoButton" onClick={handleClickComplete}>{ icon }</button>
    </li>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  favorite: PropTypes.bool.isRequired,
  handleClickComplete: PropTypes.func.isRequired,
  handleClickFavorite: PropTypes.func.isRequired,
};

export default Todo;
