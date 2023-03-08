const getUsersList = (state) => state.usersReducer.users;
const getMessagesList = (state) => state.usersReducer.messages;

export default {
  getUsersList,
  getMessagesList
};
