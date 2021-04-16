import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodosTest from "../components/todosTest";
import { addTodo, toggleTodo } from "../modules/todosTest";

const TodosContainerTest = (props) => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const createTodo = (text) => dispatch(addTodo(text));
  const onToggleTodo = (id) => dispatch(toggleTodo(id));
  return (
    <TodosTest
      todos={todos}
      createTodo={createTodo}
      onToggleTodo={onToggleTodo}
    />
  );
};

export default TodosContainerTest;
