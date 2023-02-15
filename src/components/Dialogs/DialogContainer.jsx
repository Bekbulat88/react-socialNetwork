
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import {
  sendMessageActionCreator,
  updateCurrentNewMessageTextActionCreater,
} from "../../redux/messagePageReducer";
import WithAuthenticationCheckRedirect from "../HOC/WithAuthenticationCheckRedirect";
import Dialog from "./Dialog";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.messagePage,
    newMessageCurrentText: state.messagePage.newMessageCurrentText,
    isAuth : state.auth.isAuth
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateMessageText: (text) => {
      dispatch(updateCurrentNewMessageTextActionCreater(text));
    },
  };
};
compose (
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthenticationCheckRedirect,
) (Dialog)

// let AuthRedirectComponent = WithAuthenticationCheckRedirect (Dialog)

// const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose (
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthenticationCheckRedirect,
) (Dialog);
