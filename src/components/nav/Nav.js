import c from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './friends/Friends';

function Nav(props) {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink className={({isActive}) => (isActive ? c.active : '')} to="/">
                    Profile
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink className={({isActive}) => (isActive ? c.active : '')} to="/dialogs">
                    Messages
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/news" className={({isActive}) => (isActive ? c.active : '')}>
                    News
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/music" className={({isActive}) => (isActive ? c.active : '')}>
                    Music
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/settings" className={({isActive}) => (isActive ? c.active : '')}>
                    Settings
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/usersHw" className={({isActive}) => (isActive ? c.active : '')}>
                    FB Users
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/userSearch" className={({isActive}) => (isActive ? c.active : '')}>
                    Users Search
                </NavLink>
            </div>
            <div className={c.itemFriends}>
                <Friends store={props.store}/>
            </div>
        </nav>
    );
}

export default Nav;
