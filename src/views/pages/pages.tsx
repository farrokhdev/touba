import { ImageControll, ImageTest2, ImageTest3 } from "../../assets";
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
  CardFAQ,
  CardLike,
  ComponentBinaRazan
} from "../components/components";

function Pages() {
  return (
    <div>
      
<ComponentBinaRazan/>
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
    </div>
  );
}

export default Pages;
