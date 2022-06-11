import React, { memo } from "react";
import { CardProduct } from "./card_product";
import image_test from "../../assets/images/image-test.png";

const ContentRelated = () => {
  const TEST = [
    { name: "JAN", size: 20 },
    { name: "FEB", size: 30 },
    { name: "MAR", size: 40 },
    { name: "APR", size: 50 },
    { name: "MAY", size: 60 },
    { name: "JUN", size: 70 },
    { name: "JUL", size: 80 },
    { name: "AUG", size: 90 },
    { name: "SEP", size: 100 },
    { name: "OCT", size: 20 },
    { name: "NOV", size: 20 },
    { name: "DEC", size: 20 },
  ];
  return (
    <div>
      <div className="row">
        <div className="col-6 p-2">
          <div className="border-related ">
            <CardProduct
              image={image_test}
              status={"exp"}
              description={
                "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
              }
              chart={TEST}
              amount={5}
            />
          </div>
        </div>
        <div className="col-6 p-2">
          <div className="border-related ">
            <CardProduct
              image={image_test}
              status={"exp"}
              description={
                "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
              }
              chart={TEST}
              amount={5}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 p-2">
          <div className="border-related ">
            <CardProduct
              image={image_test}
              status={"exp"}
              description={
                "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
              }
              chart={TEST}
              amount={5}
            />
          </div>
        </div>
        <div className="col-6 p-2">
          <div className="border-related ">
            <CardProduct
              image={image_test}
              status={"exp"}
              description={
                "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
              }
              chart={TEST}
              amount={5}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 p-2">
          <div className="border-related ">
            <CardProduct
              image={image_test}
              status={"exp"}
              description={
                "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
              }
              chart={TEST}
              amount={5}
            />
          </div>
        </div>
        <div className="col-6 p-2">
          <div className="border-related ">
            <CardProduct
              image={image_test}
              status={"exp"}
              description={
                "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
              }
              chart={TEST}
              amount={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ContentRelated);
