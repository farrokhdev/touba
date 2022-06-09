import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Login } from ".";
import { CHART, Chart } from "../components/chart";
import {
  ComponentBinaRazan,
} from "../components/components";
import { BottomNav, Footer, TopNav } from "../layout/layout";
import AboutusPage from "./AboutusPage/AboutusPage";
import { useState } from "react";
import SearchResultExcessCapacity from "./SearchResultExcessCapacity/SearchResultExcessCapacity";
import { SearchResultProduct } from "./SearchResultProduct/SearchResultProduct";
import SearchResultSuppliers from "./SearchResultSuppliers/SearchResultSuppliers";
import ToubaProduct from "./ToubaProduct/ToubaProduct";
import ToubaSupplier from "./ToubaSupplier/ToubaSupplier";
import ToubaProductSingle1 from "./ToubaProductSingle1/ToubaProductSingle1";
import ToubaSpecialOffers from "./ToubaSpecialOffers/ToubaSpecialOffers";
import Register from "./register";
import HelpPage from "./HelpPage/HelpPage";
import MembershipPage from "./MembershipPage/MembershipPage";
import ToubaExcessCapacity from "./ToubaExcessCapacity/ToubaExcessCapacity";

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
  const [quantity, setQuantity] = useState(100);
  const list = [
    { id: 1, quantity: 2, price: 100 },
    { id: 2, quantity: 5, price: 125 },
    { id: 3, quantity: 4, price: 300 },
  ];
  const group = {
    id: 1,
    groupName: "betterSoft",
    numOfNotRead: 30,
    members: [
      { id: 1, img: "https://s6.uupload.ir/files/1_bjvh.png" },
      { id: 2, img: "https://s6.uupload.ir/files/2_t7zt.png" },
      { id: 3, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 4, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 5, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 6, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 7, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 8, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 9, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 10, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 11, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 12, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 13, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 14, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 15, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 16, img: "https://s6.uupload.ir/files/3_oxc2.png" },
      { id: 17, img: "https://s6.uupload.ir/files/3_oxc2.png" },
    ],
    messages: [
      { id: 1, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 2, text: "hello", senderName: "bill gates", time: "2 min" },
      { id: 3, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 4, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 5, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 6, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 7, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 8, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 9, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 10, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 11, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 12, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 13, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 14, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 15, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 16, text: "message", senderName: "bill gates", time: "2 min" },
      { id: 17, text: "last message", senderName: "bill gates", time: "5 min" },
    ],
    isRead: false,
  };

  return (
    <div>
      {location.pathname.includes("/login") ||
        location.pathname.includes("/register")
        ? (null) : (
          <>
            <TopNav />
            <BottomNav />
          </>
        )}
      {location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/register"
        ? (null) : (<ComponentBinaRazan />)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutusPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ToubaProduct />} />
        <Route path="/detail-product" element={<ToubaProductSingle1 />} />
        <Route path="/supplier" element={<ToubaSupplier />} />
        <Route path="/special-offers" element={<ToubaSpecialOffers />} />

        <Route path="/excess" element={<ToubaExcessCapacity />} />


      </Routes>
      {location.pathname.includes("/login") ||
        location.pathname.includes("/register")
        ? (null) : (
          <>
            <Footer />
          </>
        )}
    </div>
  );
}

export default Pages;
