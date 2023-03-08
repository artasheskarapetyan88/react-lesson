import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

const configureRedux = (initialState = {}) => {
  let reducers = combineReducers({
    profile: profileReducer
    // dialogs : dialogsReducer()
  });
  const store = createStore(reducers, initialState);

  return { store };
};

export default configureRedux;
