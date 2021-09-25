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
