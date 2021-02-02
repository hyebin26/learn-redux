const ADDTODO = "todos3/ADDTODO";
const TOGGLETODO = "todos3/TOGGLETODO";

let nextId = 1;

export const addTodo = (text) => ({
  type: ADDTODO,
  todo: {
    id: nextId++,
    text,
  },
});
export const toggleTodo = (id) => ({
  type: TOGGLETODO,
  id,
});

const initalState = [];

export default function todos3(state = initalState, action) {
  switch (action.type) {
    case ADDTODO:
      return state.concat(action.todo);
    case TOGGLETODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
