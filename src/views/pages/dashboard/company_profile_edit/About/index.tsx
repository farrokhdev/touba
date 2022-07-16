import { CardUploadImage } from "../../../../components/card_upload_image";
import { SelectComponent } from "../../../../components/components";
import DeleteImage from "../../../../components/delete_image";
import { InputDate } from "../../../../components/input_date";
import { InputTextLabel } from "../../../../components/input_text_label";
import { ModalCompany } from "../../../../components/modal_company";
import MyCompanyNav from "../../../../components/mycompany_nav";
import { TextAreaLabel } from "../../../../components/textarea_lable";
import { TextAreaLabelImage } from "../../../../components/textarea_lable_image";
import CompanyProfileEditController from "../../../../controllers/company_profile_edit_controller";
import Certification from "./certification";
import Description from "./description";
import Faq from "./faq";
import Specification from "./specification";

class SectionAbout extends CompanyProfileEditController {

    render() {
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
                        <Description />
                    ) : (
                        activeTab === 2 ? (
                            <Specification />
                        ) : (
                            activeTab === 3 ? (
                                <Certification />
                            ) : (
                                <Faq />
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
                                items={this.items}
                                title="Business Type"
                            />
                        </div>
                        <div className="input-group value-red-scound">
                            <SelectComponent
                                type={"two"}
                                placeholder={"Technical Support"}
                                onSelect={this.handleGetBusinessCategory}
                                items={this.items}
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
                                items={this.items}
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
                                items={this.items}
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
                                items={this.items}
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
                                items={this.items}
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
}

export default SectionAbout;