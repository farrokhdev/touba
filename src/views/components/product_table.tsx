import React, { memo } from "react";
import bizhan from "../../assets/images/bizhan.png";
import chinchin from "../../assets/images/chinchin.png";
import zarmakaron from "../../assets/images/zarmakaron.png";
import pasta from "../../assets/images/pasta.png";
import { ButtonComponent } from "./button";
import iconG from "../../assets/icons/icon-girls.svg";
import IconLogoSingle from "../../assets/icons/icon-small-logo.svg";
import { IconStar, IconStartOutline } from "../../assets";

const productTable = () => {
  return (
    <div className="table-order">
      <table id="table-order" className="">
        <thead className="tbale-header">
          <tr>
            <th scope="col text-start">#</th>
            <th scope="col ">
              <div className="text-start">Product</div>
            </th>
            <th scope="col">Date</th>
            <th scope="col">Rate</th>
            <th scope="col text-start">
              <div className="text-start">Review</div>
            </th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="text-hashtag">5</div>
            </td>
            <td className="product">
              <div className="d-flex flex-row align-items-center">
                <img src={chinchin} alt="product" />
                <div className="d-flex flex-column align-items-start ms-2">
                  <span className="name">Pomegranate Juice...</span>
                  <span className="desk">Quanzhou Laren Trading Co</span>
                </div>
              </div>
            </td>
            <td>
              <div className="text-order-number">18 Aug 2021</div>
            </td>
            <td>
              <div className="rate">
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStartOutline} alt="star" className="mx-1" />
              </div>
            </td>
            <td>
              <div className="row d-flex align-items-center review">
                This product is realy amazing!This product is rea...
              </div>
            </td>

            <td>
              <div className="detail-btn">
                <ButtonComponent title="See Details" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="text-hashtag">4</div>
            </td>
            <td className="product">
              <div className="d-flex flex-row align-items-center">
                <img src={chinchin} alt="product" />
                <div className="d-flex flex-column align-items-start ms-2">
                  <span className="name">Pomegranate Juice...</span>
                  <span className="desk">Quanzhou Laren Trading Co</span>
                </div>
              </div>
            </td>
            <td>
              <div className="text-order-number">18 Aug 2021</div>
            </td>
            <td>
              <div className="rate">
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStartOutline} alt="star" className="mx-1" />
              </div>
            </td>

            <td>
              <div className="row d-flex align-items-center review">
                This product is realy amazing!This product is rea...
              </div>
            </td>

            <td>
              <div className="detail-btn">
                <ButtonComponent title="See Details" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="text-hashtag">3</div>
            </td>
            <td className="product">
              <div className="d-flex flex-row align-items-center">
                <img src={chinchin} alt="product" />
                <div className="d-flex flex-column align-items-start ms-2">
                  <span className="name">Pomegranate Juice...</span>
                  <span className="desk">Quanzhou Laren Trading Co</span>
                </div>
              </div>
            </td>
            <td>
              <div className="text-order-number">18 Aug 2021</div>
            </td>
            <td>
              <div className="rate">
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStartOutline} alt="star" className="mx-1" />
              </div>
            </td>

            <td>
              <div className="row d-flex align-items-center review">
                This product is realy amazing!This product is rea...
              </div>
            </td>

            <td>
              <div className="detail-btn">
                <ButtonComponent title="See Details" />
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td>
              <div className="text-hashtag">2</div>
            </td>
            <td className="product">
              <div className="d-flex flex-row align-items-center">
                <img src={chinchin} alt="product" />
                <div className="d-flex flex-column align-items-start ms-2">
                  <span className="name">Pomegranate Juice...</span>
                  <span className="desk">Quanzhou Laren Trading Co</span>
                </div>
              </div>
            </td>
            <td>
              <div className="text-order-number">18 Aug 2021</div>
            </td>
            <td>
              <div className="rate">
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStartOutline} alt="star" className="mx-1" />
              </div>
            </td>

            <td>
              <div className="row d-flex align-items-center review">
                This product is realy amazing!This product is rea...
              </div>
            </td>

            <td>
              <div className="detail-btn">
                <ButtonComponent title="See Details" />
              </div>
            </td>
          </tr>{" "}
          <tr>
            <td>
              <div className="text-hashtag">1</div>
            </td>
            <td className="product">
              <div className="d-flex flex-row align-items-center">
                <img src={chinchin} alt="product" />
                <div className="d-flex flex-column align-items-start ms-2">
                  <span className="name">Pomegranate Juice...</span>
                  <span className="desk">Quanzhou Laren Trading Co</span>
                </div>
              </div>
            </td>
            <td>
              <div className="text-order-number">18 Aug 2021</div>
            </td>
            <td>
              <div className="rate">
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStar} alt="star" className="mx-1" />
                <img src={IconStartOutline} alt="star" className="mx-1" />
              </div>
            </td>

            <td>
              <div className="row d-flex align-items-center review">
                This product is realy amazing!This product is rea...
              </div>
            </td>

            <td>
              <div className="detail-btn">
                <ButtonComponent title="See Details" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-center pagination mt-2">
        <div className="bigText">
          <div>1</div>
        </div>
        <div className="bigText">
          <div>2</div>
        </div>
        <div className="bigText">
          <div className="active">3</div>
        </div>
        <div className="bigText">
          <div>4</div>
        </div>
        <div className="bigText">
          <div className="">5</div>
        </div>
      </div>
    </div>
  );
};

export default memo(productTable);
