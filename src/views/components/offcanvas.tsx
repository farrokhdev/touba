import {
    HTMLAttributes,
    memo,
    ReactElement,

} from "react";
import { IconClose } from "../../assets";
import { Divider, MessangerTab } from "./components";

interface Props extends HTMLAttributes<HTMLElement> {

}

export function Offcanvas({ children }: Props): ReactElement {

    return (
        <div className="offcanvas-component">

            <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="title" id="offcanvasRightLabel">Tooba Messenger</h5>
                    <button type="button" className="button-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <img src={IconClose} />
                    </button>
                </div>
                <div className="offcanvas-body px-4">
                    <div className="button-group">
                        <MessangerTab state={3} setState={undefined} />
                    </div>
                    <div className="content">
                        <h6 className="content-title">
                            Group Chats
                        </h6>
                        <Divider direction={"vertical"} />
                        <div className="content-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Offcanvas);