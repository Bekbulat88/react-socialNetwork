import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.post}>
      <ion-icon name="chatbox-outline" className={style.postedPost}></ion-icon>
      <p className={style.postText}>{props.text}</p>
      <p className={style.postLikes}>
        Like <span>{props.likes}</span>
      </p>
    </div>
  );
};

export default Post;
