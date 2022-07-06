import React, { memo } from "react";
import FAQCard from "./card_faq";

const FAQ = () => {
  return (
    <div className="p-4">
      <div className="row">
        <div className="text-faq">FAQ</div>
      </div>
      <div className="">
        <FAQCard open={true} onClick={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </div>
      <div className="mt-2">
        <FAQCard open={false} onClick={function (): void {
          throw new Error("Function not implemented.");
        } } />
      </div>
    </div>
  );
};

export default memo(FAQ);
