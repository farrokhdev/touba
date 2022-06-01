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
  ComponentBinaRazan
} from "../components/components";
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
]

function Pages() {
  return (
    <div>
      <TopNav />
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
        <CardNewProduct image={ImageControll} items={TEST} title={"Name of Excess Capacity"} />
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
          `${ImageBrandArvan}`
        ]}
      />
      <ButtonIcon icon={IconTwoPerson} />
      <ButtonOutline title="REGISTER" />
      <ButtonSelect
        titleButton1={"Product"}
        titleButton2={"Excess Capacity"}
      />
      <div style={{ width: "90%" }}>
        <CardOfferHorizental
          image={ImageTest}
          status={"Finish Product"}
          description={"Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"}
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
    </div>
  );
}

export default Pages;
