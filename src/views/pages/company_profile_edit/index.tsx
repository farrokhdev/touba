import { IconCalling, IconCallSorme, IconDeletGreen, IconImageBlack, IconLocationSorme, IconPaperBlack, IconStarSorme, IconWalletSorme, ImageBanner } from "../../../assets";
import DashboardNav from "../../components/dashboard_nav";
import { SideNavItems } from "../../components/side_nav_items";
import CompanyProfileController, { TEST_NAV_ITEM } from "../../controllers/company_profile_controller";

class CompanyProfileEdit extends CompanyProfileController {
    render() {

        return (
            <div className="company-profile-edit">
                <DashboardNav title={"My Company Profile"} />
                <div className="body">
                    <div className="body-side-item">
                        <SideNavItems items={TEST_NAV_ITEM} onActive={this.handleGetActiveLink} />
                    </div>
                    <div className="body-content">
                        <div className="body-content-header">

                        </div>
                        <div className="body-content-items">
                            <div className="body-content-items-title">
                                <h4 className="body-content-items-title-text">
                                    Company Profile
                                </h4>
                            </div>
                            <div className="body-content-items-banner">
                                <div className="body-content-items-banner-icons">
                                    <div className="input-file">
                                        <label className="label-photo">
                                        <img src={IconImageBlack} alt="icon-image" className="icon-image" />
                                        </label>
                                        <input
                                            accept="image/png, image/jpg, image/jpeg"
                                            type="file" 
                                            className="input-photo"
                                            onChange={(event) => this.handleGetImage(event)}
                                        />
                                    </div>
                                    <img src={IconDeletGreen} alt="" />
                                </div>
                                <div className="body-content-items-banner-image">
                                    <img src={this.state.image === "" ? ImageBanner : this.state.image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompanyProfileEdit;