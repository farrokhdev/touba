import { IconEditSorme, ImageCertificate } from "../../../../../assets";
import ButtonAdd from "../../../../components/button_add";
import { CardUploadImage } from "../../../../components/card_upload_image";
import { SelectComponent } from "../../../../components/components";
import { InputDate } from "../../../../components/input_date";
import { InputTextLabel } from "../../../../components/input_text_label";
import { ModalCompany } from "../../../../components/modal_company";
import CompanyProfileEditController from "../../../../controllers/company_profile_edit_controller";

class Certification extends CompanyProfileEditController {

    render() {
        const {
            certificate,
            modalAddCertificate,
            certificateName,
            modalEditCertificate,
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
                                onClick={() => this.showModalEditCretificate("")}
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
                                onClick={() => this.showModalEditCretificate("")}
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
                                            onClick={() => this.showModalEditCretificate(item.id)}
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
                    <ButtonAdd onClick={this.showModalAddCretificate} />
                </div>
                {modalAddCertificate === true ? (
                    <ModalCompany onClose={this.closeModalAddCretificate} onSave={this.addCertificatios}>
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
                                onSelect={this.getCodeCertificate}
                                items={this.items}
                                title="Code"
                            />
                        </div>
                        <div className="input-group">
                            <InputDate title={"Registered Date"} handleGetValue={this.getDateRegister} />
                            <InputDate title={"Registered Date"} handleGetValue={this.getDateExpire} />
                        </div>
                        <div className="card-image">
                            <CardUploadImage
                                title={"Upload Certificate Image Here"}
                                handleGetImage={this.getImageCertificate}
                            />
                        </div>
                    </ModalCompany>
                ) : (null)}
                {modalEditCertificate === true ? (
                    <ModalCompany onClose={this.closeModalEditCretificate} onSave={this.editCertificatios}>
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
                                onSelect={this.getCodeCertificate}
                                items={this.items}
                                title="Code"
                            />
                        </div>
                        <div className="input-group">
                            <InputDate title={"Registered Date"} handleGetValue={this.getDateRegister} />
                            <InputDate title={"Registered Date"} handleGetValue={this.getDateExpire} />
                        </div>
                        <div className="card-image">
                            <CardUploadImage
                                title={"Upload Certificate Image Here"}
                                handleGetImage={this.getImageCertificate}
                            />
                        </div>
                    </ModalCompany>
                ) : (null)}
            </>
        )
    }
}

export default Certification;