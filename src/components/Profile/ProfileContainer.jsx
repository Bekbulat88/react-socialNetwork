import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import  {  getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator} from '../../redux/profilePageReducer'
import { useParams } from "react-router-dom";
// import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import WithAuthenticationCheckRedirect from "../HOC/WithAuthenticationCheckRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
  componentDidMount() {

    let profileId = this.props.match.params.profileId;
    if (!profileId) {
      profileId = '27829'
      // profileId = '2'
    }

    this.props.getUserProfile(profileId);
    this.props.getUserStatus(profileId)
  }

  render() {
    return (
        <Profile
         {...this.props} profile = {this.props.profile} status = {this.props.status} updateUserStatus = {this.props.updateUserStatus}
         />

    );
  }
};

let mapStateToProps = (state) => ({
 profile : state.profilePage.profile,
 status : state.profilePage.status
})

// let AuthRedirectComponent = WithAuthenticationCheckRedirect (ProfileContainer)

// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }
//     return ComponentWithRouterProp;
//   }

  export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

export default compose (
  connect (mapStateToProps, {getUserProfile : getUserProfileThunkCreator,
                             getUserStatus : getUserStatusThunkCreator,
                             updateUserStatus : updateUserStatusThunkCreator
                            }),
                            withRouter,
  WithAuthenticationCheckRedirect,
) (ProfileContainer)

// export default connect (mapStateToProps, {getUserProfile : getUserProfileThunkCreator})(withRouter(
//   // AuthRedirectComponent
//   ProfileContainer
//   ));
