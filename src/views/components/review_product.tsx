import { memo, useState } from "react";

import chinchin from "../../assets/images/chinchin.png";

import { ButtonComponent } from "./button";

import { IconStar, IconStartOutline } from "../../assets";
import ReviewDetail from "./review_detail";

const ReviewProduct = () => {
  const [isShow, setShow] = useState(false);
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
            <th scope="col text-start">Review</th>
            <th scope="col ">Report</th>
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
              <div className="row d-flex flex-column align-items-start justicy-content-start review">
                <span className="desk text-start">Saber Noori:</span>
                This product is realy amazing!This product is rea...
              </div>
            </td>
            <td>
              <div className="text-center reportText">Report</div>
            </td>
            <td>
              <div className="detail-btn">
                <ButtonComponent
                  title="Options"
                  onClick={() => setShow(true)}
                />
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
              <div className="row d-flex flex-column align-items-start justicy-content-start review">
                <span className="desk text-start">Saber Noori:</span>
                This product is realy amazing!This product is rea...
              </div>
            </td>
            <td>
              <div className="reportText">Report</div>
            </td>
            <td>
              <div className="detail-btn">
                <ButtonComponent
                  title="Options"
                  onClick={() => setShow(true)}
                />
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
              <div className="row d-flex flex-column align-items-start justicy-content-start review">
                <span className="desk text-start">Saber Noori:</span>
                This product is realy amazing!This product is rea...
              </div>
            </td>
            <td>
              <div className="reportText">Report</div>
            </td>
            <td>
              <div className="detail-btn">
                <ButtonComponent
                  title="Options"
                  onClick={() => setShow(true)}
                />
              </div>
            </td>
          </tr>
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
              <div className="row d-flex flex-column align-items-start justicy-content-start review">
                <span className="desk text-start">Saber Noori:</span>
                This product is realy amazing!This product is rea...
              </div>
            </td>
            <td>
              <div className="reportText">Report</div>
            </td>
            <td>
              <div className="detail-btn">
                <ButtonComponent
                  title="Options"
                  onClick={() => setShow(true)}
                />
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
              <div className="row d-flex flex-column align-items-start justicy-content-start review">
                <span className="desk text-start">Saber Noori:</span>
                This product is realy amazing!This product is rea...
              </div>
            </td>
            <td>
              <div className="reportText">Report</div>
            </td>
            <td>
              <div className="detail-btn">
                <ButtonComponent
                  title="Options"
                  onClick={() => setShow(true)}
                />
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
      {isShow ? (
        <div className="review-detail ">
          <ReviewDetail setState={() => setShow(false)} />
        </div>
      ) : null}
    </div>
  );
};

export default ReviewProduct;
