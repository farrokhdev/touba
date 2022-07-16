import ButtonAdd from "../../../../components/button_add";
import { CardFAQ, InputTextLabel, ModalCompany, TextAreaLabelImage } from "../../../../components/components";
import CompanyProfileEditController from "../../../../controllers/company_profile_edit_controller";

class Faq extends CompanyProfileEditController {

    render() {
        const {
            modalFAQ,
            question
        } = this.state;
        return (
            <>
                <div className="body-content-items-title">
                    <h4 className="body-content-items-title-text">
                        FAQ
                    </h4>
                </div>
                <div className="body-content-items-faq">
                    <CardFAQ open={true} showIcon={true} onClick={this.showModalFAQ} />
                    <CardFAQ open={true} showIcon={true} onClick={this.showModalFAQ} />
                </div>
                <div className="body-content-items-button-add-faq">
                    <ButtonAdd onClick={this.showModalFAQ} />
                </div>
                {modalFAQ === true ? (
                    <ModalCompany onClose={this.closeModalFAQ} onSave={() => { }}>
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
                            handleGetValues={this.getValuesFAQ}
                        />
                    </ModalCompany>
                ) : (null)}
            </>
        )
    }
}

export default Faq;