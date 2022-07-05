import React, { useState } from "react";

interface Props {
  onActive(id: number): void;
}

const MyCompanyNav = ({ onActive }: Props) => {

  const [activeTab, setActiveTab] = useState(1);

  function handleActiveTab (id: number) {
    setActiveTab(id);
    onActive(id);
  }

  return (
    <div className="mycompany-nav d-flex flex-row align-items-center justify-content-between">
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
      <button className="outline-btn">View as visitor</button>
    </div>
  );
};

export default MyCompanyNav;
