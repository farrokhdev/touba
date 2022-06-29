import { Component } from "react";
import { IconCalling } from "../../assets";
import { ImageArrow } from "../components/components";
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
        icon: ``,
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
            <div className="mx-1">
                <div style={{ width: "315px", height:"100vh" }}>
                    <SideNavItems items={TEST_NAV_ITEM} />
                </div>
            </div>
        )
    }
}

export default PageTestComponents;