import React, { useState } from "react";

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
    >
      {todo.text}
    </li>
  );
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} onToggle={onToggle} todo={todo} />
      ))}
    </ul>
  );
});

const Todos = ({ todos, onCreate, onToggle }) => {
  //리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야 되는 것은 아니다.
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할일을 입력하세요 "
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
};

export default Todos;
