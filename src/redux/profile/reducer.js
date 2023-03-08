import types from './types';
import { v4 as uuid } from 'uuid';
export const initialValues = {
  count: 0,
  friendsList: [
    { name: 'Glaz', id: uuid() },
    { name: 'Goq', id: uuid() },
    { name: 'Aro', id: uuid() },
    { name: 'Ando', id: uuid() },
    { name: 'Ando', id: uuid() },
    { name: 'Ando', id: uuid() },
    { name: 'Ando', id: uuid() },
    { name: 'Ando', id: uuid() },
    { name: 'Ando', id: uuid() }
  ]
};

export default function (state = initialValues, { type, payload }) {
  switch (type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + payload
      };
    case types.DECREMENT:
      return {
        ...state,
        formAutoSaveState: state.count - payload
      };
    default:
      return state;
  }
}
