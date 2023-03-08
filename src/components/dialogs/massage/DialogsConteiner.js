import React from 'react';
import {
  sendMassageCreator,
  updateNewMassageBodyCreator
} from '../../../redux-artash/dialogs-reducer';
import Dialogs from '../Dialogs';
import { connect } from 'react-redux';

// function DialogsConteiner(props) {
//
//     function addMassage() {
//         props.store.dispatch(sendMassageCreator())
//
//     }
//
//     function onNewMassageChange(body) {
//         props.store.dispatch(updateNewMassageBodyCreator(body))
//     }
//
//     let state = props.store.getState().dialogsPage
//
//
//     return (
//         <Dialogs updateNewMassageBody={onNewMassageChange} sendMassage={addMassage} dialogsPage={state}/>
//     );
// }

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMassageBody: (body) => {
      dispatch(updateNewMassageBodyCreator(body));
    },
    sendMassage: () => {
      dispatch(sendMassageCreator());
    }
  };
};

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;
