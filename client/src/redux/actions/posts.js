import * as api from '../../api';
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  POST_LOADING,
  POST_ERROR,
} from '../constants';

// Action Creators
export const getPosts = () => async (dispatch) => {
  dispatch({ type: POST_LOADING });

  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: error.response.data.message,
      },
    });
  }
};

export const createPost = (post) => async (dispatch) => {
  dispatch({ type: POST_LOADING });
  try {
    const { data } = await api.createPost(post);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: error.response.data.message,
      },
    });
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  dispatch({ type: POST_LOADING });
  try {
    const { data } = await api.updatePost(id, updatedPost);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: error.response.data.message,
      },
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch({ type: POST_LOADING });
  try {
    await api.deletePost(id);
    dispatch({
      type: DELETE,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: error.response.data.message,
      },
    });
  }
};

export const likePost = (id) => async (dispatch) => {
  dispatch({ type: POST_LOADING });
  try {
    const { data } = await api.likePost(id);
    dispatch({
      type: LIKE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: error.response.data.message,
      },
    });
  }
};
