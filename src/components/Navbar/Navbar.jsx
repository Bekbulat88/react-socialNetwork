import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? style.active : "")}
        >
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/messages"
          className={(navData) => (navData.isActive ? style.active : "")}
        >
          Messages
        </NavLink>
      </div>

      <div className={style.item}>
        <NavLink
          to="/users"
          className={(navData) => (navData.isActive ? style.active : "")}
        >
          Users
        </NavLink>
      </div>


      <div className={style.item}>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? style.active : "")}
        >
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? style.active : "")}
        >
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? style.active : "")}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
