import { memo, ReactElement, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Divider } from "./components";
import { ImageArrow } from "./image_arrow";

export type navItems = {
    title: string;
    time?: string;
    notification?: number;
    icon?: string;
    id: number;
}

interface Props {
    items: navItems[];
    onActive(id: number): void;
}

export function SideNavItems({ items, onActive }: Props): ReactElement {

    const [activeLink, setActiveLink] = useState(0)

    function handleActiveLink(id: number) {
        setActiveLink(id);
        onActive(id);
    }

    return (
        <div className="side-nav">
            <div className="side-nav-items">
                {items.map(item => (
                    <div key={item.id}>
                        <button
                            key={item.id}
                            onClick={() => handleActiveLink(item.id)}
                            className={
                                item.id === activeLink ?
                                    "side-nav-items-link active" :
                                    "side-nav-items-link"
                            }

                        >
                            {item.id === activeLink ? (
                                <div className="side-nav-items-link-content-active">
                                    <ImageArrow title={item.title} />
                                </div>
                            ) : (
                                <div
                                    className={
                                        item.notification === 0 ?
                                            "side-nav-items-link-content item-disabled" :
                                            "side-nav-items-link-content"
                                    }
                                >
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="side-nav-items-link-content-icon"
                                    />
                                    <h5 className="side-nav-items-link-content-title">
                                        {item.title}
                                        <p className="side-nav-items-link-content-title-time">
                                            {item.time}
                                        </p>
                                    </h5>
                                </div>
                            )}
                            {
                                item.notification === undefined ||
                                    item.notification === 0 ||
                                    item.id === activeLink ?
                                    (null)
                                    :
                                    (
                                        <div className="side-nav-items-link-notification">
                                            <span>
                                                {item.notification}
                                            </span>
                                        </div>
                                    )}
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default memo(SideNavItems);