import React from "react";
import Header from "./Header";
import { authMeThunkCreator, logoutThunkCreator } from "../../redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  
});

export default connect(mapStateToProps, {
  authMe: authMeThunkCreator,
  logout : logoutThunkCreator
})(HeaderContainer);
