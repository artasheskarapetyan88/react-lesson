import { v4 as uuid } from 'uuid';

const addPost = 'ADD-POST';
const updateNewText = 'UPDATE-NEW-TEXT';

let initialState = {
  newText: 'Enter your post',
  postData: [
    { id: uuid(), massage: 'Hey how are  you?', likeCount: 21 },
    { id: uuid(), massage: "It's my first post", likeCount: 2 },
    { id: uuid(), massage: 'Good job!', likeCount: 999 }
  ],
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
export default function (state = initialState, action) {
  switch (action.type) {
    case addPost:
      let newPost = {
        id: uuid(),
        massage: state.newText,
        likeCount: 0
      };
      state.postData.push(newPost);
      state.newText = '';
      return state;
    case updateNewText:
      state.newText = action.newPostText;
      return state;
    default:
      return state;
  }
}

export function addPostActionCreator() {
  return {
    type: addPost
  };
}

export function updateNewTextActionCreator(text) {
  return {
    type: updateNewText,
    newPostText: text
  };
}
