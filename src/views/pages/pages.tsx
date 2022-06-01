import { useState } from "react";
import {
  IconTwoPerson,
  ImageBrandalibaba,
  ImageBrandArvan,
  ImageControll,
  ImageTest,
  ImageTest2,
  ImageTest3,
  ImageTest4,
} from "../../assets";
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
import GruopChat from "../components/group_chat";
import IncrementDecrementProduct from "../components/increment_decrement_product";
import NeededCapacity from "../components/needed_capacity";
import PriceSummary from "../components/price_summary";
import SingleProductPrice from "../components/single_product_price";
import Dashboard from "../layout/dashboard/dashobord";
import { BottomNav } from "../layout/layout";
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
      <TopNav />
      <BottomNav />
      <ComponentBinaRazan />
      <div style={{ width: "360px" }}>
        <SelectComponent type={"one"} />
      </div>
      <Button title={"SEARCH"} />
      <SelectText value={"test"} />
      <CardProduct
        image={ImageTest}
        status={"Finish Product"}
        description={"Pomegranate Juice Pet Bottle..."}
        amount={200}
        chart={TEST}
      />
      <CardCategory image={ImageTest2} title={"Home Appliance"} />
      <div style={{ width: "770px" }}>
        <CardImage image={ImageTest3} />
      </div>
      <CardProductWithPrice
        image={ImageControll}
        title={"Product Name"}
        fromPrice={12}
        toPrice={24}
      />

      <div style={{ width: "770px" }}>
        <CardCollectionProduct title={"Low MOQ"} location={"#"}>
          <CardProductWithPrice
            image={ImageControll}
            title={"Product Name"}
            fromPrice={12}
            toPrice={24}
          />
          <CardProductWithPrice
            image={ImageControll}
            title={"Product Name"}
            fromPrice={12}
            toPrice={24}
          />
          <CardProductWithPrice
            image={ImageControll}
            title={"Product Name"}
            fromPrice={12}
            toPrice={24}
          />
          <CardProductWithPrice
            image={ImageControll}
            title={"Product Name"}
            fromPrice={12}
            toPrice={24}
          />
        </CardCollectionProduct>
      </div>
      <CardBestSeller image={ImageControll} discountPercent={40} />
      <CardCollectionBest>
        <CardBestSeller image={ImageControll} discountPercent={40} />
        <CardBestSeller image={ImageControll} discountPercent={40} />
        <CardBestSeller image={ImageControll} discountPercent={40} />
        <CardBestSeller image={ImageControll} discountPercent={40} />
        <CardBestSeller image={ImageControll} discountPercent={40} />
        <CardBestSeller image={ImageControll} discountPercent={40} />
        <CardBestSeller image={ImageControll} discountPercent={40} />
        <CardBestSeller image={ImageControll} discountPercent={40} />
        <CardBestSeller image={ImageControll} discountPercent={40} />
        <CardBestSeller image={ImageControll} discountPercent={40} />
      </CardCollectionBest>
      <div style={{ width: "272px" }}>
        <Chart item={TEST} />
      </div>
      <div style={{ width: "349px" }}>
        <CardNewProduct
          image={ImageControll}
          items={TEST}
          title={"Name of Excess Capacity"}
        />
      </div>
      <div style={{ width: "349px", height: "281px" }}>
        <CardImage image={ImageTest4} />
      </div>
      <CardBestBrand
        images={[
          `${ImageBrandalibaba}`,
          `${ImageBrandalibaba}`,
          `${ImageBrandArvan}`,
          `${ImageBrandalibaba}`,
          `${ImageBrandalibaba}`,
          `${ImageBrandalibaba}`,
          `${ImageBrandArvan}`,
        ]}
      />
      <ButtonIcon icon={IconTwoPerson} />
      <ButtonOutline title="REGISTER" />
      <ButtonSelect titleButton1={"Product"} titleButton2={"Excess Capacity"} />
      <div style={{ width: "90%" }}>
        <CardOfferHorizental
          image={ImageTest}
          status={"Finish Product"}
          description={
            "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
          }
          rate={4.2}
          country={"CHINA"}
          chart={TEST}
          amount={200}
          discountPercent={60}
        />
      </div>
      <div style={{ width: "50%" }}>
        <CardCalculate amount={1299.9} value={1} />
      </div>
      <div>
        <IncrementDecrementProduct
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <SingleProductPrice
          price={9999}
          days="25 Days"
          pairs="100 - 999"
          selected={false}
        />
        <PriceSummary list={list} />
        <Dashboard />
        <NeededCapacity />
        <GruopChat group={group} />
      </div>
    </div>
  );
}

export default Pages;
