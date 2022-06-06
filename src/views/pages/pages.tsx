import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Login } from ".";
import { CHART, Chart } from "../components/chart";
import {
  ComponentBinaRazan,
} from "../components/components";
import { BottomNav, Footer, TopNav } from "../layout/layout";
import AboutusPage from "./AboutusPage/AboutusPage";

const TEST: CHART[] = [
  { name: "JAN", size: 20 },
  { name: "FEB", size: 30 },
  { name: "MAR", size: 40 },
  { name: "APR", size: 50 },
  { name: "MAY", size: 60 },
  { name: "JUN", size: 70 },
  { name: "JUL", size: 80 },
  { name: "AUG", size: 90 },
  { name: "SEP", size: 100 },
  { name: "OCT", size: 20 },
  { name: "NOV", size: 20 },
  { name: "DEC", size: 20 },
];

function Pages() {
  const location = useLocation();

  return (
    <div>
      {location.pathname.includes("/login") ? (null) : (
        <>
          <TopNav />
          <BottomNav />
          <ComponentBinaRazan />
        </>
      )}
      {location.pathname === "/" || "/login" ? (null) : (<ComponentBinaRazan />)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutusPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {location.pathname.includes("/login") ? (null) : (
        <>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Pages;
