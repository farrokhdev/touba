import { ButtonOutline } from "../../../components/button_outline";
import { CardUploadImage } from "../../../components/card_upload_image";
import ProfileHeaderImage from "../../../components/profile_header_image";
import CompanyProfileEditController from "../../../controllers/company_profile_edit_controller";

class Setting extends CompanyProfileEditController {

    render() {
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
}

export default Setting;