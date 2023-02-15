import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/default-avatar-profille.png";
import { NavLink } from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
    }

    return (
<div className={style.userList}>
        <div>
          {pages.map((page) => {
            return (
             <span className = { props.currentPage === page && style.selectedPage}
                   onClick = { (event) => {props.onPageChanged(page)}
                   } > {`${page} `} </span>
                   );
          })}
        </div>
        {props.users.map((user) => (
          <div className={style.users_block} key={user.id}>
            <div className={style.avaBlock}>
                <NavLink to={'/profile/' + user.id}>
              <img src = { user.photos.small != null ? user.photos.small : userPhoto }
                   alt=""
                   width={60}
                   height={60} />
              </NavLink>
              <div className={style.followButton_container}>
                { user.followed 
                  
                  ? (<button disabled = {props.isFollowingInProgress.some( id => id == user.id)}
                             className={style.followButton} 
                             onClick={ () => {
                                 props.unfollowUser (user.id)
                             }
                             } >Unfollow</button>)

                  : (<button disabled = {props.isFollowingInProgress.some( id => id == user.id)}
                             className={style.followButton} 
                             onClick={ () => {
                                 props.followUser(user.id)
                             }
                             } >Follow</button>)
                }
              </div>
            </div>
            <div className={style.users_contentBlock}>
              <div className={style.users_status_block}>
                <div className={style.name}>{user.name}</div>
                <div className={style.status}>{user.status}</div>
              </div>
              <div className={style.location_block}>
                <div className={style.country}>{"user.location.country"},</div>
                <div className={style.city}>{"user.location.city"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Users;
