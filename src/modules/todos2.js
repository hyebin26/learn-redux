const ADDTODO = "todos2/ADDTODO";
const TOGGLETODO = "todos2/TOGGLETODO";

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

const initialState = [];

export default function todo2(state = initialState, action) {
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
