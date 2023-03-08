import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import types from './types';

export default function () {
    const dispatch = useDispatch();

    /**
     * Users methods
     */

    const setPosts = useCallback(
        (payload) =>
            dispatch({
                type: types.SET_POSTS,
                payload: payload
            }),
        [dispatch]
    );

    return {
        setPosts,

    };
}
