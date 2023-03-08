import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import c from './Header.module.css';

function Header() {
  const navigate = useNavigate()
  const handleLogOut = () => {
    Cookies.remove("authToken");
    navigate("/login")
  }
  return (
    <header className={c.header}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7DnJZAXeHVtT-TG5BhQ44EaA4Lge-OUqTQ&usqp=CAU" />
      </div>
      <div className= {c.logout} onClick={handleLogOut}>Logout</div>
    </header>
  );
}

export default Header;
