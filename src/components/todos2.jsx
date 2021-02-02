import React, { useState } from "react";

const TodoItem = ({ todo, onToggleTodo }) => {
  return (
    <li
      style={{
        textDecoration: todo.done ? "line-through" : "none",
        cursor: "pointer",
      }}
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
        <TodoItem todo={todo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
};

const Todos2 = ({ todos, onAddTodo, onToggleTodo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onAddTodo(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할일은..?"
          value={text}
          onChange={onChange}
        />
        <button>입력</button>
      </form>
      <TodoList todos={todos} onToggleTodo={onToggleTodo} />
    </div>
  );
};

export default Todos2;
