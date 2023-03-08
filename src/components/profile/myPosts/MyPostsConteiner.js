import React from 'react';
import {
  addPostActionCreator,
  updateNewTextActionCreator
} from '../../../redux-artash/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import {
  sendMassageCreator,
  updateNewMassageBodyCreator
} from '../../../redux-artash/dialogs-reducer';

// function MyPostsConteiner(props) {
// let state = props.store.getState()
//     const addPost = () =>{
//         props.store.dispatch(addPostActionCreator())
//     }
//     const onChange = (text) =>{
//         let action = updateNewTextActionCreator(text)
//         props.store.dispatch(action);
//     }
//
//     return (
//         <MyPosts  updateNewText = {onChange}  addPost = {addPost}  postsData =  {state.profilePage.postData}
//                   newText = {state.profilePage.newText} />
//     );
// }

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postData,
    newText: state.profilePage.newText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewText: (text) => {
      let action = updateNewTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  };
};

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;
