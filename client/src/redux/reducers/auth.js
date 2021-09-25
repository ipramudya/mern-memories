import { AUTH, LOGOUT } from '../constants';

export default function auth(info = { authData: null }, action) {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return { ...info, authData: action?.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...info, authData: null };
    default:
      return info;
  }
}
