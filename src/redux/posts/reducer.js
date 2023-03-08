import types from './types';

export const initialValues = {
  postsList: []
};

export default function (state = initialValues, { type, payload }) {
  switch (type) {
    case types.ADD_POST:
      return {
        ...state,
        postsList: [...state.postsList, payload]
      };
    case types.REMOVE_ALL:
      return {
        ...state,
        postsList: payload
      };
    case types.REMOVE_POST:
      return {
        ...state,
        postsList: payload
      };
    case types.PLUS_LIKE_COUNT:
      return {
        ...state,
        postsList: payload
      };
    case types.MINUS_LIKE_COUNT:
      return {
        ...state,
        postsList: payload
      };
      case types.CHANGE_POST:
      return {
        ...state,
        postsList: payload
      };
    default:
      return state;
  }
}
