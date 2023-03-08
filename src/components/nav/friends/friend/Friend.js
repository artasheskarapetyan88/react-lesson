import { NavLink } from 'react-router-dom';
import c from './../Friends.module.css';

function Friend(props) {
  let url = '/dialogs' + '/' + props.id;
  return (
    <div className={c.friendWrapper}>
      <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/332/small/ablack-man-avatar-character-isolated-icon-free-vector.jpg" />
      </div>
      <div className={c.frTextType}>
        <NavLink to={url}>{props.name}</NavLink>
      </div>
    </div>
  );
}

export default Friend;
