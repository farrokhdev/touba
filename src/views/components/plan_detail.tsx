import React from "react";

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
          <div className="d-flex flex-row align-items-center justify-content-center price ">
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
      <span className=" d-flex flex-column align-items-center justify-content-center">
        <img src="" />
        {list.one}
      </span>
      <span className=" d-flex flex-column align-items-center justify-content-center">
        {list.two}
      </span>
      <span className=" d-flex flex-column align-items-center justify-content-center">
        {list.three}
      </span>
      <span className=" d-flex flex-column align-items-center justify-content-center">
        {list.four}
      </span>
      <span className=" d-flex flex-column align-items-center justify-content-center">
        {list.five}
      </span>
      <span className=" d-flex flex-column align-items-center justify-content-center">
        {list.six}
      </span>
      <span className=" d-flex flex-column align-items-center justify-content-center">
        {list.seven}
      </span>
    </div>
  );
};

export default PlanDetail;
