import { Component } from "react";
import { IconCalling, IconShop, ImageJuicer, ImageManWithBox } from "../../assets";
import { BannerCongratulations, Calendar, CardOverall, CardProductGroupTitle, ChartDoughnut, ChartSale, ImageArrow, TableTransaction } from "../components/components";
import { SideNavItems } from "../components/side_nav_items";

const TEST_NAV_ITEM = [
    {
        title: "Group Title 1",
        time: "2 MINS",
        notification: 0,
        location: "/test",
        id: 1
    },
    {
        title: "Group Title 2",
        notification: 10,
        icon: `${IconCalling}`,
        location: "/",
        id: 2
    },
    {
        title: "Group Title 3",
        time: "2 MINS",
        notification: 0,
        location: "/",
        id: 3
    },
    {
        title: "Group Title 4",
        location: "/",
        id: 4
    },
]


class PageTestComponents extends Component {
    render() {
        return (
            <div className="mx-1 ">
                <div>
                    <h1>New Image and Icon</h1>
                    <img src={ImageJuicer} alt="" />
                    <img src={IconShop} alt="" className="mx-5" />
                    <img src={ImageManWithBox} className="mx-5" />
                </div>
                <h1>
                    New Components
                </h1>
                <div style={{ width: "315px", height: "100vh" }}>
                    <SideNavItems items={TEST_NAV_ITEM} />
                </div>
                <div className="mx-auto" style={{ width: "752px", height: "573px" }}>
                    <CardProductGroupTitle />
                </div>
                <div style={{ width: "347px", height: "162px" }}>
                    <ChartDoughnut dataChart={["152423", "242423"]} />
                </div>
                <TableTransaction items={[]} />
                <div style={{ width: "390px", height: "100px" }}>
                    <CardOverall
                        image={IconShop}
                        type={"Product"}
                        amountSold={120524}
                        amountBought={35183}
                    />
                </div>
                <div style={{ width: "390px", height: "100px" }}>
                    <ChartSale />
                </div>
                <div className="mx-auto my-5" style={{ width: "347px", height: "383px" }}>
                    <Calendar />
                </div>
                <div style={{ width: "1525px", height: "155px" }}>
                    <BannerCongratulations/>
                </div>
            </div>
        )
    }
}

export default PageTestComponents;