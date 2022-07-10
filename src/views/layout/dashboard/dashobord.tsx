import React from "react";
import { Link, NavLink } from "react-router-dom";
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
  ToubaLogo1,
} from "../../../assets";

export type IProps = {};

const Dashboard: React.FC<IProps> = ({ }) => {
  return (
    <div className="dashboard d-flex flex-column align-items-start">
      <Link to="/" className="link-image">
        <img src={ToubaLogo1} alt="logo" className="logoTouba" />
      </Link>
      <div className="w-100 d-flex flex-column align-items-start justify-content-between">
        <label>General</label>
        <NavLink
          end
          to="/dashboard"
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
          end
          to="/dashboard-like-card"
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
          to="/dashboard-table-order"
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
          to="/dashboard-review"
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
          to="/"
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
          to="/dashboard-finance"
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
          to="/"
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
          to="/dashboard-company-edit"
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
          to="/dashboard-company-profile"
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
          to="/dashboard/companyprofile/excess"
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
          to="/dashboard-report"
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
