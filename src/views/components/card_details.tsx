import React, { memo } from "react";
import shose1 from "../../assets/images/Rectangle1421.png";
import shose2 from "../../assets/images/Rectangle1422.png";
import shose3 from "../../assets/images/Rectangle1423.png";
import shose4 from "../../assets/images/Rectangle1424.png";
import Specifications from "./specifications";
import Packaging from "./packaging";
import FAQ from "./faq";
import Customers from "./customers";
import CommentCard from "./card_comment";

const CardDetails = () => {
  return (
    <div className="detailCard">
      <div className="detailBorder">
        <div className="tabs row px-4 ">
          <div className="tabActive col-2 text-center   ">
            <p>Description</p>
          </div>
       
          <div className={` col-2  text-center bold-text`}>
            <p>Specifications</p>
          </div>
          <div className={` col-3  text-center bold-text`}>
            <p>Packaging & shipping</p>
          </div>
          <div className={` col-3  text-center bold-text`}>
            <p>Customers Review</p>
          </div>
          <div className={` col-1  text-center bold-text`}>
            <p>Faq</p>
          </div>
        </div>
        <div className="p-3">
          <div className="row ">
            <div className="text-detail">
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
              autem vel eum iriure dolor in hendrerit in vulputate velit esse
              molestie consequat, vel illum dolore eu feugiat nulla facilisis at
              vero eros et accumsan et iusto odio dignissim qui blandit praesent
              luptatum zzril delenit augue duis dolore te feugait nulla
              facilisi.
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6 p-2">
              <img style={{ width: "450px", height: "353px" }} src={shose1} />
            </div>
            <div className="col-6 p-2">
              <img style={{ width: "450px", height: "353px" }}  src={shose2} />
            </div>
          </div>
          <div className="row mt-2">
            <div className="text-detail">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis aute
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6 p-2">
              <img style={{ width: "450px", height: "353px" }}  src={shose3} />
            </div>
            <div className="col-6 p-2">
              <img style={{ width: "450px", height: "353px" }}  src={shose4} />
            </div>
          </div>
        </div>
      </div>
      <div className="detailBorder">
        <Specifications />
      </div>
      <div className="py-3 detailBorder">
        <Packaging />
      </div>
      <div className="py-3 detailBorder">
        <FAQ />
      </div>
      <div className="">
        <Customers />
      </div>
      <div className=" ">
        <CommentCard />
      </div>
    </div>
  );
};

export default memo(CardDetails);
