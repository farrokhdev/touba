import { memo, ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { default as IconArrow } from "../../assets/icons/icon-arrow.svg";
import { Divider } from "./components";

type Items = {
    name: string;
    id: number;
}

type Select = {
    name: string;
    id: number;
}

interface Props {
    type: "one" | "two";
    placeholder?: string;
    items?: Items[];
}

function SelectComponent({ type, placeholder, items }: Props): ReactElement {

    const [dropdown, setDropdown] = useState(false);
    const [selectItem, setSelectItem] = useState({ name: "", id: 0 });

    const handleShowDropDown = useCallback(() => {
        setDropdown(!dropdown);
    }, [dropdown]);

    const handleCloseDropDown = () => {
        setDropdown(false);
    };

    const handleSelectItem = (id: number, name: string) => {
        setSelectItem({ name, id });
    };

    return (
        <div className="select-component w-100 "
            onMouseLeave={handleCloseDropDown}
        >
            <button
                className="select-component-button w-100"
                onClick={handleShowDropDown}
            >
                {type === "one" ? (
                    <img
                        src={IconArrow}
                        className="select-component-button-icon"
                    />
                ) : (null)}

                <h3 className="select-component-button-text">
                    {placeholder}
                </h3>
                {type === "two" ? (
                    <img
                        src={IconArrow}
                        className="select-component-button-icon"
                    />
                ) : (null)}
            </button>
            {dropdown === true ? (
                <div className="select-component-dropdown"
                    onMouseLeave={handleCloseDropDown}
                >
                    {items?.map((link) => (
                        <div className="select-component-dropdown-links">
                            <span
                                key={link.id}
                                className="select-component-dropdown-links-link"
                                onClick={() => handleSelectItem(link.id, link.name)}
                            >
                                {link.name}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (null)}
        </div>
    )
}
export default memo(SelectComponent);