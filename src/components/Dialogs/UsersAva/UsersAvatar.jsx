import style from "./usersAvatar.module.css";

const UsersAvatar = (props) => {
  return (
    <div className={style.container}>
      <img src={props.ava} alt="ava would be there" />
    </div>
  );
};

export default UsersAvatar;
