import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconAddCircle,
  IconHeartDashboard,
  IconSearchReverse,
  IconShare,
} from "../../../assets";
import Button from "../../components/button";

export type IProps = {};

const ProfileNav: React.FC<IProps> = () => {
  return (
    <div className="profile-Nav d-flex flex-row align-items-center justify-content-between">
      <div className="link-Container d-flex flex-row align-items-center justify-content-between">
        <NavLink
          className={({ isActive = String }) =>
            isActive ? "nav-Link-Active nav-Link" : "nav-Link"
          }
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive = String }) =>
            isActive ? "nav-Link-Active nav-Link" : "nav-Link"
          }
          to="about"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive = String }) =>
            isActive ? "nav-Link-Active nav-Link" : "nav-Link"
          }
          to="about"
        >
          Excess Capacity
        </NavLink>
        <NavLink
          className={({ isActive = String }) =>
            isActive ? "nav-Link-Active nav-Link" : "nav-Link"
          }
          to="about"
        >
          Contact Us
        </NavLink>
      </div>
      <div className="d-flex flex-row align-items-center">
        <img src={IconShare} />
        <img src={IconHeartDashboard} />
        <div className="d-flex flex-row align-items-center input-Container">
          <img src={IconSearchReverse} />
          <input type="text" placeholder="Search in this company " />
        </div>
        <button className="follow-Btn d-flex flex-row align-items-center justify-content-center">
          <img src={IconAddCircle} className="mx-2" />
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProfileNav;
