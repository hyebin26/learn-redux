const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOGOUT = "LOGOUT";

export const login = () => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    setTimeout(() => {
      dispatch({ type: LOGIN_SUCCESS });
    }, 3000);
  } catch (e) {
    dispatch({ type: LOGIN_FAILURE, error: e });
  }
};
export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
});
export const loginFailure = (data) => (
  {
    type: LOGIN_FAILURE,
  },
  data
);
export const loginRequest = (data) => ({ type: LOGIN_REQUEST, data });
export const logout = (data) => ({ type: LOGOUT }, data);

const initialState = {
  userLoading: true,
  data: null,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: action.data,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        name: "hyebin",
        userLoading: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        data: null,
        userLoading: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        data: null,
        userLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
}
