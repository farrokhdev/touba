import React, { useState } from "react";

interface Props {
  onActive(id: number): void;
  showButton: boolean;
  activeBorder: boolean;
}

const MyCompanyNav = ({ onActive, showButton, activeBorder }: Props) => {

  const [activeTab, setActiveTab] = useState(1);

  function handleActiveTab(id: number) {
    setActiveTab(id);
    onActive(id);
  }

  return (
    <div 
    className={
      activeBorder === true ? 
      "mycompany-nav d-flex flex-row align-items-center justify-content-between border-bottom w-100":
      "mycompany-nav d-flex flex-row align-items-center justify-content-between w-100 h-100"
      }>
      <div className="nav-button">
        <button className={activeTab === 1 ? "active me-5" : "me-5"} onClick={() => handleActiveTab(1)}>
          Description
        </button>
        <button className={activeTab === 2 ? "active me-5" : "me-5"} onClick={() => handleActiveTab(2)}>
          Specifications
        </button>
        <button className={activeTab === 3 ? "active me-5" : "me-5"} onClick={() => handleActiveTab(3)}>
          Certificates
        </button>
        <button className={activeTab === 4 ? "active" : ""} onClick={() => handleActiveTab(4)}>Faq</button>
      </div>
      {showButton === true ? (
        <button className="outline-btn me-3">View as visitor</button>
      ) : (null)}
    </div>
  );
};

export default MyCompanyNav;
