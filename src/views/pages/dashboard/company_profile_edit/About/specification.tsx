import { IconEditSorme } from "../../../../../assets";
import { SelectComponent } from "../../../../components/components";
import { InputTextLabel } from "../../../../components/input_text_label";
import { ModalCompany } from "../../../../components/modal_company";
import CompanyProfileEditController from "../../../../controllers/company_profile_edit_controller";

class Specification extends CompanyProfileEditController {
   
    render() {
        const {
            details,
            modalDetails,
            establishedYear,
            mainProducts,
            mainMarket,
            numberOfEmployee,
            registeredCapital,
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
                            onClick={this.showModalDetails}
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
                {modalDetails === true ? (
                    <ModalCompany onClose={this.closeModalDetails} onSave={this.saveDeatils}>
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
                                onSelect={this.getBusinessType}
                                items={this.items}
                                title="Business Type"
                            />
                        </div>
                        <div className="input-group value-red-scound">
                            <SelectComponent
                                type={"two"}
                                placeholder={"Technical Support"}
                                onSelect={this.getBusinessCategory}
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
                                onSelect={this.getBusinessCategory}
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
                                onSelect={this.getPlantArea}
                                items={this.items}
                                title="Plant Area"
                            />
                        </div>
                    </ModalCompany>
                ) : (null)}
            </>
        )
    }
}

export default Specification;