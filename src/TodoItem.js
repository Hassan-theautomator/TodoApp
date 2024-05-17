import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, index, deleteTodo, toggleComplete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(index)}>{todo.task}</span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
