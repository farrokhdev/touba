import { Chart } from "./../../../components/chart";
import { Component, MouseEvent } from "react";
import { IconArrowGreen, ImageProfileSupplier, IconMessages, ImagecompanyProfileTeam, ImageCertificate, IconLocation, IconTimeCircle, IconCalling, ImageComppanyProfile, ImageBinarazan, ImageChina, ImageDiamond, IconOntime, IconEmail1, IconStar, IconStartOutline, IconShare, IconHeartDashboard, IconSearchReverse, ImageTest } from "../../../../assets";
import { CardOfferHorizontal } from "../../../components/cars_offer_horizontal";
import { ComponentFilterSidebar, ComponentFilterRangeSlider, ComponentCapicityFilter } from "../../../components/components";
import ToubaProduct from "../product";


interface IProps {}

interface IState {
  isShow: number;
  showChartModal: boolean;
}

export default class CompanyProfile extends Component<IProps, IState> {
  state: IState = {
    isShow: 1,
    showChartModal: false,
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
    function handlePreventOnClick(event: MouseEvent<HTMLElement>) {
      event.stopPropagation();
    }
    const about = () => {
      return (
        <>
          <div className="smalText p-4 px-4">
            {"You are here: Touba >> Suppliers >> Company Name >> About"}
          </div>
          <div className="d-flex flex-row align-items-start content-Conteiner">
            <div className="sidebar">
              <div className="menu">
                <span className="title">About</span>
                <ul>
                  <li>
                    <span>Company Profile</span>
                    <img src={IconArrowGreen} />
                  </li>
                  <li>
                    <span> Trade Capacity</span>
                    <img src={IconArrowGreen} />
                  </li>
                  <li>
                    <span> Certificates</span>
                    <img src={IconArrowGreen} />
                  </li>
                  <li>
                    <span> Production Capacity</span>
                    <img src={IconArrowGreen} />
                  </li>
                  <li>
                    <span> Company Show</span>
                    <img src={IconArrowGreen} />
                  </li>
                </ul>
              </div>
              <div className="supplier">
                <span className="title">Contact Supplier</span>
                <div className="d-flex flex-row align-items-center supplier-Info">
                  <img src={ImageProfileSupplier} alt="profile" />
                  <div className="d-flex flex-column align-items-start mx-3">
                    <span className="pb-2">Name Here</span>
                    <span>Sales Manager</span>
                  </div>
                </div>
                <button>
                  <img src={IconMessages} alt="message" className="mx-3" />
                  <span>Message Supplier</span>
                </button>
              </div>
            </div>
            <div className="company-Profile-Content">
              <div>
                <div className="company">
                  <span className="title">Company Profile</span>
                  <img src={ImagecompanyProfileTeam} alt="prfileCompany" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                  </p>
                  <p>
                    <span className="title">Competitive Advantages</span>
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                  </p>
                  <ul>
                    <li>
                      <span className="field-Name">Established Year</span>
                      <span className="field-Content">2015</span>
                    </li>
                    <li>
                      <span className="field-Name">Business Type:</span>
                      <span className="field-Content">
                        Manufacturer/Factory
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Business Category</span>
                      <span className="field-Content">
                        Cosmetic and Hygiene
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Main Products:</span>
                      <span className="field-Content redText">
                        Milk Powder , Food Powders , Food raw materials
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Main Products:</span>
                      <span className="field-Content redText">
                        Wheel Loader , Forklift , Excavator , Tractor ,
                        Bulldozer , Roadroller , Trailer , Telescopic ...
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Main Market:</span>
                      <span className="field-Content redText">
                        Iran , Iraq , Turkey{" "}
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Number of empolyee</span>
                      <span className="field-Content">3000</span>
                    </li>
                    <li>
                      <span className="field-Name">Registered Capital:</span>
                      <span className="field-Content">2000000 RMB</span>
                    </li>
                    <li>
                      <span className="field-Name">Plant Area:</span>
                      <span className="field-Content">
                        {">2000 square meters"}{" "}
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Factory Size:</span>
                      <span className="field-Content">Size</span>
                    </li>
                    <li>
                      <span className="field-Name">Payment Methode:</span>
                      <span className="field-Content">Paypal, Cash</span>
                    </li>
                    <li>
                      <span className="field-Name">
                        Management System Certification:
                      </span>
                      <span className="field-Content">
                        ISO 9001, ISO 9000, ISO 14001, ISO 14000, ISO 20000,
                        OHSAS/ OHSMS 18001, IATF16949, HSE, ...
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Average Lead Time:</span>
                      <span className="field-Content">
                        Peak Season Lead Time: one month, Off Season Lead Time:
                        within 15 workdays
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">SGS Serial NO. :</span>
                      <span className="field-Content">QIP-ASI185372</span>
                      <span className="greenText">Report Verification</span>
                    </li>
                    <li>
                      <span className="field-Name">Average Lead Time:</span>
                      <span className="field-Content">
                        Peak Season Lead Time: one month, Off Season Lead Time:
                        within 15 workdays
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">SGS Serial NO. :</span>
                      <span className="field-Content">QIP-ASI185372</span>
                      <span className="greenText">Report Verification</span>
                    </li>
                  </ul>
                </div>
                <div className="company">
                  <span className="title">Trade Capacity</span>

                  <ul>
                    <li className="d-none"></li>

                    <li>
                      <span className="field-Name">Business Type:</span>
                      <span className="field-Content">
                        Manufacturer/Factory
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Main Products:</span>
                      <span className="field-Content redText">
                        Wheel Loader , Forklift , Excavator , Tractor ,
                        Bulldozer , Roadroller , Trailer , Telescopic ...
                      </span>
                    </li>

                    <li>
                      <span className="field-Name">Registered Capital:</span>
                      <span className="field-Content">2000000 RMB</span>
                    </li>
                    <li>
                      <span className="field-Name">Plant Area:</span>
                      <span className="field-Content">
                        {">2000 square meters"}{" "}
                      </span>
                    </li>

                    <li>
                      <span className="field-Name">
                        Management System Certification:
                      </span>
                      <span className="field-Content">
                        ISO 9001, ISO 9000, ISO 14001, ISO 14000, ISO 20000,
                        OHSAS/ OHSMS 18001, IATF16949, HSE, ...
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Average Lead Time:</span>
                      <span className="field-Content">
                        Peak Season Lead Time: one month, Off Season Lead Time:
                        within 15 workdays
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">SGS Serial NO. :</span>
                      <span className="field-Content">QIP-ASI185372</span>
                      <span className="greenText">Report Verification</span>
                    </li>
                  </ul>
                </div>
                <div className="company">
                  <span className="title">Certificates</span>
                  <div className="d-flex flex-row">
                    <ul>
                      <li className="d-none"></li>
                      <li>
                        <span className="field-Name">Certificate:</span>
                        <span className="field-Content">Certificate Name </span>
                      </li>
                      <li>
                        <span className="field-Name">Code:</span>
                        <span className="field-Content">1651316465</span>
                      </li>

                      <li>
                        <span className="field-Name">Registered Date:</span>
                        <span className="field-Content">1/31/2021</span>
                      </li>
                      <li>
                        <span className="field-Name">Expire Date:</span>
                        <span className="field-Content">7/31/2023</span>
                      </li>

                      <li className="imageField">
                        <img src={ImageCertificate} alt="cetificate" />
                      </li>
                    </ul>
                    <ul className="ms-3">
                      <li className="d-none"></li>

                      <li>
                        <span className="field-Name">Certificate:</span>
                        <span className="field-Content">Certificate Name </span>
                      </li>
                      <li>
                        <span className="field-Name">Code:</span>
                        <span className="field-Content">1651316465</span>
                      </li>

                      <li>
                        <span className="field-Name">Registered Date:</span>
                        <span className="field-Content">1/31/2021</span>
                      </li>
                      <li>
                        <span className="field-Name">Expire Date:</span>
                        <span className="field-Content">7/31/2023</span>
                      </li>

                      <li className="imageField">
                        <img src={ImageCertificate} alt="cetificate" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="company">
                  <span className="title">Production Capacity</span>

                  <ul>
                    <li className="d-none"></li>

                    <li>
                      <span className="field-Name">Business Type:</span>
                      <span className="field-Content">
                        Manufacturer/Factory
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Main Products:</span>
                      <span className="field-Content redText">
                        Wheel Loader , Forklift , Excavator , Tractor ,
                        Bulldozer , Roadroller , Trailer , Telescopic ...
                      </span>
                    </li>

                    <li>
                      <span className="field-Name">Registered Capital:</span>
                      <span className="field-Content">2000000 RMB</span>
                    </li>
                    <li>
                      <span className="field-Name">Plant Area:</span>
                      <span className="field-Content">
                        {">2000 square meters"}{" "}
                      </span>
                    </li>

                    <li>
                      <span className="field-Name">
                        Management System Certification:
                      </span>
                      <span className="field-Content">
                        ISO 9001, ISO 9000, ISO 14001, ISO 14000, ISO 20000,
                        OHSAS/ OHSMS 18001, IATF16949, HSE, ...
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Average Lead Time:</span>
                      <span className="field-Content">
                        Peak Season Lead Time: one month, Off Season Lead Time:
                        within 15 workdays
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">SGS Serial NO. :</span>
                      <span className="field-Content">QIP-ASI185372</span>
                      <span className="greenText">Report Verification</span>
                    </li>
                  </ul>
                </div>
                <div className="company">
                  <span className="title">Company Show</span>

                  <ul>
                    <li className="d-none"></li>

                    <li>
                      <span className="field-Name">Business Type:</span>
                      <span className="field-Content">
                        Manufacturer/Factory
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Main Products:</span>
                      <span className="field-Content redText">
                        Wheel Loader , Forklift , Excavator , Tractor ,
                        Bulldozer , Roadroller , Trailer , Telescopic ...
                      </span>
                    </li>

                    <li>
                      <span className="field-Name">Registered Capital:</span>
                      <span className="field-Content">2000000 RMB</span>
                    </li>
                    <li>
                      <span className="field-Name">Plant Area:</span>
                      <span className="field-Content">
                        {">2000 square meters"}{" "}
                      </span>
                    </li>

                    <li>
                      <span className="field-Name">
                        Management System Certification:
                      </span>
                      <span className="field-Content">
                        ISO 9001, ISO 9000, ISO 14001, ISO 14000, ISO 20000,
                        OHSAS/ OHSMS 18001, IATF16949, HSE, ...
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">Average Lead Time:</span>
                      <span className="field-Content">
                        Peak Season Lead Time: one month, Off Season Lead Time:
                        within 15 workdays
                      </span>
                    </li>
                    <li>
                      <span className="field-Name">SGS Serial NO. :</span>
                      <span className="field-Content">QIP-ASI185372</span>
                      <span className="greenText">Report Verification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    const products = () => {
      return <ToubaProduct />;
    };
    const contactUs = () => {
      return (
        <>
          <div className="smalText p-4 px-4">
            {"You are here: Touba >> Suppliers >> Company Name >> Contact Us"}
          </div>
          <div className="contactus ">
            <span className="title">Contact Us</span>
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div className="contact">
                <div className="d-flex flex-row align-items-center">
                  <img src={IconLocation} alt="location" />
                  <div className="d-flex flex-column mx-3 contactus-Item">
                    <span>Address: </span>
                    <span>
                      Yanjialing Village, Tongji Office, Jimo District, Qingdao,
                      Shandong, China 266000
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center my-5">
                  <img src={IconTimeCircle} alt="time" />
                  <div className="d-flex flex-column mx-3 contactus-Item">
                    <span>Local Time: </span>
                    <span>4:25PM Thu Jan 27</span>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <img src={IconCalling} alt="calling" />
                  <div className="d-flex flex-column mx-3 contactus-Item">
                    <span>Telephone: </span>
                    <span>+98-9120295053</span>
                  </div>
                </div>
              </div>
              <div className="supplier">
                <span className="title">Contact Supplier</span>
                <div className="d-flex flex-row align-items-center supplier-Info">
                  <img src={ImageProfileSupplier} alt="profile" />
                  <div className="d-flex flex-column align-items-start mx-3">
                    <span className="pb-2">Name Here</span>
                    <span>Sales Manager</span>
                  </div>
                </div>
                <button className="d-flex flex-row align-items-center justify-content-center">
                  <img src={IconMessages} alt="message" className="me-3" />
                  <span>Message Supplier</span>
                </button>
              </div>
            </div>
          </div>
        </>
      );
    };
    const expess = () => {
      return (
        <div>
          <div className=" px-4">
            <div className="row p-3     ">
              <div className="col-3">
                <ComponentFilterSidebar showButton={false} />
              </div>
              <div className="col-9">
                <div className="p-2">
                  <ComponentFilterRangeSlider />
                </div>
                <div className="p-2 expess-select d-flex flex-row align-items-center justify-content-between">
                  <span>4 Products</span>
                  <select>
                    <option>Most Relative</option>
                  </select>
                </div>
                <div className="p-2">
                  <ComponentCapicityFilter />
                </div>
                <div className="p-2">
                  <CardOfferHorizontal
                    image={ImageTest}
                    status={"exp"}
                    description={
                      "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                    }
                    rate={4}
                    country={"chin"}
                    chart={this.TEST}
                    amount={5}
                    discountPercent={2}
                    chartOnClick={() => this.setState({ showChartModal: true })}
                  />
                </div>
                <div className="p-2">
                  <CardOfferHorizontal
                    image={ImageTest}
                    status={"exp"}
                    description={
                      "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                    }
                    rate={4}
                    country={"chin"}
                    chart={this.TEST}
                    amount={5}
                    discountPercent={2}
                    chartOnClick={() => this.setState({ showChartModal: true })}
                  />
                </div>
                <div className="p-2">
                  <CardOfferHorizontal
                    image={ImageTest}
                    status={"exp"}
                    description={
                      "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                    }
                    rate={4}
                    country={"chin"}
                    chart={this.TEST}
                    amount={5}
                    discountPercent={2}
                    chartOnClick={() => this.setState({ showChartModal: true })}
                  />
                </div>
                <div className="p-2">
                  <CardOfferHorizontal
                    image={ImageTest}
                    status={"exp"}
                    description={
                      "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                    }
                    rate={4}
                    country={"chin"}
                    chart={this.TEST}
                    amount={5}
                    discountPercent={2}
                    chartOnClick={() => this.setState({ showChartModal: true })}
                  />
                </div>
              </div>
            </div>
          </div>
          {this.state.showChartModal ? (
            <div
              className="modal-company"
              onClick={() => this.setState({ showChartModal: false })}
            >
              <div
                onClick={handlePreventOnClick}
                className="excess-modal p-4 d-flex flex-column align-items-start justify-content-between"
              >
                <div className="px-4 gray-background d-flex flex-column align-items-center justify-content-around">
                  <span>
                    a Quick motiongraphy to help user undrestanding this diagram
                  </span>
                  <Chart item={this.TEST} />
                </div>
                <button
                  className="green-btn"
                  onClick={() => this.setState({ showChartModal: false })}
                >
                  Got it
                </button>
              </div>
            </div>
          ) : null}
        </div>
      );
    };
    const contentRender = () => {
      if (this.state.isShow === 1) {
        return about();
      } else if (this.state.isShow === 2) {
        return products();
      } else if (this.state.isShow === 4) {
        return contactUs();
      } else if (this.state.isShow === 3) {
        return expess();
      } else {
        return about();
      }
    };
    return (
      <div
        className={`company-Profile-Page ${
          this.state.isShow === 1
            ? "marginButton"
            : this.state.isShow === 2
            ? "marginButtonLow"
            : this.state.isShow === 3
            ? "excess-section"
            : "marginButtomCon"
        }`}
      >
        <div className="background-Img">
          <img src={ImageComppanyProfile} alt="background" />
        </div>
        <div className="content">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={ImageBinarazan} alt="prfileImg" className="prfileImg" />
              <div className="px-3">
                <span className="company-Name">Bina Razan</span>
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-row align-items-center region-Container px-2">
                    <img src={ImageChina} alt="region" />
                    <div className="d-flex flex-column align-items-center region mx-3">
                      <span>Region:</span>
                      <span> China</span>
                    </div>
                  </div>
                  <img
                    src={ImageDiamond}
                    alt="diamond"
                    className="diamond mx-2"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div className="d-flex flex-row align-items-center">
                <img src={IconOntime} alt="ontime" />
                <div className="d-flex flex-column align-items-start company-Benefit mx-2">
                  <span>On-time delivery </span>
                  <span>98.6%</span>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <img src={IconEmail1} alt="email" />
                <div className="d-flex flex-column align-items-start company-Benefit mx-2">
                  <span>Response Time</span>
                  <span>≤15h</span>
                </div>
              </div>
              <div className="rate">
                <img src={IconStar} alt="star" />
                <img src={IconStar} alt="star" />
                <img src={IconStar} alt="star" />
                <img src={IconStar} alt="star" />
                <img src={IconStartOutline} alt="star" />
              </div>
            </div>
          </div>
          <div className="w-100 d-flex flex-row align-items-center justify-content-between company-Nav">
            <div>
              <button
                onClick={() => this.setState({ isShow: 1 })}
                className={this.state.isShow === 1 ? "active-btn" : ""}
              >
                About
              </button>
              <button
                onClick={() => this.setState({ isShow: 2 })}
                className={this.state.isShow === 2 ? "active-btn" : ""}
              >
                Products
              </button>
              <button
                onClick={() => this.setState({ isShow: 3 })}
                className={this.state.isShow === 3 ? "active-btn" : ""}
              >
                Excess Capacity
              </button>
              <button
                onClick={() => this.setState({ isShow: 4 })}
                className={this.state.isShow === 4 ? "active-btn" : ""}
              >
                Contact Us
              </button>
            </div>
            <div className="d-flex flex-row align-items-center input-Container">
              <img src={IconShare} alt="share" className="mx-2" />
              <img src={IconHeartDashboard} alt="heart" className="mx-2" />
              <div className="input mx-3 d-flex flex-row align-items-center">
                <img src={IconSearchReverse} />
                <input placeholder="Search in this company " />
              </div>
            </div>
          </div>
          <>{contentRender()}</>
        </div>
      </div>
    );
  }
}
