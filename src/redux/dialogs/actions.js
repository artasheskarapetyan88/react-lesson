import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import types from './types';

export default function () {
  const dispatch = useDispatch();

  /**
   * Test methods
   */

  const setAddMessage = useCallback(
    (payload) =>
      dispatch({
        type: types.ADD_MESSAGE,
        payload: payload
      }),
    [dispatch]
  );
  const removeAllMessages = useCallback(
    (data) =>
      dispatch({
        type: types.REMOVE_ALL_MESSAGE,
        payload: data
      }),
    [dispatch]
  );
  const removeMessage = useCallback(
    (data) =>
      dispatch({
        type: types.REMOVE_MESSAGE,
        payload: data
      }),
    [dispatch]
  );
  const searchMessage = useCallback(
    (data) =>
      dispatch({
        type: types.SEARCH_MESSAGE,
        payload: data
      }),
    [dispatch]
  );

  return {
    setAddMessage,
    removeAllMessages,
    removeMessage,
    searchMessage
  };
}
