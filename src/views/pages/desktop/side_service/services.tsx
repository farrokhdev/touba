import { IconAward, IconTrading, IconFile, IconInvestment, IconFranchise, IconDistribution, IconIdeation, IconProductManagment, IconCertification, IconMarketing, ImageSideService, ImageSideService2, ImageSideService3, ImageSideService4 } from "../../../../assets";
import SideServiceController from "../../../controllers/side_service_controller";

export default class Services extends SideServiceController {
    render() {
        const { id } = this.state;
        const serviceContent = () => {
            if (id === 4) {
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
            } else if (id === 3) {
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
            <>
                <div className="sidebar ">
                    <button
                        className={`d-flex flex-row align-items-center justify-content-start ${id === 1 && "active-Btn"
                            }`}
                        onClick={() => this.setState({ id: 1 })}
                    >
                        <img className="mx-3" src={IconAward} />
                        <span>Standardization</span>
                    </button>
                    <button
                        className={`d-flex flex-row align-items-center justify-content-start ${id === 2 && "active-Btn"
                            }`}
                        onClick={() => this.setState({ id: 2 })}
                    >
                        <img className="mx-3" src={IconTrading} />
                        <span>Trading Services</span>
                    </button>
                    <button
                        className={`d-flex flex-row align-items-center justify-content-start ${id === 3 && "active-Btn"
                            }`}
                        onClick={() => this.setState({ id: 3 })}
                    >
                        <img className="mx-3" src={IconFile} />
                        <span>Legal and Promotion</span>
                    </button>
                    <button
                        className={`d-flex flex-row align-items-center justify-content-start ${id === 4 && "active-Btn"
                            }`}
                        onClick={() => this.setState({ id: 4 })}
                    >
                        <img className="mx-3" src={IconInvestment} />
                        <span>Consulting</span>
                    </button>
                    <button
                        className={`d-flex flex-row align-items-center justify-content-start ${id === 5 && "active-Btn"
                            }`}
                        onClick={() => this.setState({ id: 5 })}
                    >
                        <img className="mx-3" src={IconFranchise} />
                        <span>Franchise & Representation</span>
                    </button>
                    <button
                        className={`d-flex flex-row align-items-center justify-content-start ${id === 6 && "active-Btn"
                            }`}
                        onClick={() => this.setState({ id: 6 })}
                    >
                        <img className="mx-3" src={IconDistribution} />
                        <span>Distribution</span>
                    </button>
                    <button
                        className={`d-flex flex-row align-items-center justify-content-start ${id === 7 && "active-Btn"
                            }`}
                        onClick={() => this.setState({ id: 7 })}
                    >
                        <img className="mx-3" src={IconIdeation} />
                        <span>Ideation and accelerator services</span>
                    </button>
                    <button
                        className={`d-flex flex-row align-items-center justify-content-start ${id === 8 && "active-Btn"
                            }`}
                        onClick={() => this.setState({ id: 8 })}
                    >
                        <img className="mx-3" src={IconProductManagment} />
                        <span>Project management and control</span>
                    </button>
                    <button
                        className={`d-flex flex-row align-items-center justify-content-start ${id === 9 && "active-Btn"
                            }`}
                        onClick={() => this.setState({ id: 9 })}
                    >
                        <img className="mx-3" src={IconCertification} />
                        <span>Training academies and certification:</span>
                    </button>
                    <button
                        className={`d-flex flex-row align-items-center justify-content-start ${id === 10 && "active-Btn"
                            }`}
                        onClick={() => this.setState({ id: 10 })}
                    >
                        <img className="mx-3" src={IconMarketing} />
                        <span>Marketing</span>
                    </button>
                </div>
                <div className="content">{serviceContent()}</div>
            </>
        )
    }
}
