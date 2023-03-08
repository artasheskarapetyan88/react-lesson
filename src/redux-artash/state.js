import { v4 as uuid } from 'uuid';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
  _state: {
    profilePage: {
      newText: 'Enter your post',
      postData: [
        { id: uuid(), massage: 'Hey how are  you?', likeCount: 21 },
        { id: uuid(), massage: "It's my first post", likeCount: 2 },
        { id: uuid(), massage: 'Good job!', likeCount: 999 }
      ]
    },
    dialogsPage: {
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
    },
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
  },
  getState() {
    return this._state;
  },
  rerenderAll() {
    console.log('window changed');
  },
  subscriber(observer) {
    this.rerenderAll = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this.rerenderAll(this._state);
  }
};

window.store = store;

export default store;
