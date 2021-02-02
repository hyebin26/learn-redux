import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos3 from "../components/todos3";
import { addTodo, toggleTodo } from "../modules/todos3";

const TodosContainer3 = (props) => {
  const todos = useSelector((state) => state.todos3);

  const dispatch = useDispatch();
  const onAddTodo = (text) => dispatch(addTodo(text));
  const onToggleTodo = (id) => dispatch(toggleTodo(id));
  return (
    <Todos3 onAddTodo={onAddTodo} onToggleTodo={onToggleTodo} todos={todos} />
  );
};

export default TodosContainer3;
