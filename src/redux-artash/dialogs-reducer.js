import { v4 as uuid } from 'uuid';

const UPDATE_NEW_MASSAGE_BODY = 'UPDATE_NEW_MASSAGE_BODY';
const SEND_MASSAGE = 'SEND_MASSAGE';

let initeialState = {
  massagesData: [
    { massage: 'Barlus axpers vonc es?', id: uuid() },
    { massage: 'Hello', id: uuid() },
    { massage: 'Ya qu kataxac', id: uuid() }
  ],
  dialogsData: [
    { id: uuid(), name: 'Artush' },
    { id: uuid(), name: 'Glaz' },
    { id: uuid(), name: 'Aro' },
    { id: uuid(), name: 'Ando' },
    { id: uuid(), name: 'Goq' }
  ],
  newMassageBody: 'enter your massage'
};
const dialogsReducer = (state = initeialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MASSAGE_BODY:
      state.newMassageBody = action.body;
      return state;
    case SEND_MASSAGE:
      let body = state.newMassageBody;
      state.massagesData.push({ id: uuid(), massage: body });
      state.newMassageBody = '';
      return state;
    default:
      return state;
  }
};

export function sendMassageCreator() {
  return {
    type: SEND_MASSAGE
  };
}

export function updateNewMassageBodyCreator(body) {
  return {
    type: UPDATE_NEW_MASSAGE_BODY,
    body: body
  };
}

export default dialogsReducer;
