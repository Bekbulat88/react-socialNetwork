import React from "react";
import { connect } from "react-redux";
import {
  addPostUIActionCreator,
  updateCurrentNewPostTextActionCreator,
} from "../../../redux/profilePageReducer";
// import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {

//         let state = store.getState();
        
//         let addPostUI = () => {
//           store.dispatch(addPostUIActionCreator());
//         };

//         let changeCurrentTextOfNewPostInBll = (text) => {
//           store.dispatch(updateCurrentNewPostTextActionCreator(text));
//         };

//         return (
//           <MyPosts
//             addPost={addPostUI}
//             changeCurrentTextOfNewPostInBll={changeCurrentTextOfNewPostInBll}
//             posts={state.profilePage.postTextData}
//             newPostCurrentText={state.profilePage.newPostCurrentText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
const mapStateToProps = (state) => {
  return {
    posts : state.profilePage.postTextData,
    newPostCurrentText : state.profilePage.newPostCurrentText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost : () => { dispatch(addPostUIActionCreator()) },
    changeCurrentTextOfNewPostInBll : (text) => { dispatch(updateCurrentNewPostTextActionCreator(text))}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps ) (MyPosts)

export default MyPostsContainer;
