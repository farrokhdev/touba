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
  CardFAQ,
  CardLike,
  ComponentBinaRazan,
} from "../components/components";
import { BottomNav, Footer } from "../layout/layout";
import TopNav from "../layout/top_nav";

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
      <TopNav />
      <BottomNav />
      { location.pathname === "/" ? (null) : (<ComponentBinaRazan />)}
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default Pages;