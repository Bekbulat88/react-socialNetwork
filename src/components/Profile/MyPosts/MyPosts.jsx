import { createRef } from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  
  let postTextDataElement = props.posts.map((elem) => (
    <Post text={elem.text} likes={elem.likesCount} />
  ));

  let newPost = React.createRef();

  let addPostUI = () => {
    props.addPost();
  }; 

  let sendPostTextToBll = () => {
    let text = newPost.current.value
    props.changeCurrentTextOfNewPostInBll(text)
  };

  return (
    <div className={style.postList}>
      <div className={style.newPostArea}>
        <textarea
          ref={newPost}
          value={props.newPostCurrentText}
          onChange={sendPostTextToBll}
        ></textarea>
        <button onClick={addPostUI}>Post</button>
      </div>
      <div className={style.postsBlock}>{postTextDataElement}</div>
    </div>
  );
};

export default MyPosts;
