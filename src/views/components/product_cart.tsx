import { memo, useState } from "react";
import { IconDelete, IconStar, ImageLadan } from "../../assets";
import IncrementDecrementProduct from "./increment_decrement_product";

interface IProps {}
const ProductCart = ({}: IProps) => {
  const [quantity, setQuantity] = useState(100);
  return (
    <div className="product-cart d-flex flex-row align-items-center justify-content-between">
      <div className="product-detail d-flex flex-row align-items-center">
        <img src={ImageLadan} alt="product" className="product-img" />
        <div className="d-flex flex-column align-items-start">
          <span className="name my-2 ms-3">
            Product Name Here Product Name{" "}
          </span>
          <span className="desk my-2 ms-3">
            Quanzhou Laren Trading Co., Ltd.(
            <img src={IconStar} alt="star" />
            4.2)
          </span>
          <div className="delivery my-2 ms-3">
            <span>Delivery time estimation:</span>
            <span> 15 Days</span>
          </div>
        </div>
      </div>
      <div className="btn-container d-flex flex-column align-items-end justify-content-between h-100">
        <img src={IconDelete} alt="delet" />
        <div className="d-flex flex-row align-items-center price-info">
          <span className="mx-2 price">$4</span>
          <span className="per me-4">Per Pair</span>
          <span className="px-3 price2">$4</span>
          <IncrementDecrementProduct
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCart);
