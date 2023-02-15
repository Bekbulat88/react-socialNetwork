import Preloader from '../../Common/Preloader/Preloader';
import style from './profileInfo.module.css'
import ProfileStatus from './ProfilesStatus';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
          <div className={style.content}>
      {/* <div className={style.profileCover}>
        <img src="https://img.freepik.com/free-photo/spacecraft_1048-4457.jpg?w=1800&t=st=1673883352~exp=1673883952~hmac=67777e279edb568da874511503ec2e3df4a7444a32b97c30be22d11e489dfc44"></img>
        <p className={style.wpSign}><a href="https://www.freepik.com/free-photo/spacecraft_997465.htm#query=wallpaper&position=1&from_view=keyword">Image by kjpargeter</a> on Freepik</p>
      </div> */}

      <div>
      <img src={props.profile.photos.large} alt="" />

         </div>
         <div>
          <ProfileStatus status={props.status} updateUserStatus = {props.updateUserStatus}/>
          {/* {props.profile.aboutMe} */}
        </div>
      </div>

      
    </div>
    
  );
};

export default ProfileInfo;
