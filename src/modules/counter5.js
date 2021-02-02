const INCREASE = "counter5/INCREASE";
const DECREASE = "counter5/DECREASE";
const SET_DIFF = "counter5/SET_DIFF";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = (diff) => ({ type: SET_DIFF, diff });

const initalState = {
  number: 0,
  diff: 10,
};

export default function counter5(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.number + state.diff };
    case DECREASE:
      return { ...state, number: state.number - state.diff };
    case SET_DIFF:
      return { ...state, diff: action.diff };
    default:
      return state;
  }
}
