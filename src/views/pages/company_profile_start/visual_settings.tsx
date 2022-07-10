import { CardUploadImage } from "../../components/components";
import MyCompanyNav from "../../components/mycompany_nav";
import ProfileHeaderImage from "../../components/profile_header_image";
import CompanyProfileStartController from "../../controllers/company_profile_start_controller";

class VisualSettings extends CompanyProfileStartController {

    render() {

        return (
            <>
                 <div className="body-content-setting mt-4">
                    <div className="body-content-setting-title">
                        <h4 className="body-content-setting-title-text">
                            Visual Settings
                        </h4>
                    </div>
                    <div>
                        <ProfileHeaderImage />
                    </div>
                    <div className="body-content-setting-image">
                        <CardUploadImage title={"Upload Company Logo"} handleGetImage={() => { }} />
                    </div>
                </div>
            </>
        )
    }
}

export default VisualSettings;
