import { useState } from "react";
import {
    IconDot,
    ImageDropDown1,
    ImageDropDown2,
    ImageDropDown3,
    ImageDropDown4,
    ImageDropDown5,
    ImageDropDown6,
    ImageDropDown7,
    ImageStarInner
} from "../../assets";
import {
    Button,
    ButtonDropdown,
    Hr,
    SelectCategories,
    TextIconHorizontal
} from "../components/components";

const TEST = [
    { nameLink: "link1", location: "/" },
    { nameLink: "link2", location: "/" },
    { nameLink: "link3", location: "/" },
    { nameLink: "link4", location: "/" },
    { nameLink: "link5", location: "/" },
];

const ITEM_DROPDOWN = [
    { icon: ImageStarInner, title: "ITEM NAME HERE", id: 1 },
    { icon: ImageDropDown1, title: "ITEM NAME HERE", id: 2 },
    { icon: ImageDropDown2, title: "ITEM NAME HERE", id: 3 },
    { icon: ImageDropDown3, title: "ITEM NAME HERE", id: 4 },
    { icon: ImageDropDown4, title: "ITEM NAME HERE", id: 5 },
    { icon: ImageDropDown5, title: "ITEM NAME HERE", id: 6 },
    { icon: ImageDropDown6, title: "ITEM NAME HERE", id: 7 },
    { icon: ImageDropDown7, title: "ITEM NAME HERE", id: 8 },
]

export function BottomNav() {

    const [showDropDown, setShowDropDown] = useState(false);
    const [active, setActive] = useState(0);

    function handleshowDropDown(status: boolean) {
        setShowDropDown(status);
    }

    function handleCloseDropDown() {
        setShowDropDown(false);
        setActive(0);
    }

    function handleActiveLink(id: number) {
        setActive(id);
    }

    return (
        <div className="bottom-nav">
            <div className="bottom-nav-search">
                <SelectCategories onOpen={handleshowDropDown} />
            </div>
            <div className="bottom-nav-links">
                <Button title={"EXCESS CAPACITY"} />
                <Button title={"PRODUCT"} />
                <ButtonDropdown title={"SUPPLIERS"} links={TEST} />
                <ButtonDropdown title={"DEMANDERS"} links={[]} />
                <ButtonDropdown title={"BROKERS"} links={[]} />
                <ButtonDropdown title={"SIDE SERVICES"} links={[]} />
                <Button title={"SPECIAL OFFERS"} />
                <Button title={"MAP"} />
            </div>
            { showDropDown === true ? (
                <div className="bottom-nav-dropdown" onMouseLeave={handleCloseDropDown}>
                    <div className="section-rectangle">
                        <div className="section-triggle">
                        </div>
                        <div className="content">
                            <div className="content-items">
                                {ITEM_DROPDOWN.map(name => (
                                    <div key={name.id}>
                                        <TextIconHorizontal
                                            icon={name.icon}
                                            title={name.title}
                                            showArrow={true}
                                            active={active === name.id ? true : false}
                                            onClick={() => handleActiveLink(name.id)}
                                        />
                                        <Hr />
                                    </div>
                                ))}
                            </div>
                            <div className="content-divider">

                            </div>
                            <div className="content-submenus">
                                <div className="content-submenus-section">
                                    <div className="content-submenus-section-header">
                                        <h4 className="content-submenus-section-header-text">
                                            Title Here
                                        </h4>
                                    </div>
                                    <div className="content-submenus-section-body">
                                        <TextIconHorizontal icon={IconDot} title={"Sub-Menu-Here"} showArrow={false} active={false} />
                                        <TextIconHorizontal icon={IconDot} title={"Sub-Menu-Here"} showArrow={false} active={false} />
                                        <TextIconHorizontal icon={IconDot} title={"Sub-Menu-Here"} showArrow={false} active={false} />
                                        <TextIconHorizontal icon={IconDot} title={"Sub-Menu-Here"} showArrow={false} active={false} />
                                        <TextIconHorizontal icon={IconDot} title={"Sub-Menu-Here"} showArrow={false} active={false} />
                                        <TextIconHorizontal icon={IconDot} title={"Sub-Menu-Here"} showArrow={false} active={false} />
                                    </div>
                                </div>
                                <div className="content-submenus-section">
                                    <div className="content-submenus-section-header">
                                        <h4 className="content-submenus-section-header-text">
                                            Title Here
                                        </h4>
                                    </div>
                                    <div className="content-submenus-section-body">
                                        <TextIconHorizontal icon={IconDot} title={"Sub-Menu-Here"} showArrow={false} active={false} />
                                        <TextIconHorizontal icon={IconDot} title={"Sub-Menu-Here"} showArrow={false} active={false} />
                                        <TextIconHorizontal icon={IconDot} title={"Sub-Menu-Here"} showArrow={false} active={false} />
                                        <TextIconHorizontal icon={IconDot} title={"Sub-Menu-Here"} showArrow={false} active={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (null)}
        </div>
    )
}

export default BottomNav;