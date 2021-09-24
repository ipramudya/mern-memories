import { AUTH } from '../constants';

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
