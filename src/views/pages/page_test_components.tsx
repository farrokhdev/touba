import { Component } from "react";
import {
  IconCalling,
  IconDanger,
  IconShop,
  ImageJuicer,
  ImageManFlying,
  ImageManWithBox,
  ImageTest,
} from "../../assets";
import ActivityChart from "../components/activity_chart";
import ButtonAdd from "../components/button_add";
import { CardOfferHorizontal } from "../components/cars_offer_horizontal";
import { CompanyAddres } from "../components/company_address";
import {
  BannerCongratulations,
  BannerLetsStart,
  Calendar,
  CardOverall,
  CardProductGroupTitle,
  ChartDoughnut,
  ChartSale,
  ComponentBasicInformation,
  ComponentTextArea,
  ImageArrow,
  Location,
  ModalCompany,
  ProductCart,
  SelectComponent,
  SelectComponentDouble,
  SummaryDashboard,
  TableTransaction,
  TextIconVertical,
  TextIconVerticalDashboard,
} from "../components/components";
import CongratulationBanner from "../components/congratulation_banner";
import DeleteImage from "../components/delete_image";
import ItemProfile from "../components/item_profile";
import MessageInput from "../components/message_input";
import MyCompanyNav from "../components/mycompany_nav";
import OrderHead from "../components/order_head";
import ProfileHeaderImage from "../components/profile_header_image";
import { SideNavItems } from "../components/side_nav_items";
import UploadImage from "../components/upload_image";

const TEST_NAV_ITEM = [
  {
    title: "Group Title 1",
    time: "2 MINS",
    notification: 0,
    id: 1,
  },
  {
    title: "Group Title 2",
    notification: 10,
    icon: `${IconCalling}`,
    id: 2,
  },
  {
    title: "Group Title 3",
    time: "2 MINS",
    notification: 0,
    id: 3,
  },
  {
    title: "Group Title 4",
    id: 4,
  },
];

const DROPDOWN = [
  { name: "link1", id: 1 },
  { name: "link2", id: 2 },
  { name: "link3", id: 3 },
  { name: "link4", id: 4 },
  { name: "link5", id: 5 },
  { name: "link6", id: 6 },
  { name: "link7", id: 7 },
  { name: "link8", id: 8 },
  { name: "link9", id: 9 },
];

const TABLE = [
  {
    id: 1,
    code: 65423132445,
    date: "18 Aug 2021 - 14:15",
    amount: 1850,
    detail: "INVOICE",
  },
  {
    id: 2,
    code: 65423132445,
    date: "18 Aug 2021 - 14:15",
    amount: 36214,
    detail: "INVOICE",
  },
  {
    id: 3,
    code: 65423132445,
    date: "18 Aug 2021 - 14:15",
    amount: 36214,
    detail: "INVOICE",
  },
  {
    id: 4,
    code: 65423132445,
    date: "18 Aug 2021 - 14:15",
    amount: 518,
    detail: "INVOICE",
  },
  {
    id: 5,
    code: 65423132445,
    date: "18 Aug 2021 - 14:15",
    amount: 518,
    detail: "INVOICE",
  },
];

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

interface IState {
  isShow: boolean;
  activeNav: number;
  showmodal: boolean;
  activeLink: number;
}
class PageTestComponents extends Component {
  state: IState = {
    isShow: false,
    activeNav: 4,
    showmodal: false,
    activeLink: 1,
  };

  handleShowModal = () => {
    this.setState({ showmodal: true });
  };

  handleCloseModal = () => {
    this.setState({ showmodal: false });
  };

  handleGetActiveLink = (id: number) => {
    this.setState({ activeLink: id });
  };

  render() {
    console.log(this.state.activeLink);
    return (
      <div className="mx-1 ">
        <ComponentTextArea />
        <div className="col-9">
          <ComponentBasicInformation />
        </div>
        <div>
          <h1>New Image and Icon</h1>
          <img src={ImageJuicer} alt="" />
          <img src={IconShop} alt="" className="mx-5" />
          <img src={ImageManWithBox} className="mx-5" />
          <img src={ImageManFlying} className="mx-5" />
          <img src={IconDanger} className="mx-5" />
        </div>
        <h1>New Components</h1>
        <div style={{ width: "315px", height: "100vh" }}>
          <SideNavItems
            items={TEST_NAV_ITEM}
            onActive={this.handleGetActiveLink}
          />
        </div>
        <div className="mx-auto" style={{ width: "752px", height: "573px" }}>
          <CardProductGroupTitle />
        </div>
        <div style={{ width: "347px", height: "162px" }}>
          <ChartDoughnut dataChart={["152423", "242423"]} />
        </div>
        <div style={{ width: "830px", height: "598px" }}>
          <TableTransaction items={TABLE} />
        </div>
        <div style={{ width: "390px", height: "100px" }}>
          <CardOverall
            image={IconShop}
            type={"Product"}
            amountSold={120524}
            amountBought={35183}
          />
        </div>
        <div style={{ width: "390px", height: "100px" }}>
          <ChartSale />
        </div>
        <div
          className="mx-auto my-5"
          style={{ width: "347px", height: "383px" }}
        >
          <Calendar />
        </div>
        <div style={{ width: "1525px", height: "155px" }}>
          <BannerCongratulations />
        </div>
        <div style={{ width: "1258px", height: "225px" }}>
          <BannerLetsStart />
        </div>
        <TextIconVerticalDashboard
          icon={IconDanger}
          title={"Hint text about the title"}
        />
        <div style={{ width: "572.5px", height: "64px" }} className="m-5">
          <SelectComponentDouble items1={DROPDOWN} items2={DROPDOWN} />
        </div>
        <ButtonAdd onClick={() => alert("add")} />
        <UploadImage title="Product Images" />
        <SummaryDashboard price1="18,251" price2="78,681" price3="3,524" />
        <ProductCart />
        <CardOfferHorizontal
          image={ImageTest}
          status={"exp"}
          description={
            "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
          }
          rate={4}
          country={"chin"}
          chart={TEST}
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
                <MyCompanyNav onActive={function (id: number): void {
          throw new Error("Function not implemented.");
        } } showButton={true} />
                <ProfileHeaderImage />
                <OrderHead orderNumber={2334217651} client="Saber Noori" />
                <Location index={1} name={"Bandar Abbas Office"} area={"BandarAbbas, Iran"} />
                <div style={{ width: "1200px", height: "670px" }}>
                    <CongratulationBanner activeTab="Other Details" />
                </div>
                <div style={{ width: "1200px", height: "670px" }} className="my-3">
                    <CongratulationBanner activeTab="Related Items" />
                </div>
                <div style={{ width: "1920px" }}>
                    <button onClick={this.handleShowModal}>
                        open modal
                    </button>
                    {/* <ModalCompany show={this.state.showmodal} onClose={this.handleCloseModal} /> */}
                </div>
            </div>
        )
    }
}

export default PageTestComponents;