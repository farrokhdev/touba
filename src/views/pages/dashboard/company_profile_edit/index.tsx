import { IconDeletGreen, IconEditSorme, IconImageBlack, IconLocation, ImageBanner, ImageCertificate, ImageManager, } from "../../../../assets";
import ButtonAdd from "../../../components/button_add";
import { ButtonOutline, CardFAQ, CardUploadImage, InputDate, InputTextLabel, InputTextPhoneNumber, Map, ModalCompany, SelectComponent, TextAreaLabel, TextAreaLabelImage } from "../../../components/components";
import DashboardNav from "../../../components/dashboard_nav";
import DeleteImage from "../../../components/delete_image";
import { Divider } from "../../../components/divider";
import MyCompanyNav from "../../../components/mycompany_nav";
import ProfileHeaderImage from "../../../components/profile_header_image";
import { SideNavItems } from "../../../components/side_nav_items";
import CompanyProfileEditController from "../../../controllers/company_profile_edit_controller";
import SectionAbout from "./About";
import ContactUs from "./contact_us";
import Setting from "./setting";

class CompanyProfileEdit extends CompanyProfileEditController {

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
                            items={this.TEST_NAV_ITEM}
                            onActive={this.getActiveLink}
                            showProgress={true}
                        />
                    </div>
                    <div className="body-content">
                        {activeLink === 0 ? (
                            <SectionAbout/>
                        ) : (
                            activeLink === 1 ? (
                                <ContactUs/>
                            ) : (
                                activeLink === 4 ? (
                                    <Setting/>
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