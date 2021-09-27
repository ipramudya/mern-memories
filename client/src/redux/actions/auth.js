import * as api from '../../api';
import {
  AUTH_ERROR,
  AUTH_FINISHED,
  AUTH_STARTED,
  LOGOUT,
  OPEN_SNACKBAR,
} from '../constants';

export const googleAuth =
  ({ googleProfile, googleTokenId }) =>
  async (dispatch) => {
    dispatch({ type: AUTH_STARTED });
    try {
      dispatch({
        type: AUTH_FINISHED,
        payload: {
          result: googleProfile,
          token: googleTokenId,
        },
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: {
          error: error.response.data.message,
        },
      });
      dispatch({
        type: OPEN_SNACKBAR,
        payload: true,
      });
    }
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: OPEN_SNACKBAR,
    payload: true,
  });
};

export const register = (authForm, history) => async (dispatch) => {
  dispatch({ type: AUTH_STARTED });
  try {
    const { data } = await api.register(authForm);
    dispatch({
      type: AUTH_FINISHED,
      payload: data,
    });
    history.push('/');
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: error.response.data.message,
      },
    });
    dispatch({
      type: OPEN_SNACKBAR,
      payload: true,
    });
  }
};

export const signIn = (authForm, history) => async (dispatch) => {
  dispatch({ type: AUTH_STARTED });
  try {
    const { data } = await api.signIn(authForm);
    dispatch({
      type: AUTH_FINISHED,
      payload: data,
    });
    history.push('/');
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: error.response.data.message,
      },
    });
    dispatch({
      type: OPEN_SNACKBAR,
      payload: true,
    });
  }
};
