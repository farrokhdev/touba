import React, { memo } from "react";

const ComponentCompanyModal = () => {
  return (
    <div className=" component-company-modal">
      <div className="d-flex align-items-center justify-content-between border-bottom p-3">
        <div className="bold-text">Company Introduction</div>
        <div className="image-circle">
          <span>&times;</span>
        </div>
      </div>
      <div className="p-3 border-bottom">
        <div className="fieldset-box">
          <h1 className="border-text">Introduction</h1>
          <div className="p-3 text-content">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<br/><br/>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </div>
        </div>
      </div>
      <div className="p-3 d-flex">
        <div className="p-4 "><button className="btn-save-change">Save Changes</button></div>
        <div className="p-4"><button className="btn-cancle">Save Changes</button></div>

      </div>
    </div>
  );
};

export default memo(ComponentCompanyModal);
