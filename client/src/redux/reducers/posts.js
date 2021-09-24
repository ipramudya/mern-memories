import { FETCH_ALL, CREATE, UPDATE } from '../constants';

export default function posts(posts = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => {
        return post._id === action.payload._id ? action.payload : post;
      });
    default:
      return posts;
  }
}
