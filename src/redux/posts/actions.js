import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import types from './types';

export default function () {
  const dispatch = useDispatch();

  /**
   * Test methods
   */

  const setAddPost = useCallback(
    (payload) =>
      dispatch({
        type: types.ADD_POST,
        payload: payload
      }),
    [dispatch]
  );
  const removeAllPosts = useCallback(
    (data) =>
      dispatch({
        type: types.REMOVE_ALL,
        payload: data
      }),
    [dispatch]
  );
  const removePost = useCallback(
    (data) =>
      dispatch({
        type: types.REMOVE_POST,
        payload: data
      }),
    [dispatch]
  );
  const plusLikeCount = useCallback(
    (data) =>
      dispatch({
        type: types.PLUS_LIKE_COUNT,
        payload: data
      }),
    [dispatch]
  );
  const minusLikeCount = useCallback(
    (data) =>
      dispatch({
        type: types.MINUS_LIKE_COUNT,
        payload: data
      }),
    [dispatch]
  );
  const changePost = useCallback(
    (data) =>
      dispatch({
        type: types.CHANGE_POST,
        payload: data
      }),
    [dispatch]
  );

  return {
    setAddPost,
    removeAllPosts,
    removePost,
    plusLikeCount,
    minusLikeCount,
      changePost
  };
}
