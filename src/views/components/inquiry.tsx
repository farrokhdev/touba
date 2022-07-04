import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  IconAddCircle,
  IconFolder,
  IconLogoInquiry,
  ImageChina,
} from "../../assets";
import Dashboard from "../layout/dashboard/dashobord";
import { CardCalculate } from "./card_calculate";
import { QualityStar } from "./components";
import NeededCapacity from "./needed_capacity";
import ProductDetail from "./product-detail";
import Raiting from "./rating";
import SingleProductPrice from "./single_product_price";

export type IProps = {};

const Inquiry: React.FC<IProps> = () => {
  const [isSelect, setSelect] = useState(0);
  const location = useLocation().pathname;
  return (
    <div className="d-flex flex-column align-items-start inquiry mx-auto">
      {location.includes("excess") ? (
        <>
          <ProductDetail
            name="Product Name Here Product Name "
            numOfRating="12,514"
            rate={4.2}
          />
          <div className="w-100 d-flex flex-row align-items-center justify-content-between company-Info">
            <div className="d-flex flex-row align-items-center">
              <img src={IconLogoInquiry} alt="iconLogo" />
              <div className="d-flex flex-column align-items-start company-Name">
                <span>Quanzhou Laren Trading Co., Ltd.</span>
                <span>Trading Company</span>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div className="d-flex flex-column align-items-end company-Region">
                <span>Region:</span>
                <span> China</span>
              </div>
              <img src={ImageChina} alt="china" />
            </div>
          </div>
          <div className="w-100 pt-4">
            <div className="input-Contact-Container w-100">
              <label>Inquiry Title</label>
              <input placeholder="Inquiry About Pomegranate Juice Pet Bottle" />
            </div>
          </div>
          <div className="w-100 d-flex flex-row align-items-center justify-content-between py-4">
            <div className="input-Contact-Container w-100">
              <label>Services</label>
              <select>
                <option>December</option>
              </select>
            </div>
            <NeededCapacity />
            <img src={IconAddCircle} alt="add" className="addIcon" />
          </div>
          <div className="w-100 d-flex flex-row align-items-center justify-content-between">
            <div className="input-Contact-Container w-100">
              <label>Services</label>
              <select>
                <option>November</option>
              </select>
            </div>
            <NeededCapacity />
            <img src={IconAddCircle} alt="add" className="addIcon" />
          </div>
          <div className="input-Contact-Container py-4 w-100">
            <label>Enter Your Message</label>
            <textarea />
          </div>
          <div className="w-100 d-flex flex-row align-items-center justify-content-between select-File-Container">
            <div className="d-flex flex-row align-items-center file-Info">
              <img src={IconFolder} alt="folder" />
              <span>Sample.PDF</span>
            </div>
            <div className="selectFile">
              <label htmlFor="selectFile">choose file</label>
              <input type="file" id="selectFile" />
            </div>
          </div>
          <div className="upload-Progress mt-3">
            <div></div>
          </div>
          <button className="button-component Btn my-3 d-flex align-items-center justify-content-center">
            <span className="button-component-text h-100 d-flex align-items-center justify-content-center">
              MAKE AN ENQUIRY
            </span>
          </button>
        </>
      ) : (
        <>
          <ProductDetail
            name="Product Name Here Product Name "
            numOfRating="12,514"
            rate={4.2}
          />
          <div className="my-3 px-2 w-100">
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
          <button
            className={isSelect ? "button-component my-5 mx-2 " : "d-none"}
          >
            <span className="button-component-text">COMPLETE ORDER</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Inquiry;
