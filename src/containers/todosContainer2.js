import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos2 from "../components/todos2";
import { addTodo, toggleTodo } from "../modules/todos2";

const TodosContainer2 = (props) => {
  const todos = useSelector((state) => state.todos2);

  const dispatch = useDispatch();
  const onAddTodo = (text) => dispatch(addTodo(text));
  const onToggleTodo = (id) => dispatch(toggleTodo(id));

  return (
    <Todos2 todos={todos} onAddTodo={onAddTodo} onToggleTodo={onToggleTodo} />
  );
};

export default TodosContainer2;
