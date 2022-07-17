import BasicInformationExcess from "../../../components/basic_information_excess";
import { SideNavItems } from "../../../components/side_nav_items";
import CompanyProfileProductController from "../../../controllers/dashboard_company_profile_controller";
import OtherDetail from "../company_profile_product/other_detail";
import RelatedItems from "../company_profile_product/related_items";
import TradeInformation from "../company_profile_product/trade_information";

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
                            <OtherDetail />
                        </div>
                    )}
                    {this.state.show == 2 && (
                        <div>
                            <TradeInformation />
                        </div>
                    )}
                    {this.state.show == 3 && (
                        <div>
                            <RelatedItems />
                        </div>
                    )}
                </div>
            </div>
        );
    };
}
