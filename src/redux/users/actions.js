import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import types from './types';

export default function () {
    const dispatch = useDispatch();

    /**
     * Users methods
     */

    const setFbUsers = useCallback(
        (payload) =>
            dispatch({
                type: types.SET_FB_USERS,
                payload: payload
            }),
        [dispatch]
    );

    return {
        setFbUsers,

    };
}
