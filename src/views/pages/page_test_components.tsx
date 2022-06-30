import { Component, useState } from "react";
import ButtonAdd from "../components/button_add";
import UploadImage from "../components/upload_image";
import SummaryDashboard from "../components/summary_dashboard";
import ProductCart from "../components/product_cart";
import image_test from "../../assets/images/image-test.png";
import { CardOfferHorizontal } from "../components/cars_offer_horizontal";
import { ImageBrand } from "../../assets";
import ActivityChart from "../components/activity_chart";
import MessageInput from "../components/message_input";
import { CompanyAddres } from "../components/company_address";
import DeleteImage from "../components/delete_image";
import MyCompanyNav from "../components/mycompany_nav";
import ProfileHeaderImage from "../components/profile_header_image";
import OrderHead from "../components/order_head";
import Location from "../components/location";
import CongratulationBanner from "../components/congratulation_banner";

interface IState {
  isShow: boolean;
  activeNav: number;
}
class PageTestComponents extends Component {
  state: IState = {
    isShow: false,
    activeNav: 4,
  };
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
        <ActivityChart
          datalist1={[
            50, 80, 250, 200, 500, 700, 100, 625, 145, 500, 1236, 522,
          ]}
          datalist2={[
            100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
          ]}
        />
        <MessageInput onClick={() => console.log("salam")} />
        <CompanyAddres
          address="Yanjialing Village, Tongji Office, Jimo District, Qingdao, Shandong,
          China 266000"
        />
        <button onClick={() => this.setState({ isShow: true })}>
          show delete image component
        </button>
        {this.state.isShow ? (
          <DeleteImage onClick={() => this.setState({ isShow: false })} />
        ) : null}
        <MyCompanyNav state={this.state.activeNav} />
        <ProfileHeaderImage />
        <OrderHead orderNumber={2334217651} client="Saber Noori" />
        <Location
          index={1}
          name="Bandar Abbas Office"
          area="BandarAbbas, Iran"
        />
        <div style={{ width: "1200px", height: "670px" }}>
          <CongratulationBanner activeTab="Other Details" />
        </div>
        <div style={{ width: "1200px", height: "670px" }} className="my-3">
          <CongratulationBanner activeTab="Related Items" />
        </div>
      </div>
    );
  }
}

export default PageTestComponents;
