import React, { memo, useState } from "react";

const TodosListTest = memo(({ todo, onToggleTodo }) => {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggleTodo(todo.id)}
    >
      {todo.text}
    </li>
  );
});

const TodosTest = ({ createTodo, todos, onToggleTodo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = () => {
    createTodo(text);
    setText("");
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onClick}>등록</button>
      <ul>
        {todos.map((todo) => (
          <TodosListTest todo={todo} onToggleTodo={onToggleTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodosTest;
