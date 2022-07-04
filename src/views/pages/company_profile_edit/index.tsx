import { IconCalling, IconCallSorme, IconLocationSorme, IconPaperBlack, IconStarSorme, IconWalletSorme } from "../../../assets";
import DashboardNav from "../../components/dashboard_nav";
import { SideNavItems } from "../../components/side_nav_items";
import CompanyProfileController from "../../controllers/company_profile_controller";

const TEST_NAV_ITEM = [
    {
        title: "About Page",
        icon: `${IconPaperBlack}`,
        id: 1
    },
    {
        title: "Contact Us Page",
        icon: `${IconCallSorme}`,
        id: 2
    },
    {
        title: "Payments Setting",
        icon: `${IconWalletSorme}`,
        id: 3
    },
    {
        title: "Payments Setting",
        icon: `${IconLocationSorme}`,
        id: 4
    },
    {
        title: "Visual Settings",
        icon: `${IconStarSorme}`,
        id: 5
    }
];

class CompanyProfileEdit extends CompanyProfileController {
    render() {
        
        return (
            <div className="company-profile-edit">
                <DashboardNav title={"My Company Profile"} />
                <div className="company-profile-edit-side-item">
                    <SideNavItems items={TEST_NAV_ITEM} onActive={this.handleGetActiveLink}/>
                </div>
            </div>
        )
    }
}

export default CompanyProfileEdit;