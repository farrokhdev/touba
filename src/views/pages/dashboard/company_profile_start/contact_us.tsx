import { CardUploadImage, Divider, InputTextLabel, InputTextPhoneNumber, Map, SelectComponent } from "../../../components/components";
import MyCompanyNav from "../../../components/mycompany_nav";
import CompanyProfileStartController from "../../../controllers/company_profile_start_controller";

class ContactUs extends CompanyProfileStartController {

    render() {
        const {
            address,
            phoneCode,
            phoneNumber,
            supplierName
        } = this.state;
        return (
            <>
                <div className="body-content-contact">
                    <div className="body-content-contact-header">
                        <h4>
                            CONTACT US PAGE
                        </h4>
                    </div>
                    <Divider direction={"vertical"} />
                    <div className="body-content-contact-main">
                        <div className="body-content-contact-main-inputs">
                            <InputTextLabel
                                value={address}
                                title={"Address"}
                                placeholder={"Yanjialing Village, Tongji Office, Jimo District, Qingdao, Shandong, China 266000"}
                                type={"text"}
                                showDropDown={false}
                                onChange={(event) => this.setState({ address: event.currentTarget.value })}
                            />
                            <div className="body-content-contact-main-inputs-group Zindex">
                                <InputTextPhoneNumber
                                    title={"Phone Number"}
                                    getPhoneNumber={this.getPhoneNumber}
                                />
                                <SelectComponent
                                    type={"two"}
                                    placeholder={"GMT (+3:30)"}
                                    onSelect={this.getTimeZone}
                                    items={this.items}
                                    title="Time Zone"
                                />
                            </div>
                            <div className="body-content-contact-main-inputs-group">
                                <InputTextLabel
                                    value={supplierName}
                                    title={"Supplier Name"}
                                    placeholder={"Saber Noori"}
                                    type={"text"}
                                    showDropDown={false}
                                    onChange={(event) => this.setState({ supplierName: event.currentTarget.value })}
                                />
                                <SelectComponent
                                    type={"two"}
                                    placeholder={"Sales Manager"}
                                    onSelect={this.getPositionInCountry}
                                    items={this.items}
                                    title="Position In Company"
                                />
                            </div>
                        </div>
                        <div className="body-content-contact-main-image">
                            <CardUploadImage
                                title={"Upload Avatar"}
                                handleGetImage={this.getImageUser}
                            />
                        </div>
                        <div className="body-content-contact-main-divider">

                        </div>
                        <div className="body-content-contact-main-location">
                            <h5 className="body-content-contact-main-location-title">
                                Select adress on the map
                            </h5>
                            <div className="body-content-contact-main-location-map">
                                <Map />
                            </div>
                        </div>
                    </div>
                    <Divider direction={"vertical"} />
                    <div className="body-content-contact-footer">
                        <div className="body-content-contact-footer-button-group">
                            <button className="body-content-contact-footer-button-group-next">
                                <h5>
                                    NEXT STEP
                                </h5>
                            </button>
                            <button className="body-content-contact-footer-button-group-back">
                                <h5>
                                    BACK
                                </h5>
                            </button>
                        </div>
                        <button className="body-content-contact-footer-button-cancel">
                            <h5>
                                CANCEL
                            </h5>
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactUs;
