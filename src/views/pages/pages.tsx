import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { EditOrder, Home, Login, DetailsOrder, PageTestComponent, CompanyProfileEdit } from ".";
import { CHART, Chart } from "../components/chart";
import {
  ComponentBinaRazan,
  Map,
  ComponentMapBox,
  ComponentProgress,
  ComponentKeyWord,
  ComponentTableORder,
  ComponentDashboardHeader,
  ComponentMessageImage,
  ComponentProductDetail,
  ComponentCompanyModal,
  ComponentSortandSearch,
  ComponentCalender,
  ComponentSoldBox,
  ComponentColors,
  ComponentDownloadBox,
  ComponentColorSelect,
  ComponentColorPicker,
  ComponentFieldsetPrice,
} from "../components/components";
import { BottomNav, Footer, TopNav, TopNavHome } from "../layout/layout";
import AboutusPage from "./AboutusPage/AboutusPage";
import ToubaProduct from "./ToubaProduct/ToubaProduct";
import ToubaSupplier from "./ToubaSupplier/ToubaSupplier";
import ToubaProductSingle1 from "./ToubaProductSingle1/ToubaProductSingle1";
import ToubaSpecialOffers from "./ToubaSpecialOffers/ToubaSpecialOffers";
import Register from "./register";
import HelpPage from "./HelpPage/HelpPage";
import MembershipPage from "./MembershipPage/MembershipPage";
import ToubaExcessCapacity from "./ToubaExcessCapacity/ToubaExcessCapacity";
import SideServicePage from "./SideServicePage/SideServicePage";
import ComponentLineChart from "../components/component_line_chart";
import DashboardPage from "./dashboard/dasboard";
import CompanyProfile from "./companyProfile";
import DashboardLikeCard from "./DashboardLikeCard/dashboard_like_card";
import DashboardTableOrder from "./DashbordTableOrder/dashboard_table_order";
import Dashboard from "../layout/dashboard/dashobord";
import ComponentStorage from "../components/component_storage";
import DashboardCompanyProfile from "./dashboardCompanyProfile/dashboard_company_profile";

function Pages() {
  const location = useLocation();
  // {
  //   if (location.pathname == "/dashboard") {
  //     return <DashboardPage />;
  //   }
  // }
  // {
  //   if (location.pathname == "/dashboard-table-order") {
  //     return <DashboardTableOrder />;
  //   }
  // }

  // {
  //   if (location.pathname == "/dashboard-like-card") {
  //     return <DashboardLikeCard />;
  //   }
  // }

  return (
    <div>
 
      {/* <div className="mt-3 p-3 bg-white">
        <ComponentFieldsetPrice/> 
      </div> */}

      {
        location.pathname.includes("/login") ||
          location.pathname.includes("/register") ||
          location.pathname.includes("/dashboard") ||
          location.pathname.includes("/dashboard-table-order") ||
          location.pathname.includes("/dashboard-like-card") ||
          location.pathname.includes("/dashboard/edit-order") ||
          location.pathname.includes("/dashboard/details-order") 
          ? null : (
            <>
              {location.pathname === "/" ? <TopNavHome /> : <TopNav />}
              <BottomNav />
            </>
          )
      }
      {location.pathname.includes("/profile") ? <ComponentBinaRazan /> : null}
      {location.pathname.includes("/dashboard") ? (
        <div className="row p-0 m-0">
          <div className="col-2 bg-white">
            <Dashboard />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/edit-order" element={<EditOrder />} />
              <Route path="/dashboard/details-order" element={<DetailsOrder />} />
              <Route
                path="/dashboard-table-order"
                element={<DashboardTableOrder />}
              />
              <Route path="/dashboard-like-card" element={<DashboardLikeCard />} />
              <Route path="/dashboard-company-profile" element={<DashboardCompanyProfile />} />

              <Route path="/dashboard/company/edit" element={<CompanyProfileEdit />} />
            </Routes>
          </div>
        </div>
      ) : (null)
      }
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutusPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ToubaProduct />} />
        <Route path="/detail-product" element={<ToubaProductSingle1 />} />
        <Route path="/supplier" element={<ToubaSupplier />} />
        <Route path="/special-offers" element={<ToubaSpecialOffers />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/excess" element={<ToubaExcessCapacity />} />
        <Route path="/special-offer" element={<ToubaSpecialOffers />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/side-service" element={<SideServicePage />} />
        <Route path="/company-profile" element={<CompanyProfile />} />

        <Route path="/test" element={<PageTestComponent />} />
      </Routes>
      {
        location.pathname.includes("/login") ||
          location.pathname.includes("/register") ||
          location.pathname.includes("/membership") ||
          location.pathname.includes("/dashboard") ||
          location.pathname.includes("/dashboard-table-order") ||
          location.pathname.includes("/dashboard-like-card") ||
          location.pathname.includes("/dashboard/edit-order") ||
          location.pathname.includes("/dashboard/details-order")

          ? null : (
            <>
              <Footer />
            </>
          )
      }
    </div >
  );
}

export default Pages;