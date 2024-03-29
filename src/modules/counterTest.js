const INCREASE = "counterTest/INCREASE";
const DECREASE = "counterTest/DECREASE";
const SET_DIFF = "counterTest/SET_DIFF";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = (diff) => ({ type: SET_DIFF, diff });

const initialState = {
  number: 0,
  diff: 1,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    default:
      return state;
  }
}
