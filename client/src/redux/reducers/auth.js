import { AUTH_ERROR, AUTH_FINISHED, AUTH_STARTED, LOGOUT } from '../constants';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_STARTED:
      return { ...state, loading: true };
    case AUTH_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    case AUTH_FINISHED:
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return { ...state, loading: false, data: action?.payload };

    case LOGOUT:
      localStorage.clear();
      return { ...state, loading: false, data: null };
    default:
      return state;
  }
}
