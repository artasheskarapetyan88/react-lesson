import types from './types';
export const initialValues = {
    posts: []

};

export default function (state = initialValues, { type, payload }) {
    switch (type) {

        case types.SET_POSTS:
            return {
                ...state,
                posts: payload
            };

        default:
            return state;
    }
}
