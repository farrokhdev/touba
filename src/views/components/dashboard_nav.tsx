import React from "react";
import {
  IconAddCircle,
  IconArrowBlack,
  IconChat,
  IconNotification,
  IconProfile,
} from "../../assets";

export type IProps = {
  title: string;
};

const DashboardNav: React.FC<IProps> = ({ title }: IProps) => {
  return (
    <div className="dashboard-Nav d-flex flex-row align-items-center justify-content-between">
      <span className="dashboard-Title">{title}</span>
      <div className="btn-Container">
        <button className="add-Btn">
          <img src={IconAddCircle} alt="add" />
          <span>ADD NEW</span>
        </button>
        <button className="icon-Btn">
          <img src={IconNotification} alt="notification" />
        </button>
        <button className="icon-Btn">
          <img src={IconChat} alt="chat" />
        </button>
        <button className="icon-Btn">
          <img src={IconProfile} alt="profile" />
        </button>
        <button className="arrow-Btn">
          <img src={IconArrowBlack} alt="profile" />
        </button>
      </div>
    </div>
  );
};

export default DashboardNav;
