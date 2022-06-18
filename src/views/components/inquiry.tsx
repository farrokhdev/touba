import React, { useState } from "react";
import { ImageTest } from "../../assets";
import { CardCalculate } from "./card_calculate";
import { QualityStar } from "./components";
import ProductDetail from "./product-detail";
import Raiting from "./rating";
import SingleProductPrice from "./single_product_price";

export type IProps = {};

const Inquiry: React.FC<IProps> = () => {
  const [isSelect, setSelect] = useState(0);
  return (
    <div className="d-flex flex-column align-items-start inquiry mx-auto">
      <ProductDetail
        name="Product Name Here Product Name "
        numOfRating="12,514"
        rate={4.2}
      />
      <div className="my-3 px-2 ">
        <CardCalculate amount={100} value={1299} />
      </div>
      <div className="offer-Price px-2">
        <SingleProductPrice
          price="1299.9"
          pairs="30 - 99"
          days="15 Days"
          clickHandler={() => setSelect(1)}
          selected={isSelect === 1 ? true : false}
        />
        <SingleProductPrice
          price="1049.9"
          pairs="100 - 999"
          days="25 Days"
          clickHandler={() => setSelect(2)}
          selected={isSelect === 2 ? true : false}
        />
        <SingleProductPrice
          price="999.9"
          pairs="1000 - 4999"
          days="25 Days"
          clickHandler={() => setSelect(3)}
          selected={isSelect === 3 ? true : false}
        />
        <SingleProductPrice
          price="899.9"
          pairs=">=5000"
          days="To be negotiated"
          clickHandler={() => setSelect(4)}
          selected={isSelect === 4 ? true : false}
        />
      </div>
      <button className={isSelect ? "button-component my-5 mx-2 " : "d-none"}>
        <span className="button-component-text">COMPLETE ORDER</span>
      </button>
    </div>
  );
};

export default Inquiry;
