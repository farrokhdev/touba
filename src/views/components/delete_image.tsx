import React from "react";
import { IconClose, IconDeleteWhite } from "../../assets";

export type IProps = {
  onClick?(): void;
  onDelete(): void;
};

const DeleteImage: React.FC<IProps> = ({ onClick, onDelete }: IProps) => {
  return (
    <div className="delete-image">
      <div className="content">
        <div className="head d-flex flex-row align-items-center justify-content-between">
          <span>Delete Image</span>
          <button
            className="d-flex align-items-center justify-content-center"
            onClick={onClick}
          >
            <img src={IconClose} alt="close" />
          </button>
        </div>
        <div className="body">
          <span>Are you sure you want to delete this image?</span>
          <div className="even-btn-container mt-4">
            <button onClick={onClick}>No, Nevermind</button>
            <button onClick={onDelete}>
              <img src={IconDeleteWhite} alt="delete" className="me-2" />
              Yes remove it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteImage;
