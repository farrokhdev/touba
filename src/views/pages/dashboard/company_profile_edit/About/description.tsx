import { IconImageBlack, IconDeletGreen, ImageBanner, IconEditSorme } from "../../../../../assets";
import CompanyProfileEditController from "../../../../controllers/company_profile_edit_controller";


class Description extends CompanyProfileEditController {
   
    render() {
        const {
            image,
            description,
            details
        } = this.state;
        return (
            <>
                <div className="body-content-items-title">
                    <h4 className="body-content-items-title-text">
                        Company Profile
                    </h4>
                </div>
                <div className="body-content-items-banner">
                    <div className="body-content-items-banner-icons">
                        <div className="input-file">
                            <label className="label-photo">
                                <img src={IconImageBlack} alt="icon-image" className="icon-image" />
                            </label>
                            <input
                                accept="image/png, image/jpg, image/jpeg"
                                type="file"
                                className="input-photo"
                                onChange={(event) => this.handleGetImage(event)}
                            />
                        </div>
                        <img src={IconDeletGreen} alt="" onClick={this.handleDeleteImage} />
                    </div>
                    <div className="body-content-items-banner-image">
                        <img
                            src={image === "" ? ImageBanner : image}
                            alt=""
                        />
                    </div>
                </div>
                <div className="body-content-items-description">
                    <div className="body-content-items-description-icon">
                        <img src={IconEditSorme} alt="" onClick={this.handleShowModalDescription} />
                    </div>
                    <div className="body-content-items-description-text">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
                <div className="body-content-items-details">
                    <div className="body-content-items-details-icon">
                        <img
                            src={IconEditSorme}
                            alt=""
                            onClick={this.handleShowModalDetails}
                        />
                    </div>
                    <div className="body-content-items-details-table">
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Established Year
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    {details.establishedYear}
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Business Type:
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    {details.businessType}
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Business Category
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    {details.businessCategory}
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Main Products:
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount text-red">
                                <h6>
                                    {details.mainProducts}
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Main Products:
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount text-red">
                                <h6>
                                    {details.mainProducts}
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Main Market:
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount text-red">
                                <h6>
                                    {details.mainMarket}
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Number of empolyee
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    {details.numberOfEmployee}
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Registered Capital:
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    {details.registeredCapital}
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Plant Area:
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    {details.planeArea}
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Factory Size:
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    Size
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Payment Methode:
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    Paypal, Cash
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Management System Certification:
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    ISO 9001, ISO 9000, ISO 14001, ISO 14000, ISO 20000, OHSAS/ OHSMS 18001, IATF16949, HSE, ...
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Average Lead Time:
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    Peak Season Lead Time: one month, Off Season Lead Time: within 15 workdays
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    SGS Serial NO. :
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    QIP-ASI185372
                                    <span>
                                        Report Verification
                                    </span>
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    Average Lead Time:
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    Peak Season Lead Time: one month, Off Season Lead Time: within 15 workdays
                                </h6>
                            </div>
                        </div>
                        <div className="body-content-items-details-table-row">
                            <div className="body-content-items-details-table-row-title">
                                <h6>
                                    SGS Serial NO. :
                                </h6>
                            </div>
                            <div className="body-content-items-details-table-row-amount">
                                <h6>
                                    QIP-ASI185372
                                    <span>
                                        Report Verification
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Description;