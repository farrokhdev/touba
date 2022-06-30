import React from "react";
import { IconDeleteWhite, IconEdit, IconLocationButton } from "../../assets";
export type IProps = {
  index: number;
  name: string;
  area: string;
};

const Location: React.FC<IProps> = ({ index, name, area }: IProps) => {
  return (
    <div className="location-item d-flex flex-row align-items-center justify-content-between">
      <span className="d-flex align-items-center justify-content-center">
        {index}
      </span>
      <span>{name}</span>
      <span>{area}</span>
      <div className="btn-container">
        <button>
          <img src={IconLocationButton} alt="location" />
        </button>
        <button>
          <img src={IconEdit} alt="edit" />
        </button>
        <button>
          <img src={IconDeleteWhite} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default Location;
