import axios from 'axios';

const API = axios.create({ baseURL: 'https://with-memories.herokuapp.com' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

/* posts endpoints */
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`${'/posts'}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`${'/posts'}/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

/* user endpoints */
export const signIn = (authForm) => API.post(`/user/signin`, authForm);
export const register = (authForm) => API.post(`/user/register`, authForm);
