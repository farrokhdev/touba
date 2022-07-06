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


class CompoanyProfileStart extends CompanyProfileStartController {
    
    render() {
        
        return (
            <div className="company-profile-start">

            </div>
        )
    }
}

export default CompoanyProfileStart;