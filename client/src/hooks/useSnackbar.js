import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_SNACKBAR } from '../redux/constants';

export default function useSnackbar() {
  const { snackbar } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (snackbar) {
      setTimeout(() => {
        dispatch({
          type: OPEN_SNACKBAR,
          payload: false,
        });
      }, 3000);
    }

    return () => {
      clearTimeout(3000);
    };
  }, [snackbar, dispatch]);

  return snackbar;
}
