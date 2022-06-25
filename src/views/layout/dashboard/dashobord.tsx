import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconActivity,
  IconBagGray,
  IconCategoryDashboard,
  IconChart,
  IconChat,
  IconFolder,
  IconHeartDashboard,
  IconHome,
  IconSetting,
  IconToubaSource,
  IconUser,
  IconWallet,
} from "../../../assets";

export type IProps = {};

const Dashboard: React.FC<IProps> = ({}) => {
  return (
    <div className="dashboard d-flex flex-column align-items-start">
      <img src={IconToubaSource} alt="logo" className="logoTouba" />
      <div className="w-100 d-flex flex-column align-items-start justify-content-between">
        <label>General</label>
        <NavLink
          to="/excess"
          className={({ isActive = String }) =>
            isActive
              ? "w-100 d-flex flex-row align-items-center active-Navlink"
              : "w-100 d-flex flex-row align-items-center"
          }
        >
          <img src={IconCategoryDashboard} />
          Dashboard
        </NavLink>
        <NavLink
          to="/likeditem"
          className={({ isActive = String }) =>
            isActive
              ? "w-100 d-flex flex-row align-items-center active-Navlink"
              : "w-100 d-flex flex-row align-items-center"
          }
        >
          <img src={IconHeartDashboard} />
          Liked Items
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive = String }) =>
            isActive
              ? "w-100 d-flex flex-row align-items-center active-Navlink"
              : "w-100 d-flex flex-row align-items-center"
          }
        >
          <img src={IconBagGray} />
          My Orders
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive = String }) =>
            isActive
              ? "w-100 d-flex flex-row align-items-center active-Navlink"
              : "w-100 d-flex flex-row align-items-center"
          }
        >
          <img src={IconChat} />
          My Reviews
          <span className="numOfReviews">4</span>
        </NavLink>
        <NavLink
          to="/work-group"
          className={({ isActive = String }) =>
            isActive
              ? "w-100 d-flex flex-row align-items-center active-Navlink"
              : "w-100 d-flex flex-row align-items-center"
          }
        >
          <img src={IconUser} />
          Work Groups
        </NavLink>
        <NavLink
          to="/finance"
          className={({ isActive = String }) =>
            isActive
              ? "w-100 d-flex flex-row align-items-center active-Navlink"
              : "w-100 d-flex flex-row align-items-center"
          }
        >
          <img src={IconWallet} />
          Finance
        </NavLink>
        <NavLink
          to="/setting"
          className={({ isActive = String }) =>
            isActive
              ? "w-100 d-flex flex-row align-items-center active-Navlink"
              : "w-100 d-flex flex-row align-items-center"
          }
        >
          <img src={IconSetting} />
          Setting
        </NavLink>
      </div>
      <div className="w-100 d-flex flex-column align-items-start justify-content-between">
        <label>Selling Center</label>
        <NavLink
          to="/my-company"
          className={({ isActive = String }) =>
            isActive
              ? "w-100 d-flex flex-row align-items-center active-Navlink"
              : "w-100 d-flex flex-row align-items-center"
          }
        >
          <img src={IconHome} />
          My Company Profile
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive = String }) =>
            isActive
              ? "w-100 d-flex flex-row align-items-center active-Navlink"
              : "w-100 d-flex flex-row align-items-center"
          }
        >
          <img src={IconFolder} />
          Products
        </NavLink>
        <NavLink
          to="/excess-capacity"
          className={({ isActive = String }) =>
            isActive
              ? "w-100 d-flex flex-row align-items-center active-Navlink"
              : "w-100 d-flex flex-row align-items-center"
          }
        >
          <img src={IconActivity} />
          Excess Capacity
        </NavLink>
        <NavLink
          to="/report"
          className={({ isActive = String }) =>
            isActive
              ? "w-100 d-flex flex-row align-items-center active-Navlink"
              : "w-100 d-flex flex-row align-items-center"
          }
        >
          <img src={IconChart} />
          Report
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
