import { memo, ReactElement, useState } from "react";
import { Button, ComponentProgress, Divider } from "./components";
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
    showProgress?: boolean;
}

export function SideNavItems({ items, onActive, showProgress }: Props): ReactElement {

    const [activeLink, setActiveLink] = useState(1);

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
                                    <ImageArrow title={item.title} image={item.icon} />
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
            {showProgress !== undefined && showProgress !== false ? (
                <div className="mt-5 px-2">
                    <ComponentProgress />
                    <div className="my-3">
                        <Divider direction="vertical" />
                    </div>
                    <ComponentProgress />
                    <div className="my-3">
                        <Divider direction="vertical" />
                    </div>
                    <ComponentProgress />
                    <div className="my-3">
                        <Divider direction="vertical" />
                    </div>
                    <ComponentProgress />
                    <div className="my-3">
                        <Divider direction="vertical" />
                    </div>
                    <Button title={"copmlete profile"} />
                </div>
            ) : (null)}
        </div>
    )
}
export default memo(SideNavItems);