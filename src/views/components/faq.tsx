import React, { memo } from "react";
import FAQCard from "./card_faq";

const FAQ = () => {
  return (
    <div className="p-4">
      <div className="row">
        <div className="text-faq">FAQ</div>
      </div>
      <div className="">
        <FAQCard open={true} />
      </div>
      <div className="mt-2">
        <FAQCard open={false} />
      </div>
    </div>
  );
};

export default memo(FAQ);
