import c from './Dialogs.module.css';
import Dialog from './dialog/Dialog';
import Massage from './massage/Massage';
import React from 'react';
import { useSelector } from 'react-redux';
import { DialogsSelectors, useDialogsActions } from '../../redux';
import { v4 as uuid } from 'uuid';

function Dialogs(props) {
  const users = useSelector(DialogsSelectors.getUsersList);
  const dialogs = useSelector(DialogsSelectors.getMessagesList);
  const { setAddMessage, removeAllMessages, searchMessage } = useDialogsActions();
  let newPostElement = React.createRef();
  let searchWord = React.createRef();

  const handleSearch = () => {
    let text = searchWord.current.value.toLowerCase();
    searchMessage(dialogs.filter((dialog) => dialog.message.toLowerCase().includes(text)));
  };

  const addMassage = () => {
    setAddMessage({ message: newPostElement.current.value, id: uuid() });
    newPostElement.current.value = '';
  };
  const deleteAllMessages = () => {
    removeAllMessages([]);
  };

  let dialogsElement = users.map((item) => <Dialog key={item.id} name={item.name} id={item.id} />);
  let massagesElement = dialogs.map((item) => (
    <Massage key={item.id} massage={item.message} id={item.id} />
  ));
  let newMassageBody = 'text';

  return (
    <div className={c.Dialogs}>
      <div className={c.DialogItems}>{dialogsElement}</div>
      <div className={c.Massagese}>
        {massagesElement}
        <div>
          <div>
            <textarea ref={searchWord}></textarea>
          </div>
          <div>
            <button onClick={handleSearch}>search</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <textarea ref={newPostElement} value={newPostElement?.current?.value}></textarea>
        </div>
        <div>
          <button onClick={addMassage}>send</button>
          <button onClick={deleteAllMessages}>delete massage</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
