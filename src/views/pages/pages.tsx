import { ImageControll, ImageTest2, ImageTest3, ImageTest4 } from "../../assets";
import { Chart } from "../components/chart";
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
} from "../components/components";

const TEST: Chart[] = [
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

      <div style={{ width: "360px" }}>
        <SelectComponent type={"one"} />
      </div>
      <Button title={"SEARCH"} />
      <SelectText value={"test"} />
      <CardProduct />
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
    </div>
  );
};

export default Pages;
