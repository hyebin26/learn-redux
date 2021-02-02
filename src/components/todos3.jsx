import React, { useState } from "react";

const TodoItem = ({ todo, onToggleTodo }) => {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggleTodo(todo.id)}
    >
      {todo.text}
    </li>
  );
};

const TodoList = ({ todos, onToggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
};

const Todos3 = ({ todos, onToggleTodo, onAddTodo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onAddTodo(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>입력</button>
      </form>
      <TodoList todos={todos} onToggleTodo={onToggleTodo} />
    </div>
  );
};

export default Todos3;
