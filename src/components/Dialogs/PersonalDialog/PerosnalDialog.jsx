import { NavLink } from "react-router-dom";
import style from ".././Dialog.module.css";


const PersonalDialog = (props) => {
  let path = "/messages/" + props.id;
  return (
    <NavLink className={style.userName + " " + style.active} to={path}>
      {props.name}
    </NavLink>
  );
};

export default PersonalDialog;
