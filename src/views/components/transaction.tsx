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
const Transaction = ({ mode }: Props) => {
  return (
    <div className="table-order">
      <table id="table-order" className="">
        <thead className="tbale-header">
          <tr>
            <th scope="col text-end">#</th>
            <th scope="col">Tracking Code</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
````            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="text-hashtag">5</div>
            </td>
            <td>
              <div className="text-order-number w-100">6542313244555</div>
            </td>
            <td>
              <div className="text-order-number">18 Aug 2021 - 14:15</div>
            </td>
            <td>
              <div className="text-order-number">$212 </div>
            </td>
            <td>
              <div className="text-status">Invoice</div>
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

export default memo(Transaction);
