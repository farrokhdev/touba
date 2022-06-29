import { HTMLAttributes, MouseEvent, memo, ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { IconArrowBlack, IconArrowWhite } from "../../assets";

export type LINKS = {
    nameLink: string;
    location: string;
}

interface Props extends HTMLAttributes<HTMLElement> {
    title: string;
    links: LINKS[];
}

function DropDown({ title, links, onClick }: Props): ReactElement {

    const [showDropDown, setShowDropDown] = useState(false);

    const handleShowDropDown = useCallback(() => {
        setShowDropDown(!showDropDown)
    }, [showDropDown]);

    const handleOnClick = useCallback((event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        onClick?.(event);
    }, [onClick])

    return (
        <div className="dropdown-component" onClick={handleOnClick}>
            <div className="dropdown-component-button" onClick={handleShowDropDown}>
                <h4 className="dropdown-component-button-text">
                    {title}
                </h4>
                <img
                    src={IconArrowBlack}
                    className="dropdown-component-button-icon"
                />
            </div>
            {showDropDown === true ? (
                <div className="dropdown-component-items">
                    {links.map((link, index) => (
                        <Link key={index} to={link.location}>
                            {link.nameLink}
                        </Link>
                    ))}
                </div>
            ) : (null)}
        </div>
    )
}
export default memo(DropDown);