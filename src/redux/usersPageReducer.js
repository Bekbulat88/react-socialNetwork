import { usersAPI } from "../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const CHANGE_FOLLOWING_STATEMENT = 'CHANGE_FOLLOWING_STATEMENT'

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 200,
  currentPage: 1,
  isFetching: false,
  // followed: false,
  isFollowingInProgress: [],

};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            };
          }
          return  user;
        }),
      };
    case SET_USERS: {
      return {...state, users: [...action.users]}  // добавляю к копии state.users новых action.users
      
     }
    case SET_CURRENT_PAGE: {
     
      return {...state,
              currentPage: action.currentPage}  
      
     }
    case SET_TOTAL_USERS_COUNT: {
      return {...state,
        //  totalUsersCount: action.usersCount
        }  
     }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    case CHANGE_FOLLOWING_STATEMENT: {
      return {
        ...state, 
        isFollowingInProgress: action.isFollowingInProgress 
       ? [...state.isFollowingInProgress, action.userId]
       : state.isFollowingInProgress.filter( id => id != action.userId )
      }
    }

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId: userId });

export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId: userId };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users};
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage};
};
export const setTotalUsersCount = (usersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, usersCount};
};
export const toggleIsFetching = (isFetching) => {
  return {type: TOGGLE_IS_FETCHING, isFetching}
};
export const changeFollowingStatement = (isFollowingInProgress, userId) => {
  return {type: CHANGE_FOLLOWING_STATEMENT, isFollowingInProgress, userId}
}


export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {   
 dispatch(toggleIsFetching(true))
 usersAPI.getUsers(currentPage, pageSize)
 .then((data) => {
     dispatch(setCurrentPage(currentPage));
     dispatch(toggleIsFetching(false))
     dispatch(setUsers(data.items));
     dispatch(setTotalUsersCount(data.totalCount));
   })}
}

export const unfollowUserThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(changeFollowingStatement(true, userId))
    usersAPI.unfollowUsers(userId).then( (data) => {
     if (data.resultCode == 0) {
     dispatch(unfollow(userId));
     }
     dispatch(changeFollowingStatement(false, userId))
    })
  }
}

export const followUserThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(changeFollowingStatement(true, userId))
    usersAPI.unfollowUsers(userId).then( (data) => {
     if (data.resultCode == 0) {
     dispatch(follow(userId));
     }
     dispatch(changeFollowingStatement(false, userId))
    })
  }
}



export default usersPageReducer;
