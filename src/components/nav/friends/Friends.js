import c from './Friends.module.css';
import Friend from './friend/Friend';
import { ProfileSelectors } from '../../../redux';
import { useSelector } from 'react-redux';
function Friends() {
  const friendsList = useSelector(ProfileSelectors.getFriendsList);
  let friendElement = friendsList.map((item) => (
    <Friend key={item.id} name={item.name} id={item.id} />
  ));
  return (
    <div className={c.friends}>
      <div className={c.tagFriend}>Friends</div>
      <div className={c.frElement}>{friendElement}</div>
    </div>
  );
}

export default Friends;
