import { IconCalling, IconCallSorme, IconDeletGreen, IconEdit, IconEditSorme, IconImageBlack, IconLocationSorme, IconPaperBlack, IconStarSorme, IconWalletSorme, ImageBanner } from "../../../assets";
import { InputTextLabel, ModalCompany, ModalComponent, SelectComponent, TextAreaLabel } from "../../components/components";
import DashboardNav from "../../components/dashboard_nav";
import DeleteImage from "../../components/delete_image";
import MyCompanyNav from "../../components/mycompany_nav";
import { SideNavItems } from "../../components/side_nav_items";
import CompanyProfileController, { TEST_NAV_ITEM } from "../../controllers/company_profile_controller";

const items = [
    { name: "item1", id: 1 },
    { name: "item2", id: 2 },
    { name: "item3", id: 3 },
    { name: "item4", id: 4 },
]

class CompanyProfileEdit extends CompanyProfileController {
    sectionDescription() {
        const {
            image,
            modalDelete,
            modalDescription,
            description,
            modalDetails,
            establishedYear,
            mainProducts,
            mainMarket,
            numberOfEmployee,
            registeredCapital,
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
    render() {
        const {
            image,
            modalDelete,
            modalDescription,
            description,
            modalDetails,
            establishedYear,
            mainProducts,
            mainMarket,
            numberOfEmployee,
            registeredCapital,
            details,
            activeTab,
        } = this.state;
        console.log(details);
        return (
            <div className="company-profile-edit">
                <DashboardNav title={"My Company Profile"} />
                <div className="body">
                    <div className="body-side-item">
                        <SideNavItems items={TEST_NAV_ITEM} onActive={this.handleGetActiveLink} />
                    </div>
                    <div className="body-content">
                        <div className="body-content-header">
                            <MyCompanyNav onActive={this.handleGetActiveTab} />
                        </div>
                        <div className="body-content-items">
                            {activeTab === 1 ? (
                                this.sectionDescription()
                            ) : (
                                <h3>dfgd</h3>
                            )}
                        </div>
                        {modalDelete === true ? (
                            <DeleteImage onClick={this.handleCloseModalDelete} />
                        ) : (null)}
                        {modalDescription === true ? (
                            <ModalCompany onClose={this.handleCloseModalDescription} onSave={this.handleSubmitChangeDescription}>
                                <TextAreaLabel title={"Introduction"} handleGetValue={this.handleGetDescription} />
                            </ModalCompany>
                        ) : (null)}
                        {modalDetails === true ? (
                            <ModalCompany onClose={this.handleCloseModalDetails} onSave={this.handleSaveDeatils}>
                                <div className="input-group">
                                    <InputTextLabel
                                        value={establishedYear}
                                        title={"Established Year"}
                                        placeholder={"Technical Support"}
                                        type={"text"}
                                        showDropDown={false}
                                        onChange={(event) => { this.setState({ establishedYear: event.currentTarget.value }) }}
                                    />
                                    <SelectComponent
                                        type={"two"}
                                        placeholder={"Manufacturer/Factory"}
                                        onSelect={this.handleGetBusinessType}
                                        items={items}
                                        title="Business Type"
                                    />
                                </div>
                                <div className="input-group value-red-scound">
                                    <SelectComponent
                                        type={"two"}
                                        placeholder={"Technical Support"}
                                        onSelect={this.handleGetBusinessCategory}
                                        items={items}
                                        title="Business Category"
                                    />
                                    <InputTextLabel
                                        value={mainProducts}
                                        title={"Main Products"}
                                        placeholder={"Milk Powder , Food Powders , Food raw materials"}
                                        type={"text"}
                                        showDropDown={false}
                                        onChange={(event) => { this.setState({ mainProducts: event.currentTarget.value }) }}
                                    />
                                </div>
                                <div className="input-group value-red-scound">
                                    <SelectComponent
                                        type={"two"}
                                        placeholder={"Technical Support"}
                                        onSelect={this.handleGetBusinessCategory}
                                        items={items}
                                        title="Business Category"
                                    />
                                    <InputTextLabel
                                        value={mainProducts}
                                        title={"Main Products"}
                                        placeholder={"Milk Powder , Food Powders , Food raw materials"}
                                        type={"text"}
                                        showDropDown={false}
                                        onChange={(event) => { this.setState({ mainProducts: event.currentTarget.value }) }}
                                    />
                                </div>
                                <div className="input-group value-red-first">
                                    <InputTextLabel
                                        value={mainMarket}
                                        title={"Main Market"}
                                        placeholder={"Iran , Iraq , Turkey "}
                                        type={"text"}
                                        showDropDown={false}
                                        onChange={(event) => { this.setState({ mainMarket: event.currentTarget.value }) }}
                                    />
                                    <InputTextLabel
                                        value={numberOfEmployee}
                                        title={"Number of empolyee"}
                                        placeholder={"30000"}
                                        type={"text"}
                                        showDropDown={false}
                                        onChange={(event) => { this.setState({ numberOfEmployee: event.currentTarget.value }) }}
                                    />
                                </div>
                                <div className="input-group value-red-first">
                                    <InputTextLabel
                                        value={mainMarket}
                                        title={"Main Market"}
                                        placeholder={"Iran , Iraq , Turkey "}
                                        type={"text"}
                                        showDropDown={false}
                                        onChange={(event) => { this.setState({ mainMarket: event.currentTarget.value }) }}
                                    />
                                    <InputTextLabel
                                        value={numberOfEmployee}
                                        title={"Number of empolyee"}
                                        placeholder={"30000"}
                                        type={"text"}
                                        showDropDown={false}
                                        onChange={(event) => { this.setState({ numberOfEmployee: event.currentTarget.value }) }}
                                    />
                                </div>
                                <div className="input-group">
                                    <InputTextLabel
                                        value={registeredCapital}
                                        title={"Registered Capital"}
                                        placeholder={"2000000 RMB"}
                                        type={"text"}
                                        showDropDown={false}
                                        onChange={(event) => { this.setState({ registeredCapital: event.currentTarget.value }) }}
                                    />
                                    <SelectComponent
                                        type={"two"}
                                        placeholder={">2000 square meters"}
                                        onSelect={this.handleGetPlantArea}
                                        items={items}
                                        title="Plant Area"
                                    />
                                </div>
                            </ModalCompany>
                        ) : (null)}
                    </div>
                </div>
            </div>
        )
    }
}

export default CompanyProfileEdit;