import React from "react";

export type IProps = {
  group: any;
};

const GruopChat: React.FC<IProps> = ({ group }) => {
  return (
    <div className="group-Chat d-flex flex-row align-items-center justify-content-between">
      <div className=" h-100 d-flex flex-column align-items-start justify-content-between group-Detail">
        <div className="d-flex flex-row align-items-center justify-content-between">
          <span className={`"group-Title" ${group.isRead ? "readed" : null}`}>
            {group.groupName}
          </span>
          <span className="numOfNotRead d-flex flex-row align-items-center justify-content-center mx-2">
            {group.numOfNotRead}
          </span>
        </div>
        <div className="message-Detail">
          <span className={group.isRead ? "readed" : ""}>
            {group.messages[group.messages.length - 1].senderName}:
          </span>
          <span className={group.isRead ? "readed" : ""}>
            {group.messages[group.messages.length - 1].text}
          </span>
        </div>
      </div>
      <div className=" h-100 d-flex flex-column align-items-end justify-content-between">
        <div className="avatar-Container d-flex flex-row align-items-end justify-content-end">
          {group.members.slice(0, 3).map((item: any) => (
            <img
              key={item.id}
              src={item.img}
              className={group.isRead ? "readedImg" : ""}
            />
          ))}
          <div className="d-flex flex-row align-items-center justify-content-center">
            <span className={group.isRead ? "readed" : ""}>
              +{group.members.length - 3}
            </span>
          </div>
        </div>
        <span className="recive-Time">
          {group.messages[group.messages.length - 1].time.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default GruopChat;
