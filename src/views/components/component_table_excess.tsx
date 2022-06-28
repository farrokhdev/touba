import React, { memo } from "react";
import bizhan from "../../assets/images/bizhan.png";
import chinchin from "../../assets/images/chinchin.png";
import zarmakaron from "../../assets/images/zarmakaron.png";
import pasta from "../../assets/images/pasta.png";
import { ButtonComponent } from "./button";
import iconG from "../../assets/icons/icon-girls.svg";
import IconLogoSingle from "../../assets/icons/icon-small-logo.svg";
import IconRani from "../../assets/icons/icon-rani.svg";
interface Props {
  mode: string;
}
const ComponentTableExcess = ({ mode }: Props) => {
  return (
    <div className="table-order">
      <table id="table-order" className="">
        <thead className="tbale-header">
          <tr>
            <th scope="col text-end">#</th>
            <th scope="col">Order Number</th>
            <th scope="col">Date</th>
            <th scope="col" >Amount & Time</th>
            <th scope="col">Status</th>
            <th scope="col text-start">
            {mode == "Client" && <div className="text-center">Client</div>} 
         {mode == "Supplier" && <div className="text-start">Supplier</div>}               </th>
            <th scope="col">
              <div className="text-start">Excess Capacity</div>
            </th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="text-hashtag-active">5</div>
            </td>
            <td>
              <div className="text-order-number w-100">6542313244555</div>
            </td>
            <td>
              <div className="text-order-number">18 Aug 2021</div>
            </td>
            <td>
              <div className="text-order-number">50 Tons 3 Month</div>
            </td>
            <td>
              <div className="text-status">Rejected</div>
            </td>
            <td>
            {mode == "Supplier" && (
                <div className="row d-flex align-items-center">
                  <div className="item-Logo col-2">
                    <img src={IconLogoSingle} alt="logo" />
                  </div>
                  <div className="col-8 text-start">
                    <div className="text-order-number text-start">
                      Quanzhou Laren Trading Co., Ltd. china
                    </div>
                  </div>
                </div>
              )}
              {mode == "Client" && (
                <div className="text-client">Saber Noori china</div>
              )}
            </td>
            <td>
              <div className="row d-flex align-items-center">
                <div className="item-Logo col-3">
                  <img src={IconRani} alt="logo" />
                </div>
                <div className="col-9 text-start">
                  <div className="text-order-number text-start">
                    Pomegranate Juice...
                  </div>
                </div>
              </div>
            </td>

            <td>
              <div>
                <ButtonComponent title="Conversation" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="text-hashtag">4</div>
            </td>
            <td>
              <div className="text-order-number">65423132445555</div>
            </td>
            <td>
              <div className="text-order-number">18 Aug 2021</div>
            </td>
            <td>
              <div className="text-order-number">50 Tons 3 Month</div>
            </td>
            <td>
              <div className="text-status text-danger">Pending</div>
            </td>
            <td>
            {mode == "Supplier" && (
                <div className="row d-flex align-items-center">
                  <div className="item-Logo col-2">
                    <img src={IconLogoSingle} alt="logo" />
                  </div>
                  <div className="col-8 text-start">
                    <div className="text-order-number text-start">
                      Quanzhou Laren Trading Co., Ltd. china
                    </div>
                  </div>
                </div>
              )}
              {mode == "Client" && (
                <div className="text-client">Saber Noori china</div>
              )}
            </td>
            <td>
              <div className="row d-flex align-items-center">
                <div className="item-Logo col-3">
                  <img src={IconRani} alt="logo" />
                </div>
                <div className="col-9 text-start">
                  <div className="text-order-number text-start">
                    Pomegranate Juice...
                  </div>
                </div>
              </div>
            </td>

            <td>
              <div>
                <ButtonComponent title="Conversation" />
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

export default memo(ComponentTableExcess);
