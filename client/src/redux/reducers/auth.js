import { AUTH } from '../constants';

export default function auth(google = { authData: null }, action) {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return { ...google, authData: action?.payload };
    default:
      return google;
  }
}
