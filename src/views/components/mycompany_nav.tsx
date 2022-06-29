import React from "react";
export type IProps = {
  state: number;
};

const MyCompanyNav: React.FC<IProps> = ({ state }: IProps) => {
  return (
    <div className="mycompany-nav d-flex flex-row align-items-center justify-content-between">
      <div className="nav-button">
        <button className={state === 1 ? "active me-5" : "me-5"}>
          Description
        </button>
        <button className={state === 2 ? "active me-5" : "me-5"}>
          Specifications
        </button>
        <button className={state === 3 ? "active me-5" : "me-5"}>
          Certificates
        </button>
        <button className={state === 4 ? "active" : ""}>Faq</button>
      </div>
      <button className="view-btn">View as visitor</button>
    </div>
  );
};

export default MyCompanyNav;
