import DashboardNav from "../../../components/dashboard_nav";
import { SideNavItems } from "../../../components/side_nav_items";
import CompanyProfileStartController from "../../../controllers/company_profile_start_controller";
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
                            items={this.TEST_NAV_ITEM}
                            onActive={this.getActiveLink}
                            showProgress={false}
                        />
                    </div>
                    <div className="body-content">
                        {activeLink === 0 ? (
                            <AboutPage />
                        ) : (
                            activeLink === 1 ? (
                                <ContactUs />
                            ) : (
                                activeLink === 2 ? (
                                    <></>
                                ) : (
                                    activeLink === 3 ? (
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