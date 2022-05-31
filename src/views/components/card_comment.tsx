import React, { memo } from "react";
import user from "../../assets/images/user.png";
import orangeStar from "../../assets/images/orangeStar.png";

const CommentCard = () => {
  return (
    <div className="p-4">
      <div className="quality-card">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-9">
            <div className="row">
              <div className="col-1">
                <div className="user-circle">
                  <img src={user} />
                </div>
              </div>
              <div className="col-4">
                <div className="boldText">Name Here</div>
                <div className="smalText">12.01.2022 from China</div>
              </div>
            </div>
          </div>
          <div className="col-3 ">
            <div className="row">
              <div className="col-6 border-right">
                <img src={orangeStar} />
                <img src={orangeStar} />
                <img src={orangeStar} />
                <img src={orangeStar} />

                <img src={orangeStar} />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 comment-more">
          <div className="smalText ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis aute
          </div>
        </div>
        <div className="row opacity-comments">
        </div>
        <div className="row mt-4">
            <div className="more text-center">Show More</div>
        </div>
      </div>
    </div>
  );
};

export default memo(CommentCard);
