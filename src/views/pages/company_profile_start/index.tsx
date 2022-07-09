import { IconCalling, IconCallSorme, IconDeletGreen, IconEdit, IconEditSorme, IconImageBlack, IconLocation, IconLocationSorme, IconPaperBlack, IconStarSorme, IconWalletSorme, ImageBanner, ImageCertificate, ImageManager, ImagePerson } from "../../../assets";
import ButtonAdd from "../../components/button_add";
import { ButtonOutline, CardFAQ, CardUploadImage, InputDate, InputTextLabel, InputTextPhoneNumber, Map, ModalCompany, ModalComponent, SelectComponent, TextAreaLabel, TextAreaLabelImage } from "../../components/components";
import DashboardNav from "../../components/dashboard_nav";
import DeleteImage from "../../components/delete_image";
import { Divider } from "../../components/divider";
import MyCompanyNav from "../../components/mycompany_nav";
import ProfileHeaderImage from "../../components/profile_header_image";
import { SideNavItems } from "../../components/side_nav_items";
import CompanyProfileController, { TEST_NAV_ITEM } from "../../controllers/company_profile_controller";
import CompanyProfileStartController from "../../controllers/company_profile_start_controller";
import AboutPage from "./about_page";
import ContactUs from "./contact_us";
import LocationPage from "./location";
import VisualSettings from "./visual_settings";


class CompoanyProfileStart extends CompanyProfileStartController {

    render() {
        const {
            activeLink
        } = this.state;
        return (
            <div className="company-profile-start">
                <DashboardNav title={"My Company Profile"} />
                <div className="body">
                    <div className="body-side-item">
                        <SideNavItems
                            items={TEST_NAV_ITEM}
                            onActive={this.handleGetActiveLink}
                            showProgress={false}
                        />
                    </div>
                    <div className="body-content">
                        {activeLink === 1 ? (
                            <AboutPage />
                        ) : (
                            activeLink === 2 ? (
                                <ContactUs />
                            ) : (
                                activeLink === 3 ? (
                                    <></>
                                ) : (
                                    activeLink === 4 ? (
                                        <LocationPage />
                                    ) : (
                                        <VisualSettings />
                                    )
                                )
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default CompoanyProfileStart;