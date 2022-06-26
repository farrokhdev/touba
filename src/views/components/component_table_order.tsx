import React, { memo } from "react";
import bizhan from "../../assets/images/bizhan.png";
import chinchin from "../../assets/images/chinchin.png";
import zarmakaron from "../../assets/images/zarmakaron.png";
import pasta from "../../assets/images/pasta.png";
import { ButtonComponent } from "./button";
import iconG from "../../assets/icons/icon-girls.svg";
import IconLogoSingle from "../../assets/icons/icon-small-logo.svg";

const ComponentTableORder = () => {
  return (
    <div className="table-order">
      <table id="table-order" className="">
        <thead className="tbale-header">
          <tr>
            <th scope="col text-end">#</th>
            <th scope="col">Order Number</th>
            <th scope="col">Date</th>
            <th scope="col">Payment Amount</th>
            <th scope="col">Status</th>
            <th scope="col"><div className="text-start">Supplier</div></th>
            <th scope="col">Product</th>
            <th scope="col">Payment Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="text-hashtag-active">5</div>
            </td>
            <td>
              <div className="text-order-number">65423132445555</div>
            </td>
            <td>
              <div className="text-order-number">18 Aug 2021</div>
            </td>
            <td>
              <div className="text-payment">$212</div>
            </td>
            <td>
              <div className="text-status">Waiting to send</div>
            </td>
            <td>
            <div className="row d-flex align-items-center">
                <div className="item-Logo col-2">
                  <img src={IconLogoSingle} alt="logo" />
                </div>
                <div className="col-8 text-start">
                  <div className="text-order-number text-start">
                    Quanzhou Laren Trading Co., Ltd. china
                  </div>
                </div>
              </div>            </td>
            <td>
              <div className="row">
                <div className="col">
                  <img height={"48px"} width={"48px"} src={chinchin} />
                </div>
                <div className="col">
                  <img height={"48px"} width={"48px"} src={pasta} />
                </div>
                <div className="col">
                  <img height={"48px"} width={"48px"} src={bizhan} />
                </div>
                <div className="produt-box-number col">
                  {" "}
                  <div className="">+3</div>
                </div>
              </div>
            </td>

            <td>
              <div>
                <ButtonComponent title="See Details" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="text-hashtag">4</div>
            </td>
            <td>
              <div className="text-order-number">65423132445</div>
            </td>
            <td>
              <div className="text-order-number">18 Aug 2021</div>
            </td>
            <td>
              <div className="text-payment">$212</div>
            </td>
            <td>
              <div className="text-status">Waiting to send</div>
            </td>
            <td>
            <div className="row d-flex align-items-center">
                <div className="item-Logo col-2">
                  <img src={IconLogoSingle} alt="logo" />
                </div>
                <div className="col-8 text-start">
                  <div className="text-order-number text-start">
                    Quanzhou Laren Trading Co., Ltd. china
                  </div>
                </div>
              </div>            </td>
            <td>
              <div className="row">
                <div className="col">
                  <img height={"48px"} width={"48px"} src={chinchin} />
                </div>
                <div className="col">
                  <img height={"48px"} width={"48px"} src={pasta} />
                </div>
                <div className="col">
                  <img height={"48px"} width={"48px"} src={bizhan} />
                </div>
                <div className="produt-box-number col">
                  {" "}
                  <div className="">+3</div>
                </div>
              </div>
            </td>

            <td>
              <div>
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

export default memo(ComponentTableORder);
