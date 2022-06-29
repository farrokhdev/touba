import { Component } from "react";
import ButtonAdd from "../components/button_add";
import UploadImage from "../components/upload_image";
import SummaryDashboard from "../components/summary_dashboard";
import ProductCart from "../components/product_cart";
import image_test from "../../assets/images/image-test.png";
import { CardOfferHorizontal } from "../components/cars_offer_horizontal";
import { ImageBrand } from "../../assets";

class PageTestComponents extends Component {
  TEST = [
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
  render() {
    return (
      <div className="mx-1">
        <ButtonAdd onClick={() => alert("add")} />
        <UploadImage title="Product Images" />
        <SummaryDashboard price1="18,251" price2="78,681" price3="3,524" />
        <ProductCart />
        <CardOfferHorizontal
          image={image_test}
          status={"exp"}
          description={
            "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
          }
          rate={4}
          country={"chin"}
          chart={this.TEST}
          amount={5}
          discountPercent={2}
        />
      </div>
    );
  }
}

export default PageTestComponents;
