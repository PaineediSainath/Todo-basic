import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  function handleInputChange(event) {
    setTodoInput(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setTodos([...todos, todoInput]);
    setTodoInput('');
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={todoInput} onChange={handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
    </div>
  );
}

export default Todo;
