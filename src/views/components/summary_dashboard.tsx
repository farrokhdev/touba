import { memo } from "react";
import {
  IconArrow,
  IconArrowRightBlack,
  IconInfo,
  IconPaper,
  IconTick,
} from "../../assets";

interface IProps {
  price1: string;
  price2: string;
  price3: string;
}
const SummaryDashboard = ({ price1, price2, price3 }: IProps) => {
  return (
    <div className="summary-dashboard d-flex flex-row align-items-center justify-content-between">
      <div className="d-flex flex-row align-items-center summary-item">
        <img src={IconTick} alt="tick" />
        <div className="d-flex flex-column align-items-start detail">
          <span className="name">
            Payment Processing
            <img src={IconArrow} />
          </span>
          <div className="price">
            <span>$</span>
            <span>{price1}</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center summary-item">
        <img src={IconInfo} alt="info" />
        <div className="d-flex flex-column align-items-start detail">
          <span className="name">
            Not yet matched to order
            <img src={IconArrow} />
          </span>
          <div className="price">
            <span>$</span>
            <span>{price2}</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center summary-item">
        <img src={IconPaper} alt="paper" />
        <div className="d-flex flex-column align-items-start detail">
          <span className="name">
            Refund processing
            <img src={IconArrow} />
          </span>
          <div className="price">
            <span>$</span>
            <span>{price3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SummaryDashboard);
