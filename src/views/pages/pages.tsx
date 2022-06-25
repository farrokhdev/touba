import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Login } from ".";
import { CHART, Chart } from "../components/chart";
import { ComponentBinaRazan } from "../components/components";
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
import CompanyProfile from "./companyProfile";

function Pages() {
  const location = useLocation();

  return (
    <div>
      {location.pathname.includes("/login") ||
      location.pathname.includes("/register") ? null : (
        <>
          {location.pathname === "/" ? <TopNavHome /> : <TopNav />}
          <BottomNav />
        </>
      )}
      {location.pathname.includes("/profile") ? <ComponentBinaRazan /> : null}
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
      </Routes>
      {location.pathname.includes("/login") ||
      location.pathname.includes("/register") ||
      location.pathname.includes("/membership") ? null : (
        <>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Pages;
