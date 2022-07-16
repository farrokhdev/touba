import { IconMessageSeideservice, IconProfile } from "../../../../assets";
import SideServiceController from "../../../controllers/side_service_controller";

export default class Form extends SideServiceController {
    render() {
        return (
            <>
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
            </>
        )
    }
}
