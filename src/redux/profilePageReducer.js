import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_CURRENT_NEW_POST_TEXT = 'UPDATE-CURRENT-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS '
const SET_ABOUT_ME = 'SET_ABOUT_ME'

let initialState = {

  postTextData: [
    { id: 1, text: "Hello World! This is my first post", likesCount: "24" },
    {
      id: 2,
      text: "I'll be the greatest react developper !!11",
      likesCount: "122",
    },
    { id: 3, text: "Hello World! This is my third post", likesCount: "33" },
    {
      id: 4,
      text: "Could I call myself Frontend Developer !!11",
      likesCount: "12222",
    },
  ],
  newPostCurrentText: 'Placeholder tipo',
  profile: null,
  status : ''

}

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_POST : 
    return {
      postTextData : [...state.postTextData, {id :5, text : state.newPostCurrentText, likesCount : 0}],
      newPostCurrentText : ''
    };

    case UPDATE_CURRENT_NEW_POST_TEXT :
    return {
        ...state,
        newPostCurrentText : action.text
    }; 

    case SET_USER_PROFILE :  {
      return {...state, profile : action.profile}
    };

    case SET_STATUS : {
      return {...state, 
        status : action.status}
    }

    default: 
    return state
  }
}

export const addPostUIActionCreator = () => ({type: ADD_POST});

export const setUserProfileActionCreator = (profile) => ({type: SET_USER_PROFILE, profile});

export const updateCurrentNewPostTextActionCreator = (text) => {
 return ({type: UPDATE_CURRENT_NEW_POST_TEXT,
          text: text})
};
export const setStatusActionCreator = (status) => {
  return ({type: SET_STATUS,
           status})
 };

//  export const updateStatusActionCreator = (status) => {
//   return ( {
//     type: UPADATE_STATUS,
//   })
//  }

export const getUserProfileThunkCreator = (profileId) => {
  return (dispatch) => {

    profileAPI.getProfile(profileId).then(
      data => {dispatch(setUserProfileActionCreator(data))})
  }
}

export const getUserStatusThunkCreator = (profileId) => {
  return (dispatch) => {
    profileAPI.getStatus(profileId).then(
      status => {dispatch(setStatusActionCreator(status.data))})
  }
}

export const updateUserStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatusActionCreator(status))
      }
    }
      )}
  }  

export default profilePageReducer

