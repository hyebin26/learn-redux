const INCREASE = "counter3/INCREASE";
const DECREASE = "counter3/DECREASE";
const DIFF = "counter3/DIFF";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = (diff) => ({ type: DIFF, diff });

const initialState = {
  number: 0,
  diff: 2,
};

export default function Counter3(state = initialState, action) {
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
    case setDiff:
      return {
        ...state,
        diff: action.diff,
      };
    default:
      return state;
  }
}
