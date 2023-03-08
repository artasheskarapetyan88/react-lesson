import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './profile/reducer';
import postsReducer from './posts/reducer';
import usersReducer from './dialogs/reducers';
import usersInfoReducer from './usersInfo/reducers'
import fbUsersReducer from './users/reducers'
import postSearchReducer from "./usersSearch/reducers"
const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    profile: profileReducer,
    postsReducer: postsReducer,
    usersReducer: usersReducer,
    usersInfo : usersInfoReducer,
    fbUsers : fbUsersReducer,
    posts : postSearchReducer
  });
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware()));
  return { store };
};

export default configureStore;
