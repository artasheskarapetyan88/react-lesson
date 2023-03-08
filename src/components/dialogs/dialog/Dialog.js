import { NavLink } from 'react-router-dom';
import c from './../Dialogs.module.css';

function Dialog(props) {
  let url = '/dialogs' + '/' + props.id;
  return (
    <div className={c.Dialog}>
      <div className={c.iconImage}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small/man-avatar-icon-free-vector.jpg" />
      </div>
      <div className={c.link}>
        <NavLink to={url}> {props.name}</NavLink>
      </div>
    </div>
  );
}

export default Dialog;
