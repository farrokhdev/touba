import { BaseComponent } from "utilities_js";
import {
  IconAward,
  IconCertification,
  IconDistribution,
  IconFile,
  IconFranchise,
  IconIdeation,
  IconInvestment,
  IconMarketing,
  IconMessageSeideservice,
  IconProductManagment,
  IconProfile,
  IconTrading,
  ImageSideService,
  ImageSideService2,
  ImageSideService3,
  ImageSideService4,
} from "../../../../assets";

interface IProps {}

interface IState {
  id: number;
}

export default class SideServicePage extends BaseComponent<IProps, IState> {
  state: IState = {
    id: 4,
  };
  render() {
    const serviceContent = () => {
      if (this.state.id === 4) {
        return (
          <div className="items">
            <div className="d-flex flex-column align-items-start content-Item ">
              <img src={ImageSideService} />
              <span className="my-3 mx-3">Investment Consulting</span>
              <p className="mx-3">
                Provide investment advice to users for entering desired plans,
                such as: Conducting research and preparing a business plan
                Review investment opportunities and provide, recommendations,
                Enhancing and improving the business, and much more
              </p>
            </div>
            <div className="d-flex flex-column align-items-start content-Item ">
              <img src={ImageSideService2} />
              <span className="my-3 mx-3">HR Consulting</span>
              <p className="mx-3">
                Providing HR services to users such as: Review and conduct
                consultations in order to improve the active forces, Hire and
                train new forces, Required, manpower planning, Developing an
                appropriate organizational chart and structure And so much more
              </p>
            </div>
            <div className="d-flex flex-column align-items-start content-Item ">
              <img src={ImageSideService3} />
              <span className="my-3 mx-3">Accounting Consulting</span>
              <p className="mx-3">
                Providing financial services in various projects, including:
                Accounting and auditing services Providing tax advice and so on
              </p>
            </div>
            <div className="d-flex flex-column align-items-start content-Item ">
              <img src={ImageSideService4} />
              <span className="my-3 mx-3">
                Consulting exhibition, travel and corporate services
              </span>
              <p className="mx-3">
                Providing specialized services for holding exhibitions.
                Providing specialized services related to business trips,
                attending seminars and workshops.
              </p>
            </div>
          </div>
        );
      } else if (this.state.id === 3) {
        return (
          <div className="d-flex flex-column align-items-start single-Content-Item ">
            <img src={ImageSideService} alt="sideService" />
            <span className="my-3 mx-3">Investment Consulting</span>
            <p className="mx-3">
              Provide investment advice to users for entering desired plans,
              such as: Conducting research and preparing a business plan Review
              investment opportunities and provide, recommendations, Enhancing
              and improving the business, and much more Provide investment
              advice to users for entering desired plans, such as: Conducting
              research and preparing a business plan Review investment
              opportunities and provide, recommendations, Enhancing and
              improving the business, and much more
            </p>
          </div>
        );
      } else {
        return null;
      }
    };
    return (
      <div className="sideServise-Page w-100 d-flex flex-column align-items-center ">
        <div className="w-100 green-Background d-flex align-items-start justify-content-center">
          <span className="mt-4">Side Services</span>
        </div>
        <div className="sideService-Content d-flex flex-column align-items-center ">
          <div className="sideService-Desc">
            <span>Touba Side services:</span>
            <p className="mt-4">
              Touba intends to provide side services related to user needs over
              time. Tuba has several goals in providing these services:
            </p>
            <ul>
              <li>
                Meet the needs of users collectively and in the form of a
                package
              </li>
              <li>
                Collecting direct data of the type and amount of users’ needs
                and using it in order to further improve the situation of users
              </li>
              <li>
                Remove administrative barriers for traditional users or small
                businesses
              </li>
              <li>
                Create a sense of confidence and avoid fear due to the
                elimination of useless traders and the existence of direct
                communication in the market
              </li>
              <li>
                Provide suggestions in specialized areas in order to provide
                opportunities for user development
              </li>
              <li>
                Direct cooperation with experts in various fields in order to
                timely identify users’ problems and provide efficient and
                effective solutions Side services are provided in different ways
                in different time periods. At the beginning of the Touba launch,
                some of these services are provided completely free of charge.
                Then some side services are offered in the form of membership
                packages and others are sold separately.
              </li>
            </ul>
            <p>Some of the most important side services are as follows:</p>
          </div>
          <div className="services d-flex flex-row align-items-start my-5">
            <div className="sidebar ">
              <button
                className={`d-flex flex-row align-items-center justify-content-start ${
                  this.state.id === 1 && "active-Btn"
                }`}
                onClick={() => this.setState({ id: 1 })}
              >
                <img className="mx-3" src={IconAward} />
                <span>Standardization</span>
              </button>
              <button
                className={`d-flex flex-row align-items-center justify-content-start ${
                  this.state.id === 2 && "active-Btn"
                }`}
                onClick={() => this.setState({ id: 2 })}
              >
                <img className="mx-3" src={IconTrading} />
                <span>Trading Services</span>
              </button>
              <button
                className={`d-flex flex-row align-items-center justify-content-start ${
                  this.state.id === 3 && "active-Btn"
                }`}
                onClick={() => this.setState({ id: 3 })}
              >
                <img className="mx-3" src={IconFile} />
                <span>Legal and Promotion</span>
              </button>
              <button
                className={`d-flex flex-row align-items-center justify-content-start ${
                  this.state.id === 4 && "active-Btn"
                }`}
                onClick={() => this.setState({ id: 4 })}
              >
                <img className="mx-3" src={IconInvestment} />
                <span>Consulting</span>
              </button>
              <button
                className={`d-flex flex-row align-items-center justify-content-start ${
                  this.state.id === 5 && "active-Btn"
                }`}
                onClick={() => this.setState({ id: 5 })}
              >
                <img className="mx-3" src={IconFranchise} />
                <span>Franchise & Representation</span>
              </button>
              <button
                className={`d-flex flex-row align-items-center justify-content-start ${
                  this.state.id === 6 && "active-Btn"
                }`}
                onClick={() => this.setState({ id: 6 })}
              >
                <img className="mx-3" src={IconDistribution} />
                <span>Distribution</span>
              </button>
              <button
                className={`d-flex flex-row align-items-center justify-content-start ${
                  this.state.id === 7 && "active-Btn"
                }`}
                onClick={() => this.setState({ id: 7 })}
              >
                <img className="mx-3" src={IconIdeation} />
                <span>Ideation and accelerator services</span>
              </button>
              <button
                className={`d-flex flex-row align-items-center justify-content-start ${
                  this.state.id === 8 && "active-Btn"
                }`}
                onClick={() => this.setState({ id: 8 })}
              >
                <img className="mx-3" src={IconProductManagment} />
                <span>Project management and control</span>
              </button>
              <button
                className={`d-flex flex-row align-items-center justify-content-start ${
                  this.state.id === 9 && "active-Btn"
                }`}
                onClick={() => this.setState({ id: 9 })}
              >
                <img className="mx-3" src={IconCertification} />
                <span>Training academies and certification:</span>
              </button>
              <button
                className={`d-flex flex-row align-items-center justify-content-start ${
                  this.state.id === 10 && "active-Btn"
                }`}
                onClick={() => this.setState({ id: 10 })}
              >
                <img className="mx-3" src={IconMarketing} />
                <span>Marketing</span>
              </button>
            </div>
            <div className="content">{serviceContent()}</div>
          </div>
          <div className="w-100 contact-Form">
            <div className="w-100 d-flex flex-row green-Background">
              <div className="w-100">
                <div className="icon-Conteiner d-flex flex-row align-items-center">
                  <img src={IconMessageSeideservice} alt="message" />
                  <span>Leave a Message!</span>
                </div>
                <div className="d-flex flex-column align-items-start justify-content-between form-Container">
                  <div className="d-flex flex-row align-items-center w-100">
                    <div className="input-Container w-50 ">
                      <label>Full Name</label>
                      <img src={IconProfile} alt="profile" />
                      <input placeholder="Saber Noori" className="input-Icon" />
                    </div>
                    <div className="input-Container w-50">
                      <label>Email</label>{" "}
                      <img src={IconProfile} alt="profile" />
                      <input
                        placeholder="sabernooriusb@gmail.com"
                        className="input-Icon email-Input"
                      />
                    </div>
                  </div>
                  <div className="input-Container w-100">
                    <label>Subject:</label>{" "}
                    <img src={IconProfile} alt="profile" />
                    <input
                      placeholder="Sabernooriusb@gmail.com"
                      className="input-Icon"
                    />
                  </div>
                  <div className="input-Container w-100">
                    <label>Services</label>
                    <select>
                      <option>Sabernooriusb@gmail.com</option>
                    </select>
                  </div>
                  <div className="input-Container w-100">
                    <label>Message:</label>
                    <textarea placeholder="Your Message Here" />
                  </div>
                  <button>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
