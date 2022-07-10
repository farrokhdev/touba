import React from "react";
import { IconImage } from "../../assets";

export type IProps = {
  title: string;
};

const UploadImage: React.FC<IProps> = ({ title }) => {
  return (
    <div className="upload-image h-100 w-100 ">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img src={IconImage} alt="image" />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default UploadImage;
