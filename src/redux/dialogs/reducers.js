import types from './types';
import { v4 as uuid } from 'uuid';

export const initialValues = {
  users: [
    { id: uuid(), name: 'Artush' },
    { id: uuid(), name: 'Glaz' },
    { id: uuid(), name: 'Aro' },
    { id: uuid(), name: 'Ando' },
    { id: uuid(), name: 'Goq' }
  ],
  messages: [
    { message: 'Barlus axpers vonc es?', id: uuid() },
    { message: 'Hello', id: uuid() },
    { message: 'Ya qu kataxac', id: uuid() }
  ]
};

export default function (state = initialValues, { type, payload }) {
  switch (type) {
    case types.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload]
      };
    case types.REMOVE_ALL_MESSAGE:
      return {
        ...state,
        messages: payload
      };
    case types.REMOVE_MESSAGE:
      return {
        ...state,
        messages: payload
      };
    case types.SEARCH_MESSAGE:
      return {
        ...state,
        messages: payload
      };

    default:
      return state;
  }
}
