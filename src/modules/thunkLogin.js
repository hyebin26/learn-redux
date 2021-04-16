const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
const LOGOUT = "LOGOUT";

export const login = () => (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    setTimeout(() => dispatch({ type: LOGIN_SUCCESS }), 2000);
  } catch (e) {
    dispatch({ type: LOGIN_ERROR, error: e });
  }
};

export const logout = () => ({ type: LOGOUT });

const initialState = {
  isLogin: false,
  name: null,
};

export default function thunkLogin(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: false,
        name: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        name: "hyebin",
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLogin: true,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        name: null,
      };
    default:
      return state;
  }
}
