import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from ".";
import { IconTwoPerson, ImageBrandalibaba, ImageBrandArvan, ImageControll, ImageTest, ImageTest2, ImageTest3, ImageTest4 } from "../../assets";
import { ButtonIcon } from "../components/button_icon";
import { CHART, Chart } from "../components/chart";
import {
  Button,
  SelectComponent,
  SelectText,
  CardProduct,
  CardCategory,
  CardImage,
  CardProductWithPrice,
  CardCollectionProduct,
  CardBestSeller,
  CardCollectionBest,
  CardNewProduct,
  CardBestBrand,
  ButtonSelect,
  ButtonOutline,
  CardOfferHorizental,
  CardCalculate,
  ComponentBinaRazan,
} from "../components/components";
import { BottomNav, Footer } from "../layout/layout";
import GruopChat from "../components/group_chat";
import IncrementDecrementProduct from "../components/increment_decrement_product";
import NeededCapacity from "../components/needed_capacity";
import PriceSummary from "../components/price_summary";
import SingleProductPrice from "../components/single_product_price";
import Dashboard from "../layout/dashboard/dashobord";
import ProfileNav from "../layout/profile-nav/profile-nav";
import TopNav from "../layout/top_nav";
import AboutusPage from "./AboutusPage/AboutusPage";
import MembershipPage from "./MembershipPage/MembershipPage";
import { useState } from "react";
import SearchResultExcessCapacity from "./SearchResultExcessCapacity/SearchResultExcessCapacity";

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
  return <SearchResultExcessCapacity/>;
  // return (
  //   <div>
  //     <TopNav />
  //     <BottomNav />
  //     <ComponentBinaRazan />
  //     <div style={{ width: "360px" }}>
  //       <SelectComponent type={"one"} />
  //     </div>
  //     <Button title={"SEARCH"} />
  //     <SelectText value={"test"} />
  //     <CardProduct
  //       image={ImageTest}
  //       status={"Finish Product"}
  //       description={"Pomegranate Juice Pet Bottle..."}
  //       amount={200}
  //       chart={TEST}
  //     />
  //     <CardCategory image={ImageTest2} title={"Home Appliance"} />
  //     <div style={{ width: "770px" }}>
  //       <CardImage image={ImageTest3} />
  //     </div>
  //     <CardProductWithPrice
  //       image={ImageControll}
  //       title={"Product Name"}
  //       fromPrice={12}
  //       toPrice={24}
  //     />

  return (
    <div>
      <TopNav />
      <BottomNav />
      { location.pathname === "/" ? (null) : (<ComponentBinaRazan />)}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutusPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default Pages;