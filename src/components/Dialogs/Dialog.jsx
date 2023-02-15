import style from "./Dialog.module.css";
import PersonalDialog from "./PersonalDialog/PerosnalDialog";
import PersonalMessage from "./PersonalMessage/PersonalMessage";
import UsersAvatar from "./UsersAva/UsersAvatar";
import React from "react";

const Dialog = (props) => {
  let userAva = props.dialogsPage.dialogData.map((elem) => (
    <UsersAvatar ava={elem.ava} />
  ));

  let dialogElement = props.dialogsPage.dialogData.map((elem) => (
    <PersonalDialog id={elem.id} name={elem.name} />
  ));

  let messageElement = props.dialogsPage.messageData.map((elem) => (
    <PersonalMessage text={elem.text} />
  ));

  let newMessage = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
  };

  let updateNewMessageTextInTheBll = () => {
    let messageText = newMessage.current.value;
    props.updateMessageText(messageText);
  };

 
  return (
    <div className={style.dialogs}>
      <div className={style.usersNameAndAva}>
        <div className={style.usersAvas}>{userAva}</div>
        <div className={style.usersNames}>{dialogElement}</div>
      </div>

      <div className={style.userMessages}>
        {messageElement}
        <textarea
          ref={newMessage}
          value={props.newMessageCurrentText}
          onChange={updateNewMessageTextInTheBll}
        ></textarea>
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default Dialog;
