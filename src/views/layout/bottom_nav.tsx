import { useState } from "react";
import { Button, ButtonDropdown, ComponentSearch, SelectCategories } from "../components/components";

const TEST = [
    { nameLink: "link1", location: "/" },
    { nameLink: "link2", location: "/" },
    { nameLink: "link3", location: "/" },
    { nameLink: "link4", location: "/" },
    { nameLink: "link5", location: "/" },
]

export function BottomNav() {

    const [showDropDown, setShowDropDown] = useState(false);

    function handleshowDropDown(status: boolean) {
        setShowDropDown(status);
    }
    
    function handleCloseDropDown() {
        setShowDropDown(false);
    }

    return (
        <div className="bottom-nav">
            <div className="bottom-nav-search">
                <SelectCategories onOpen={handleshowDropDown} />
            </div>
            <div className="bottom-nav-links">
                <Button title={"EXCESS CAPACITY"} />
                <Button title={"PRODUCT"} />
                <ButtonDropdown title={"SUPPLIERS"} links={TEST} />
                <ButtonDropdown title={"DEMANDERS"} links={[]} />
                <ButtonDropdown title={"BROKERS"} links={[]} />
                <ButtonDropdown title={"SIDE SERVICES"} links={[]} />
                <Button title={"SPECIAL OFFERS"} />
                <Button title={"MAP"} />
            </div>
            {showDropDown === true ? (
                <div className="bottom-nav-dropdown" onMouseLeave={handleCloseDropDown}>
                    <div className="section-rectangle">
                        <div className="section-triggle">

                        </div>

                    </div>
                </div>
            ) : (null)}
        </div>
    )
}

export default BottomNav;