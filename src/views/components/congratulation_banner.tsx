import React from "react";
import {
  ImageCongratulationBanner,
  ImageCongratulationBanner2,
} from "../../assets";

export type IProps = {
  activeTab: string;
};

const CongratulationBanner: React.FC<IProps> = ({ activeTab }: IProps) => {
  const percent = "60%";
  return activeTab === "Related Items" ? (
    <div className="congratulation-banner d-flex flex-row align-items-start justify-content-between">
      <div className="content-banner">
        <span>Congratulation</span>
        <p className="mt-3 mb-5">
          Your product is ready to publish, But, there are a few steps more to
          help your product be more saleable and reachable. If you complete the
          next steps too you can be sure your product has everything to be in
          best selling products!
        </p>
        <div className="d-flex flex-row align-items-center">
          <button className="green-btn me-4">Add New Product</button>
          <button className="outline-btn">Get back to dashboard</button>
        </div>
      </div>
      <div className="image-banner">
        <img src={ImageCongratulationBanner} alt="banner" />
      </div>
    </div>
  ) : (
    <div className="congratulation-banner d-flex flex-row align-items-start justify-content-between">
      <div className="content-banner d-flex flex-column align-items-start justify-content-between">
        <div>
          <span>Congratulation</span>
          <p className="mt-3 mb-5">
            Your product is ready to publish, But, there are a few steps more to
            help your product be more saleable and reachable. If you complete
            the next steps too you can be sure your product has everything to be
            in best selling products!
          </p>
          <div className="d-flex flex-row align-items-center">
            <button className="green-btn me-4">
              I want to complete prduct Information
            </button>
            <button className="outline-btn">Save & Publish</button>
          </div>
        </div>

        <div className="product-progress d-flex flex-column w-100">
          <div className="w-100 d-flex flex-row justify-content-between align-items-center">
            <span>Product Details</span>
            <span>60%</span>
          </div>
          <div className="product-progress-bar mt-4 w-100">
            <div style={{ width: `${percent}` }}></div>
          </div>
        </div>
      </div>
      <div className="image-banner">
        <img src={ImageCongratulationBanner2} alt="banner" />
      </div>
    </div>
  );
};

export default CongratulationBanner;
