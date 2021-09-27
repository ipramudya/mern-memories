import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  POST_LOADING,
  POST_ERROR,
} from '../constants';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function posts(posts = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return { ...posts, loading: true };
    case POST_ERROR:
      return { ...posts, loading: false, error: action.payload };
    case FETCH_ALL:
      return { ...posts, data: [...action.payload], loading: false };
    case CREATE:
      return {
        ...posts,
        data: [...posts.data, action.payload],
        loading: false,
      };
    case UPDATE:
      return {
        ...posts,
        data: posts.data.map((post) => {
          return post._id === action.payload._id ? action.payload : post;
        }),
        loading: false,
      };
    case DELETE:
      return {
        ...posts,
        data: posts.data.filter((post) => {
          return post._id !== action.payload;
        }),
        loading: false,
      };
    case LIKE:
      return {
        ...posts,
        data: posts.data.map((post) => {
          return post._id === action.payload._id ? action.payload : post;
        }),
        loading: false,
      };
    default:
      return posts;
  }
}
