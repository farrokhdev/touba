import React from "react";
import { IconAddCircle } from "../../assets";

export type IProps = {
  onClick(): void;
};

const ButtonAdd: React.FC<IProps> = ({ onClick }) => {
  return (
    <button
      className="button-add d-flex align-items-center justify-content-center"
      onClick={onClick}
    >
      <img src={IconAddCircle} alt="add" />
    </button>
  );
};

export default ButtonAdd;
