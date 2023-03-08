import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import types from './types';

export default function () {
  const dispatch = useDispatch();

  /**
   * Test methods
   */

  const setIncrement = useCallback(
    (payload) =>
      dispatch({
        type: types.INCREMENT,
        payload: payload
      }),
    [dispatch]
  );

  const setDecrement = useCallback(
    (payload) =>
      dispatch({
        type: types.DECREMENT,
        payload: payload
      }),
    [dispatch]
  );

  return {
    setIncrement,
    setDecrement
  };
}
