import { AUTH, LOGOUT } from '../constants';

export default function auth(google = { authData: null }, action) {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return { ...google, authData: action?.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...google, authData: null };
    default:
      return google;
  }
}
