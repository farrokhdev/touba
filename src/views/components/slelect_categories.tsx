import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback } from "react";
import { IconArrowWhite, IconCategory } from "../../assets";

interface Props {
    onOpen(status: boolean): void;
}

function SelectCategories({ onOpen }: Props): ReactElement {

    const handleOpenDropDown = useCallback(() => {
        onOpen(true)
    }, [onOpen]);

    return (
        <div className="select-categories">
            <button className="select-categories-button" onClick={handleOpenDropDown}>
                <p className="select-categories-button-text">
                    <img
                        src={IconCategory}
                        className="select-categories-button-text-icon"
                    />
                    CATEGORIES
                </p>
                <img
                    src={IconArrowWhite}
                    className="select-categories-button-icon-down"
                />
            </button>
        </div>
    )
}
export default memo(SelectCategories);