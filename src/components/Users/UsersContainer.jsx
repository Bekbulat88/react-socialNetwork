import React from "react";
import { connect } from "react-redux";
import {
  getUsersThunkCreator,
  unfollowUserThunkCreator,
  followUserThunkCreator
} from "../../redux/usersPageReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
  this.props.getUsers(pageNumber,this.props.pageSize);
  };

  render() {
    return (
        <>
        <div>
            {this.props.isFetching ? <Preloader/> : null}</div>
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        isButtonPressed = {this.props.isButtonPressed}
        isFollowingInProgress = {this.props.isFollowingInProgress}
        unfollowUser = {this.props.unfollowUser}
        followUser = {this.props.followUser}
      />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching : state.usersPage.isFetching,
    isFollowingInProgress : state.usersPage.isFollowingInProgress
  };
};

export default compose (
  connect(mapStateToProps, 
    { getUsers : getUsersThunkCreator, 
      unfollowUser: unfollowUserThunkCreator, 
      followUser : followUserThunkCreator}
    )
) (UsersContainer)

// export default connect(mapStateToProps, 
//     { getUsers : getUsersThunkCreator, 
//       unfollowUser: unfollowUserThunkCreator, 
//       followUser : followUserThunkCreator}
//     )(UsersContainer);
