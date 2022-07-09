import { HTMLAttributes, MouseEvent, memo, ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { IconArrowBlack, IconArrowWhite, IconDot, ImageDropDown1, ImageDropDown2, ImageDropDown3, ImageDropDown4, ImageDropDown5, ImageDropDown6, ImageDropDown7, ImageStarInner } from "../../assets";
import { TextIconHorizontal } from "./components";
import Divider from "./divider";

type Submenu = {
    title: string;
    id: number;
}

const ITEM_DROPDOWN = [
    { icon: ImageStarInner, title: "ITEM NAME HERE", id: 1 },
    { icon: ImageDropDown1, title: "ITEM NAME HERE", id: 2 },
    { icon: ImageDropDown2, title: "ITEM NAME HERE", id: 3 },
    { icon: ImageDropDown3, title: "ITEM NAME HERE", id: 4 },
    { icon: ImageDropDown4, title: "ITEM NAME HERE", id: 5 },
    { icon: ImageDropDown5, title: "ITEM NAME HERE", id: 6 },
    { icon: ImageDropDown6, title: "ITEM NAME HERE", id: 7 },
    { icon: ImageDropDown7, title: "ITEM NAME HERE", id: 8 },
];

const ITEM_SUBMENU = [
    { title: "ITEM NAME HERE", id: 1 },
    { title: "ITEM NAME HERE", id: 2 },
    { title: "ITEM NAME HERE", id: 3 },
    { title: "ITEM NAME HERE", id: 4 },
    { title: "ITEM NAME HERE", id: 5 },
    { title: "ITEM NAME HERE", id: 6 },
];

interface PropsSubMenu {
    subMenu: Submenu[];
}

interface Props {
    onClose(event?: MouseEvent): void;
}

function SubMenu({ subMenu }: PropsSubMenu) {
    return (
        <div className="content-submenu">
            <div className="content-submenu-section">
                <div className="content-submenu-section-header">
                    <h4 className="content-submenu-section-header-text">
                        Title Here
                    </h4>
                </div>
                <div className="content-submenu-section-body">
                    {subMenu.map(item => (
                        <TextIconHorizontal
                            key={item.id}
                            icon={IconDot}
                            title={item.title}
                            showArrow={false}
                            active={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export function DropDownBottomMenu({onClose}: Props): ReactElement {
    const [active, setActive] = useState(0);

    function handleActiveLink(id: number) {
        setActive(id);
    }

    const handleCloseMenu = useCallback(() => {
        onClose()
    }, [onClose]);

    function handlePreventPropaggination (event: MouseEvent<HTMLElement>) {
        event.stopPropagation();
    }

    return (
        <div
            className="dropdown-bottom-menu"
            onMouseLeave={handleCloseMenu}
            onClick={handlePreventPropaggination}
        >
            <div className="section-rectangle">
                <div className="section-triggle"></div>
                <div className="content">
                    <div className="content-items">
                        {ITEM_DROPDOWN.map((name) => (
                            <div key={name.id}>
                                <TextIconHorizontal
                                    icon={name.icon}
                                    title={name.title}
                                    showArrow={true}
                                    active={active === name.id ? true : false}
                                    onClick={() => handleActiveLink(name.id)}
                                />
                                <Divider direction={"vertical"} />
                            </div>
                        ))}
                    </div>
                    <div className="content-divider"></div>
                    {active === 1 ? (
                        <div className="content-submenus">
                            <SubMenu subMenu={ITEM_SUBMENU} />
                            <SubMenu subMenu={ITEM_SUBMENU} />
                        </div>
                    ) : (
                        active === 2 ? (
                            <div className="content-submenus">
                                <SubMenu subMenu={ITEM_SUBMENU} />
                            </div>
                        ) : (
                            active === 3 ? (
                                <div className="content-submenus">
                                    <SubMenu subMenu={ITEM_SUBMENU} />
                                    <SubMenu subMenu={ITEM_SUBMENU} />
                                    <SubMenu subMenu={ITEM_SUBMENU} />
                                </div>
                            ) : (
                                active === 4 ? (
                                    <div className="content-submenus">
                                        <SubMenu subMenu={ITEM_SUBMENU} />
                                    </div>
                                ) : (
                                    active === 5 ? (
                                        <div className="content-submenus">
                                            <SubMenu subMenu={ITEM_SUBMENU} />
                                            <SubMenu subMenu={ITEM_SUBMENU} />
                                        </div>
                                    ) : (
                                        active === 6 ? (
                                            <div className="content-submenus">
                                                <SubMenu subMenu={ITEM_SUBMENU} />
                                                <SubMenu subMenu={ITEM_SUBMENU} />
                                                <SubMenu subMenu={ITEM_SUBMENU} />
                                            </div>
                                        ) : (
                                            active === 7 ? (
                                                <div className="content-submenus">
                                                    <SubMenu subMenu={ITEM_SUBMENU} />
                                                </div>
                                            ) : (
                                                <div className="content-submenus">
                                                    <SubMenu subMenu={ITEM_SUBMENU} />
                                                    <SubMenu subMenu={ITEM_SUBMENU} />
                                                </div>
                                            )
                                        )
                                    )

                                )
                            )
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
export default memo(DropDownBottomMenu);