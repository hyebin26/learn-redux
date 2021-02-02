const INCREASE = "counter4/INCREASE";
const DECREASE = "counter4/DECREASE";
const SET_DIFF = "counter4/SET_DIFF";

export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  numer: 0,
  diff: 1,
};

export default function Counter4(state = initialState, action) {
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
        diff: state.diff,
      };
    default:
      return state;
  }
}
