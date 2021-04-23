import { getPostsAPI } from "../api/posts";

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS });
  try {
    const payload = await getPostsAPI();
    dispatch({ type: GET_POSTS_SUCCESS, payload });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e });
  }
};

const initialState = {
  isLoading: true,
  data: null,
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        isLoading: true,
        data: null,
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case GET_POSTS: {
      return {
        ...state,
        isLoading: false,
        data: null,
      };
    }
    default:
      return state;
  }
}
