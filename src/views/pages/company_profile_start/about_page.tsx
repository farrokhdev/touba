import ButtonAdd from "../../components/button_add";
import { CardUploadImage, Divider, InputDate, InputTextLabel, SelectComponent } from "../../components/components";
import MyCompanyNav from "../../components/mycompany_nav";
import UploadImage from "../../components/upload_image";
import CompanyProfileStartController from "../../controllers/company_profile_start_controller";

class AboutPage extends CompanyProfileStartController {

    Certificate() {
        const {
            certificateName,
        } = this.state;
        return (
            <>
                <div className="body-content-main-inputs">
                    <div className="body-content-main-inputs-group">
                        <InputTextLabel
                            value={certificateName}
                            title={"Certificate"}
                            placeholder={"Certificate Name"}
                            type={"text"}
                            showDropDown={false}
                            onChange={(event) => this.setState({certificateName: event.currentTarget.value})}
                        />
                        <SelectComponent
                            type={"two"}
                            placeholder={"Manufacturer/Factory"}
                            onSelect={this.getCertificateCode}
                            items={this.items}
                            title="Business Type"
                        />
                    </div>
                    <div className="body-content-main-inputs-group">
                        <InputDate
                            title={"Registered Date"}
                            handleGetValue={this.getRegisterDate}
                        />
                        <InputDate
                            title={"Expire Date"}
                            handleGetValue={this.getExpireDate}
                        />
                    </div>
                </div>
                <div className="body-content-main-image">
                    <CardUploadImage
                        title={"Upload Certificate Image Here"}
                        handleGetImage={this.getImage}
                    />
                </div>
                <div className="body-content-main-button">
                    <ButtonAdd onClick={() => { }} />
                </div>
                <Divider direction={"vertical"} />
                <div className="body-content-main-footer">
                    <div className="body-content-main-footer-button-group">
                        <button className="body-content-main-footer-button-group-next">
                            <h5>
                                NEXT STEP
                            </h5>
                        </button>
                        <button className="body-content-main-footer-button-group-back">
                            <h5>
                                BACK
                            </h5>
                        </button>
                    </div>
                    <button className="body-content-main-footer-button-cancel">
                        <h5>
                            CANCEL
                        </h5>
                    </button>
                </div>
            </>
        )
    }

    render() {
        const {
            activeTab
        } = this.state;
        return (
            <>
                <div className="body-content-header">
                    <MyCompanyNav onActive={this.getActiveTab} showButton={false} />
                </div>
                <div className="body-content-main">
                    {activeTab === 1 ? (
                        this.Certificate()
                    ) : (
                        <h3>
                            sdcs
                        </h3>
                    )}
                </div>
            </>
        )
    }
}

export default AboutPage;