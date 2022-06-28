import {
    HTMLAttributes,
    memo,
    ReactElement,
    useEffect,
    useState,

} from "react";
import { IconClose } from "../../assets";
import { Divider, MessangerTab } from "./components";

interface Props extends HTMLAttributes<HTMLElement> {
    onActive(number: number): void;
}

export function Offcanvas({ children, onActive }: Props): ReactElement {

    const [active, setActive] = useState(1);
    
    useEffect(() => {
        onActive(active)
    }, [active]);

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
                        <MessangerTab state={active} setState={setActive} />
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