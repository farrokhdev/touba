import {
    memo,
    ReactElement,
    useCallback,
    MouseEvent,
    ButtonHTMLAttributes
} from "react";
import { Link } from "react-router-dom";
import { IconArrow, IconArrowWhite } from "../../assets";

type LINKS = {
    nameLink: string;
    location: string;
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    links: LINKS[];
}

export function ButtonDropdown({ title, links }: Props): ReactElement {

    return (
        <div className="button-dropdown">
            <button
                className="button"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img src={IconArrowWhite} className="button-icon-arrow" />
                <p className="button-text">
                    {title}
                </p>
            </button>
            <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
            >
                {links.map((link, index) => (
                    <li>
                        <Link
                            className="dropdown-item"
                            to={link.location}
                        >
                            {link.nameLink}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default memo(ButtonDropdown);