import { IconLocation, IconTimeCircle, IconCalling, ImageProfileSupplier, IconMessages } from "../../../../assets";
import CompanyProfileController from "../../../controllers/company_profile_controller";

export default class ContactUs extends CompanyProfileController {
    render() {
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
}
