import ButtonAdd from "../../../../components/button_add";
import { CardFAQ } from "../../../../components/components";
import CompanyProfileEditController from "../../../../controllers/company_profile_edit_controller";

class Faq extends CompanyProfileEditController {

    render() {
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
}

export default Faq;