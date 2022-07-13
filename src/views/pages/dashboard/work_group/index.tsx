import { CardProductGroupTitle, SideNavItems } from "../../../components/components";
import DashboardNav from "../../../components/dashboard_nav";
import WorkGroupController from "../../../controllers/work_group_controller";


class WorkGroup extends WorkGroupController {

    render() {
        return (
            <div className="work-group">
                <DashboardNav title={"Work Groups"} />
                <div className="work-group-body">
                    <div className="work-group-body-side-nav">
                        <SideNavItems
                            items={this.TEST_NAV_ITEM}
                            onActive={() => { }}
                        />
                    </div>
                    <div className="work-group-body-content">
                        <CardProductGroupTitle items={this.ITEMS_CARD_CAHT} />
                        <CardProductGroupTitle items={this.ITEMS_CARD_CAHT} />
                    </div>
                </div>
            </div>
        )
    }

}

export default WorkGroup;