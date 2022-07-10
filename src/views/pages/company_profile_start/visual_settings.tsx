import MyCompanyNav from "../../components/mycompany_nav";
import ProfileHeaderImage from "../../components/profile_header_image";
import UploadImage from "../../components/upload_image";
import CompanyProfileStartController from "../../controllers/company_profile_start_controller";

class VisualSettings extends CompanyProfileStartController {
  render() {
    return (
      <div className="contact-us-start  mx-4">
        <div className="title">
          <span className="px-5">Visual Settings</span>
        </div>
        <div className="py-3 px-5">
          <div className="image-header-container">
            <ProfileHeaderImage />
          </div>
          <div className="image-upload-container-visual my-4">
            <UploadImage title="Upload Company Logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default VisualSettings;
