import BasicInformationExcess from "../../../components/basic_information_excess";
import { ComponentOtherDetail, ComponentTradeInformation, ComponentRelatedItems } from "../../../components/components";
import { SideNavItems } from "../../../components/side_nav_items";
import CompanyProfileProductController from "../../../controllers/dashboard_company_profile_controller";

export default class AddProductOne extends CompanyProfileProductController {
    render = () => {
        return (
            <div className="row">
                <div className="col-2">
                    <SideNavItems
                        onActive={(e) => this.handleShowSideNavItem(e)}
                        items={this.TEST_NAV_ITEM}
                    />
                </div>
                <div className="col-10 px-4 mt-5 ">
                    {this.state.show == 0 && (
                        <div>
                            <BasicInformationExcess
                                onClick={() => this.setState({ isShow: 0 })}
                            />
                        </div>
                    )}
                    {this.state.show == 1 && (
                        <div>
                            <ComponentOtherDetail />
                        </div>
                    )}
                    {this.state.show == 2 && (
                        <div>
                            <ComponentTradeInformation />
                        </div>
                    )}
                    {this.state.show == 3 && (
                        <div>
                            <ComponentRelatedItems />
                        </div>
                    )}
                </div>
            </div>
        );
    };
}
