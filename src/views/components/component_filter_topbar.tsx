import React, { memo } from "react";

const ComponentFilterTopbar = () => {
  return (
    <div className="d-flex component-filter-topbar align-items-center">
      <div>
        <button className="button-active py-3 px-4">All</button>
      </div>
      <div>
        <button className="button py-3 px-4">Finish Product</button>
      </div>
      <div>
        <button className="button py-3 px-4">Raw materials</button>
      </div>
      <div>
        <button className="button py-3 px-4">Packaging</button>
      </div>
      <div>
        <button className="button py-3 px-4">Production Machinery</button>
      </div>
      <div>
        <button className="button py-3 px-4">Logestic resources </button>
      </div>
      <div>
        <button className="button py-3 px-4">Human Resources </button>
      </div>
      <div>
        <button className="button py-3 px-4">Other</button>
      </div>
    </div>
  );
};

export default memo(ComponentFilterTopbar);
