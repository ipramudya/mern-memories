import * as api from '../../api';
import { AUTH, LOGOUT } from '../constants';

export const googleAuth =
  ({ googleProfile, googleTokenId }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: AUTH,
        payload: { googleProfile, googleTokenId },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const googleLogout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    console.log(error);
  }
};

export const register = (authForm, history) => async (dispatch) => {
  try {
    const { data } = await api.register(authForm);
    dispatch({
      type: AUTH,
      payload: data,
    });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (authForm, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(authForm);
    dispatch({
      type: AUTH,
      payload: data,
    });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
