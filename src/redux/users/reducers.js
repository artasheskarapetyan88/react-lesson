import types from './types';
export const initialValues = {
    users: []

};

export default function (state = initialValues, { type, payload }) {
    switch (type) {

        case types.SET_FB_USERS:
            return {
                ...state,
                users: payload
            };

        default:
            return state;
    }
}
