import {
    memo,
    ReactElement,
    useState,
    MouseEvent,
    HTMLAttributes
} from "react";
import { IconClose } from "../../assets";
import { Divider } from "./components";

interface Props extends HTMLAttributes<HTMLElement>{
    onClose(): void;
    onSave(): void;
}

export function ModalCompany({ onClose, children, onSave }: Props): ReactElement {

    function handlePreventOnClick(event: MouseEvent<HTMLElement>) {
        event.stopPropagation();
    }

    return (
        <div className="modal-company" onClick={onClose}>
            <div className="modal-company-card" onClick={handlePreventOnClick}>
                <div className="modal-company-card-header">
                    <h4 className="modal-company-card-header-title">
                        Company Introduction
                    </h4>
                    <span className="modal-company-card-header-close" onClick={onClose}>
                        <img src={IconClose} alt="" />
                    </span>
                </div>
                <Divider direction={"vertical"} />
                <div className="modal-company-card-content">
                    {children}
                </div>
                <Divider direction={"vertical"} />
                <div className="modal-company-card-footer">
                    <button className="modal-company-card-footer-button-save" onClick={onSave}>
                        <h5 className="modal-company-card-footer-button-save-text">
                            SAVE CHANGES
                        </h5>
                    </button>
                    <button className="modal-company-card-footer-button-cancel" onClick={onClose}>
                        <h5 className="modal-company-card-footer-button-cancel-text">
                            CANCEL
                        </h5>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default memo(ModalCompany);