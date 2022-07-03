import { memo, ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { Divider } from "./components";
import { ImageArrow } from "./image_arrow";

export type navItems = {
    title: string;
    time?: string;
    notification?: number;
    icon?: string;
    location: string;
    id: number;
}

interface Props {
    items: navItems[];
}

export function SideNavItems({ items }: Props): ReactElement {

    const url = useLocation().pathname;

    return (
        <div className="side-nav">
            <div className="side-nav-items">
                {items.map(item => (
                    <>
                        <Link
                            key={item.id}
                            to={item.location}
                            className={
                                item.location ===  url ?
                                    "side-nav-items-link active" :
                                    "side-nav-items-link"
                            }

                        >
                            {item.location ===  url ? (
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
                                    item.location ===  url ?
                                    (null)
                                    :
                                    (
                                        <div className="side-nav-items-link-notification">
                                            <span>
                                                {item.notification}
                                            </span>
                                        </div>
                                    )}
                        </Link>
                    </>
                ))}
            </div>

        </div>
    )
}
export default memo(SideNavItems);