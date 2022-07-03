import React from "react";
import {
  IconDelete,
  IconUndo,
  IconUpload,
  ImageComppanyProfile,
} from "../../assets";
export type IProps = {
  orderNumber: number;
  client: string;
};

const OrderHead: React.FC<IProps> = ({ orderNumber, client }: IProps) => {
  return (
    <div className="order-head d-flex flex-row align-items-center justify-content-between">
      <div className="detail d-flex flex-row align-items-center">
        <div className="d-flex flex-row align-items-center">
          <span className="title">Order Number: </span>
          <span className="desk ms-2">{orderNumber}</span>
        </div>
        <span className="title px-5">February 26, 2022</span>
        <div className="d-flex flex-row align-items-center">
          <span className="title">Client: </span>
          <span className="desk ms-2">{client}</span>
        </div>
      </div>
      <button>
        Back
        <img src={IconUndo} alt="undo" className="ms-1" />
      </button>
    </div>
  );
};

export default OrderHead;
