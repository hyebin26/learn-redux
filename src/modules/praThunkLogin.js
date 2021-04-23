const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

export const getLogin = (data) => (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    setTimeout(() => dispatch({ type: LOGIN_SUCCESS, name: data }));
  } catch (e) {
    dispatch({ type: LOGIN_ERROR });
  }
};

const initialState = {
  isLogin: false,
  name: null,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLogin: false,
        name: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLogin: true,
        name: action.name,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isLogin: true,
        name: null,
      };
    }
    default:
      return state;
  }
}
