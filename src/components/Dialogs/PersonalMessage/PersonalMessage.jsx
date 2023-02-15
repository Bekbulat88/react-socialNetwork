
import style from ".././Dialog.module.css";

const PersonalMessage = (props) => {
  return <div className={style.message}>{props.text}</div>;
};

export default PersonalMessage;
