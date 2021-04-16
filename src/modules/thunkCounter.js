const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 2000);
};
export const decreaseAsnyc = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 2000);
};

const initialState = 0;

export default function thunkCounterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
