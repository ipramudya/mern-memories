import { OPEN_SNACKBAR } from '../constants';

export default function snackbar(state = false, action) {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return action.payload;
    default:
      return state;
  }
}
