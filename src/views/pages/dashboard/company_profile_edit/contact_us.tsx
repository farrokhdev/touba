import { IconEditSorme, IconLocation, ImageManager } from "../../../../assets";
import { ButtonOutline } from "../../../components/button_outline";
import { CardUploadImage } from "../../../components/card_upload_image";
import { SelectComponent, Map } from "../../../components/components";
import Divider from "../../../components/divider";
import { InputTextLabel } from "../../../components/input_text_label";
import { InputTextPhoneNumber } from "../../../components/input_text_phonenumber";
import { ModalCompany } from "../../../components/modal_company";
import CompanyProfileEditController from "../../../controllers/company_profile_edit_controller";

class ContactUs extends CompanyProfileEditController {

    render() {
        const {
            modalContact,
            address,
            contactSuplier,
            modalLocation
        } = this.state;
        return (
            <>
                <div className="body-content-items mt-4">
                    <div className="body-content-items-title">
                        <h4 className="body-content-items-title-text">
                            Contact Us Page
                        </h4>
                        <ButtonOutline title={"View as visitor"} />
                    </div>
                    <div className="body-content-items-contact-us">
                        <div className="body-content-items-contact-us-icon">
                            <img src={IconEditSorme} alt="" onClick={this.showModalContact} />
                        </div>
                        <div className="body-content-items-contact-us-details">
                            <div className="body-content-items-contact-us-details-text">
                                <img src={IconLocation} alt="" />
                                <div>
                                    <h6>
                                        Address:
                                    </h6>
                                    <h5>
                                        Yanjialing Village, Tongji Office, Jimo District, Qingdao, Shandong, China 266000
                                    </h5>
                                </div>
                            </div>
                            <div className="body-content-items-contact-us-details-text">
                                <img src={IconLocation} alt="" />
                                <div>
                                    <h6>
                                        Local Time:
                                    </h6>
                                    <h5>
                                        4:25PM Thu Jan 27
                                    </h5>
                                </div>
                            </div>
                            <div className="body-content-items-contact-us-details-text">
                                <img src={IconLocation} alt="" />
                                <div>
                                    <h6>
                                        Telephone:
                                    </h6>
                                    <h5>
                                        +98-9120295053
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-content-items-person">
                        <h5 className="body-content-items-person-title">
                            Message Supplier:
                        </h5>
                        <img
                            src={ImageManager}
                            alt=""
                            className="body-content-items-person-image"
                        />
                        <div className="body-content-items-person-name">
                            <h5>
                                Name Here
                            </h5>
                            <h6>
                                SALES MANAGER
                            </h6>
                        </div>
                    </div>
                    <div className="body-content-items-divider">
                        <Divider direction="vertical" />
                    </div>
                    <div className="body-content-items-location">
                        <div className="body-content-items-location-icon">
                            <img src={IconEditSorme} alt="" onClick={this.showModalLocation} />
                        </div>
                        <div className="body-content-items-location-map">
                            <Map />
                        </div>
                    </div>
                </div>
                {modalContact === true ? (
                    <ModalCompany onClose={this.closeModalContact} onSave={() => { }}>
                        <InputTextLabel
                            value={address}
                            title={"Address"}
                            placeholder={""}
                            type={"text"}
                            showDropDown={false}
                            onChange={(event) => this.setState({ address: event.currentTarget.value })}
                        />
                        <div className="input-group">
                            <InputTextPhoneNumber
                                title={"Phone Number"}
                                getPhoneNumber={this.getPhoneNumber}
                            />
                            <SelectComponent
                                type={"two"}
                                onSelect={() => { }}
                                items={this.items}
                                title="Time Zone"
                            />
                        </div>
                        <div className="input-group">
                            <InputTextLabel
                                value={contactSuplier}
                                title={"Supplier Name"}
                                placeholder={""}
                                type={"text"}
                                showDropDown={false}
                                onChange={(event) => this.setState({ contactSuplier: event.currentTarget.value })}
                            />
                            <SelectComponent
                                type={"two"}
                                onSelect={() => { }}
                                items={this.items}
                                title="Position In Company"
                            />
                        </div>
                        <div className="card-image-contact">
                            <CardUploadImage
                                title={"Upload Avatar"}
                                handleGetImage={() => { }}
                            />
                        </div>
                    </ModalCompany>
                ) : (null)}
                {modalLocation === true ? (
                    <ModalCompany onClose={this.closeModalLocation} onSave={() => { }}>
                        <div className="contact-us-map">
                            <Map />
                        </div>
                    </ModalCompany>
                ) : (null)}
            </>
        )
    }
}

export default ContactUs;