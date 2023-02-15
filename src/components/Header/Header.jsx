import { NavLink } from 'react-router-dom';
import style from './header.module.css'

const Header = (props) => {

  return (
    <header className={style.header}>
    <ion-icon name="trending-up-outline"></ion-icon>
    <div className={style.login}>
      {props.isAuth 
      ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
      : <NavLink to={'/login'}>Login 
      </NavLink>}
      </div>
    </header>
  );
};

export default Header