import React from "react";
import { IconDelete, IconUpload, ImageComppanyProfile } from "../../assets";
export type IProps = {};

const ProfileHeaderImage: React.FC<IProps> = ({}: IProps) => {
  return (
    <div className="profile-header-image">
      <div className="background-Img">
        <img src={ImageComppanyProfile} alt="background" />
      </div>
      <div className="content d-flex flex-column align-items-center">
        <div className="d-flex flex-row align-items-center mb-4">
          <label
            className="me-3 d-flex align-items-center justify-content-center "
            htmlFor="imagePicker"
          >
            <img src={IconUpload} alt="upload" />
          </label>
          <input type={"file"} id="imagePicker" className="d-none" />
          <button>
            <img src={IconDelete} alt="delete" />
          </button>
        </div>
        <span>Profile Header Image(1920*296)</span>
      </div>
    </div>
  );
};

export default ProfileHeaderImage;
