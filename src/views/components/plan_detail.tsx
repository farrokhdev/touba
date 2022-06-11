import React from "react";
import { IconTickSquare } from "../../assets";

export type IProps = {
  list: any;
};

const PlanDetail: React.FC<IProps> = ({ list }) => {
  return (
    <div className="d-flex flex-column align-items-center plan-Detail ">
      <div
        className={
          list.offer
            ? "offer-Plan d-flex flex-column align-items-center justify-content-between"
            : "plan-Price d-flex flex-column align-items-center justify-content-between"
        }
      >
        <div>
          <div className="d-flex flex-row align-items-center justify-content-between price">
            <span className=" d-flex flex-column align-items-center justify-content-center">
              $
            </span>
            <span className=" d-flex flex-column align-items-center justify-content-center">
              {list.price}
            </span>
          </div>
          <span className="plan-Time">Annually</span>
        </div>
        <div className="buy-Pakage d-flex flex-column align-items-center">
          <span>{list.plan}</span>
          <button>get started</button>
        </div>
      </div>
      <span className=" d-flex flex-row align-items-center justify-content-center">
        {list.one === "Unlimited" ? <img src={IconTickSquare} /> : null}
        {list.one}
      </span>
      <span className=" d-flex flex-row align-items-center justify-content-center">
        {list.two === "Unlimited" ? <img src={IconTickSquare} /> : null}
        {list.two}
      </span>
      <span className=" d-flex flex-row align-items-center justify-content-center">
        {list.three === "Unlimited" ? <img src={IconTickSquare} /> : null}

        {list.three}
      </span>
      <span className=" d-flex flex-row align-items-center justify-content-center">
        {list.four === "Unlimited" ? <img src={IconTickSquare} /> : null}

        {list.four}
      </span>
      <span className=" d-flex flex-row align-items-center justify-content-center">
        {list.five === "Unlimited" ? <img src={IconTickSquare} /> : null}

        {list.five}
      </span>
      <span className=" d-flex flex-row align-items-center justify-content-center">
        {list.six === "Unlimited" ? <img src={IconTickSquare} /> : null}

        {list.six}
      </span>
      <span className=" d-flex flex-row align-items-center justify-content-center">
        {list.seven === "Unlimited" ? <img src={IconTickSquare} /> : null}

        {list.seven}
      </span>
    </div>
  );
};

export default PlanDetail;
