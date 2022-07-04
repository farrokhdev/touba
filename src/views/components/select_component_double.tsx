import { memo, ReactElement, useCallback, useState } from "react";
import { IconArrow } from "../../assets";
import { Divider } from "./components";

type Items = {
    name: string;
    id: number;
}

interface Props {
    items1: Items[];
    items2: Items[];
}

function SelectComponentDouble({ items1, items2 }: Props): ReactElement {

    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);

    const handleShowDropDown1 = useCallback(() => {
        setDropdown1(!dropdown1);
    }, [dropdown1]);

    const handleCloseDropDown1 = () => {
        setDropdown1(false);
    };

    const handleShowDropDown2 = useCallback(() => {
        setDropdown2(!dropdown2);
    }, [dropdown2]);

    const handleCloseDropDown2 = () => {
        setDropdown2(false);
    };

    return (
        <div className="select-component-double">
            <div className="select-component-double-section-one" onMouseLeave={handleCloseDropDown1}>
                <div className="select-component-double-section-one-title">
                    <h6>
                        Sub-Category
                    </h6>
                </div>
                <div className="select-component-double-section-one-input" onClick={handleShowDropDown1}>
                    <h5 className="select-component-double-section-one-input-header">
                        Machines
                    </h5>
                    <img src={IconArrow} className="" />
                </div>
                {dropdown1 === true ? (
                    <div className="select-component-double-section-one-dropdown"
                        onMouseLeave={handleCloseDropDown1}
                    >
                        {items1?.map((link) => (
                            <div
                                className="select-component-double-section-one-dropdown-links">
                                <span
                                    key={link.id}
                                    className="select-component-double-section-one-dropdown-links-link"
                                >
                                    {link.name}
                                </span>
                            </div>
                        ))}
                    </div>
                ) : (null)}
            </div>
            <div className="select-component-double-section-divider">
                <Divider direction={"horizontal"} />
            </div>
            <div className="select-component-double-section-two" onMouseLeave={handleCloseDropDown2}>
                <div className="select-component-double-section-two-title">
                    <h6>
                        Category
                    </h6>
                </div>
                <div className="select-component-double-section-two-input" onClick={handleShowDropDown2}>
                    <h5 className="select-component-double-section-two-input-header">
                        Agriculture
                    </h5>
                    <img src={IconArrow} className="" />
                </div>
                {dropdown2 === true ? (
                    <div className="select-component-double-section-two-dropdown"
                        onMouseLeave={handleCloseDropDown2}
                    >
                        {items2?.map((link) => (
                            <div
                                className="select-component-double-section-two-dropdown-links">
                                <span
                                    key={link.id}
                                    className="select-component-double-section-two-dropdown-links-link"
                                >
                                    {link.name}
                                </span>
                            </div>
                        ))}
                    </div>
                ) : (null)}
            </div>
        </div>
    )
}
export default memo(SelectComponentDouble);