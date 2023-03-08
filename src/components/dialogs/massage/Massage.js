import c from './../Dialogs.module.css';
import { useSelector } from 'react-redux';
import { DialogsSelectors, useDialogsActions } from '../../../redux';
function Massage({ massage, id }) {
  const messages = useSelector(DialogsSelectors.getMessagesList);
  const { removeMessage } = useDialogsActions();
  const deleteMessage = () => {
    removeMessage(messages.filter((message) => message.id !== id));
  };
  return (
    <div>
      <div>{massage}</div>
      <div>
        <button onClick={deleteMessage}>delete message</button>
      </div>
    </div>
  );
}

export default Massage;
