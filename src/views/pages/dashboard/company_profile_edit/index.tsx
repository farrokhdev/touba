import { IconCalling, IconCallSorme, IconDeletGreen, IconEdit, IconEditSorme, IconImageBlack, IconLocation, IconLocationSorme, IconPaperBlack, IconStarSorme, IconWalletSorme, ImageBanner, ImageCertificate, ImageManager, ImagePerson } from "../../../../assets";
import ButtonAdd from "../../../components/button_add";
import { ButtonOutline, CardFAQ, CardUploadImage, InputDate, InputTextLabel, InputTextPhoneNumber, Map, ModalCompany, ModalComponent, SelectComponent, TextAreaLabel, TextAreaLabelImage } from "../../../components/components";
import DashboardNav from "../../../components/dashboard_nav";
import DeleteImage from "../../../components/delete_image";
import { Divider } from "../../../components/divider";
import MyCompanyNav from "../../../components/mycompany_nav";
import ProfileHeaderImage from "../../../components/profile_header_image";
import { SideNavItems } from "../../../components/side_nav_items";
import CompanyProfileController, { TEST_NAV_ITEM } from "../../../controllers/company_profile_controller";

const items = [
    { name: "item1", id: 1 },
    { name: "item2", id: 2 },
    { name: "item3", id: 3 },
    { name: "item4", id: 4 },
]

class CompanyProfileEdit extends CompanyProfileController {
    sectionAboutPage() {
        const {
            modalDelete,
            modalDescription,
            modalDetails,
            establishedYear,
            mainProducts,
            mainMarket,
            numberOfEmployee,
            registeredCapital,
            activeTab,
            modalAddCertificate,
            modalEditCertificate,
            certificateName,
            modalFAQ,
            question,
        } = this.state;
        return (
            <>
                <div className="body-content-header">
                    <MyCompanyNav
                        onActive={this.handleGetActiveTab}
                        showButton={true}
                        activeBorder={false}
                    />
                </div>
                <div className="body-content-items">
                    {activeTab === 1 ? (
                        this.sectionDescription()
                    ) : (
                        activeTab === 2 ? (
                            this.sectionSpecifications()
                        ) : (
                            activeTab === 3 ? (
                                this.sectionCertificates()
                            ) : (
                                this.sectionFAQ()
                            )
                        )
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
                {modalAddCertificate === true ? (
                    <ModalCompany onClose={this.handleCloseModalAddCretificate} onSave={this.handleAddCertificatios}>
                        <div className="input-group">
                            <InputTextLabel
                                value={certificateName}
                                title={"Certificate"}
                                placeholder={""}
                                type={"text"}
                                showDropDown={false}
                                onChange={(event) => this.setState({ certificateName: event.currentTarget.value })}
                            />
                            <SelectComponent
                                type={"two"}
                                placeholder={""}
                                onSelect={this.handleGetCodeCertificate}
                                items={items}
                                title="Code"
                            />
                        </div>
                        <div className="input-group">
                            <InputDate title={"Registered Date"} handleGetValue={this.handleGetDateRegister} />
                            <InputDate title={"Registered Date"} handleGetValue={this.handleGetDateExpire} />
                        </div>
                        <div className="card-image">
                            <CardUploadImage
                                title={"Upload Certificate Image Here"}
                                handleGetImage={this.handleGetImageCertificate}
                            />
                        </div>
                    </ModalCompany>
                ) : (null)}
                {modalEditCertificate === true ? (
                    <ModalCompany onClose={this.handleCloseModalEditCretificate} onSave={this.handleEditCertificatios}>
                        <div className="input-group">
                            <InputTextLabel
                                value={certificateName}
                                title={"Certificate"}
                                placeholder={""}
                                type={"text"}
                                showDropDown={false}
                                onChange={(event) => this.setState({ certificateName: event.currentTarget.value })}
                            />
                            <SelectComponent
                                type={"two"}
                                placeholder={""}
                                onSelect={this.handleGetCodeCertificate}
                                items={items}
                                title="Code"
                            />
                        </div>
                        <div className="input-group">
                            <InputDate title={"Registered Date"} handleGetValue={this.handleGetDateRegister} />
                            <InputDate title={"Registered Date"} handleGetValue={this.handleGetDateExpire} />
                        </div>
                        <div className="card-image">
                            <CardUploadImage
                                title={"Upload Certificate Image Here"}
                                handleGetImage={this.handleGetImageCertificate}
                            />
                        </div>
                    </ModalCompany>
                ) : (null)}
                {modalFAQ === true ? (
                    <ModalCompany onClose={this.handleCloseModalFAQ} onSave={() => { }}>
                        <InputTextLabel
                            value={question}
                            title={"Question"}
                            placeholder={""}
                            type={"text"}
                            showDropDown={false}
                            onChange={(event) => { this.setState({ question: event.currentTarget.value }) }}
                        />
                        <TextAreaLabelImage
                            title={"Answer"}
                            handleGetValues={this.handleGetValuesFAQ}
                        />
                    </ModalCompany>
                ) : (null)}
            </>
        )
    }
    sectionContactUs() {
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
                            <img src={IconEditSorme} alt="" onClick={this.handleShowModalContact} />
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
                            <img src={IconEditSorme} alt="" onClick={this.handleShowModalLocation} />
                        </div>
                        <div className="body-content-items-location-map">
                            <Map />
                        </div>
                    </div>
                </div>
                {modalContact === true ? (
                    <ModalCompany onClose={this.handleCloseModalContact} onSave={() => { }}>
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
                                items={items}
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
                                items={items}
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
                    <ModalCompany onClose={this.handleCloseModalLocation} onSave={() => { }}>
                        <div className="contact-us-map">
                            <Map />
                        </div>
                    </ModalCompany>
                ) : (null)}
            </>
        )
    }
    sectionSetting() {
        return (
            <>
                <div className="body-content-items mt-4">
                    <div className="body-content-items-title">
                        <h4 className="body-content-items-title-text">
                            Visual Settings
                        </h4>
                        <ButtonOutline title={"View as visitor"} />
                    </div>
                    <div>
                        <ProfileHeaderImage />
                    </div>
                    <div className="card-image-setting">
                        <CardUploadImage title={"Upload Company Logo"} handleGetImage={() => { }} />
                    </div>
                </div>
            </>
        )
    }
    sectionDescription() {
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
    sectionSpecifications() {
        const {
            details
        } = this.state;
        return (
            <>
                <div className="body-content-items-title">
                    <h4 className="body-content-items-title-text">
                        Specifications
                    </h4>
                </div>
                <div className="body-content-items-details pt-0">
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
    sectionCertificates() {
        const {
            details,
            certificate
        } = this.state;
        return (
            <>
                <div className="body-content-items-title">
                    <h4 className="body-content-items-title-text">
                        Certificates
                    </h4>
                </div>
                <div className="body-content-items-certificate">
                    <div className="body-content-items-certificate-table">
                        <div className="body-content-items-certificate-table-icon">
                            <img
                                src={IconEditSorme}
                                alt=""
                                onClick={() => this.handleShowModalEditCretificate("")}
                            />
                        </div>
                        <div className="body-content-items-certificate-table-details">
                            <div className="body-content-items-certificate-table-details-row">
                                <div className="title">
                                    <h6>
                                        Certificate:
                                    </h6>
                                </div>
                                <div className="amount">
                                    <h6>
                                        Certificate Name
                                    </h6>
                                </div>
                            </div>
                            <div className="body-content-items-certificate-table-details-row">
                                <div className="title">
                                    <h6>
                                        Code:
                                    </h6>
                                </div>
                                <div className="amount">
                                    <h6>
                                        1651316465
                                    </h6>
                                </div>
                            </div>
                            <div className="body-content-items-certificate-table-details-row">
                                <div className="title">
                                    <h6>
                                        Registered Date:
                                    </h6>
                                </div>
                                <div className="amount">
                                    <h6>
                                        1/31/2021
                                    </h6>
                                </div>
                            </div>
                            <div className="body-content-items-certificate-table-details-row">
                                <div className="title">
                                    <h6>
                                        Expire Date:
                                    </h6>
                                </div>
                                <div className="amount">
                                    <h6>
                                        1/31/2021
                                    </h6>
                                </div>
                            </div>
                            <div className="body-content-items-certificate-table-details-row">
                                <img
                                    src={ImageCertificate}
                                    alt=""
                                    className="image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="body-content-items-certificate-table">
                        <div className="body-content-items-certificate-table-icon">
                            <img
                                src={IconEditSorme}
                                alt=""
                                onClick={() => this.handleShowModalEditCretificate("")}
                            />
                        </div>
                        <div className="body-content-items-certificate-table-details">
                            <div className="body-content-items-certificate-table-details-row">
                                <div className="title">
                                    <h6>
                                        Certificate:
                                    </h6>
                                </div>
                                <div className="amount">
                                    <h6>
                                        Certificate Name
                                    </h6>
                                </div>
                            </div>
                            <div className="body-content-items-certificate-table-details-row">
                                <div className="title">
                                    <h6>
                                        Code:
                                    </h6>
                                </div>
                                <div className="amount">
                                    <h6>
                                        1651316465
                                    </h6>
                                </div>
                            </div>
                            <div className="body-content-items-certificate-table-details-row">
                                <div className="title">
                                    <h6>
                                        Registered Date:
                                    </h6>
                                </div>
                                <div className="amount">
                                    <h6>
                                        1/31/2021
                                    </h6>
                                </div>
                            </div>
                            <div className="body-content-items-certificate-table-details-row">
                                <div className="title">
                                    <h6>
                                        Expire Date:
                                    </h6>
                                </div>
                                <div className="amount">
                                    <h6>
                                        1/31/2021
                                    </h6>
                                </div>
                            </div>
                            <div className="body-content-items-certificate-table-details-row">
                                <img
                                    src={ImageCertificate}
                                    alt=""
                                    className="image"
                                />
                            </div>
                        </div>
                    </div>
                    {certificate.map(item => (
                        <>
                            {item.id !== "" ? (
                                <div key={item.id} className="body-content-items-certificate-table">
                                    <div className="body-content-items-certificate-table-icon">
                                        <img
                                            src={IconEditSorme}
                                            alt=""
                                            onClick={() => this.handleShowModalEditCretificate(item.id)}
                                        />
                                    </div>
                                    <div className="body-content-items-certificate-table-details">
                                        <div className="body-content-items-certificate-table-details-row">
                                            <div className="title">
                                                <h6>
                                                    Certificate:
                                                </h6>
                                            </div>
                                            <div className="amount">
                                                <h6>
                                                    {item.certificateName}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="body-content-items-certificate-table-details-row">
                                            <div className="title">
                                                <h6>
                                                    Code:
                                                </h6>
                                            </div>
                                            <div className="amount">
                                                <h6>
                                                    {item.certificateCode}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="body-content-items-certificate-table-details-row">
                                            <div className="title">
                                                <h6>
                                                    Registered Date:
                                                </h6>
                                            </div>
                                            <div className="amount">
                                                <h6>
                                                    {item.registerDate}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="body-content-items-certificate-table-details-row">
                                            <div className="title">
                                                <h6>
                                                    Expire Date:
                                                </h6>
                                            </div>
                                            <div className="amount">
                                                <h6>
                                                    {item.expireDate}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="body-content-items-certificate-table-details-row">
                                            <img
                                                src={item.imageCertificate}
                                                alt=""
                                                className="image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (null)}
                        </>
                    ))}
                </div>
                <div className="body-content-items-button-add-certificate">
                    <ButtonAdd onClick={this.handleShowModalAddCretificate} />
                </div>
            </>
        )
    }
    sectionFAQ() {
        const {

        } = this.state;
        return (
            <>
                <div className="body-content-items-title">
                    <h4 className="body-content-items-title-text">
                        FAQ
                    </h4>
                </div>
                <div className="body-content-items-faq">
                    <CardFAQ open={true} showIcon={true} onClick={this.handleShowModalFAQ} />
                    <CardFAQ open={true} showIcon={true} onClick={this.handleShowModalFAQ} />
                </div>
                <div className="body-content-items-button-add-faq">
                    <ButtonAdd onClick={this.handleShowModalFAQ} />
                </div>
            </>
        )
    }
    render() {
        const {
            activeLink,
        } = this.state;
        return (
            <div className="company-profile-edit">
                <DashboardNav title={"My Company Profile"} />
                <div className="body">
                    <div className="body-side-item">
                        <SideNavItems
                            items={TEST_NAV_ITEM}
                            onActive={this.handleGetActiveLink}
                            showProgress={true}
                        />
                    </div>
                    <div className="body-content">
                        {activeLink === 1 ? (
                            this.sectionAboutPage()
                        ) : (
                            activeLink === 2 ? (
                                this.sectionContactUs()
                            ) : (
                                activeLink === 5 ? (
                                    this.sectionSetting()
                                ) : (
                                    <h1>
                                        not design
                                    </h1>
                                )

                            )
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default CompanyProfileEdit;