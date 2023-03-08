import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import types from './types';

export default function () {
    const dispatch = useDispatch();

    /**
     * Test methods
     */

    const addresUpdate = useCallback(
        (payload) =>
            dispatch({
                type: types.CHANGE_ADDRESS,
                payload: payload
            }),
        [dispatch]
    );
    const setUsers = useCallback(
        (payload) =>
            dispatch({
                type: types.SET_USERS,
                payload: payload
            }),
        [dispatch]
    );



    return {
        addresUpdate,
        setUsers
    };
}
