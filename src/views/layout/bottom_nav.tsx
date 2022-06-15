import { useCallback, useState, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IconBar,
  IconDot,
  ImageDropDown1,
  ImageDropDown2,
  ImageDropDown3,
  ImageDropDown4,
  ImageDropDown5,
  ImageDropDown6,
  ImageDropDown7,
  ImageStarInner,
} from "../../assets";
import {
  Button,
  ButtonDropdown,
  DropDown,
  Divider,
  SelectCategories,
  TextIconHorizontal,
  TextIconVertical,
  DropDownBottomMenu,
} from "../components/components";

const TEST = [
  { nameLink: "link1", location: "/supplier" },
  { nameLink: "link2", location: "/" },
  { nameLink: "link3", location: "/" },
  { nameLink: "link4", location: "/" },
  { nameLink: "link5", location: "/" },
];

const sideService = [
  { nameLink: "link1", location: "/side-service" },
  { nameLink: "link2", location: "/" },
  { nameLink: "link3", location: "/" },
  { nameLink: "link4", location: "/" },
  { nameLink: "link5", location: "/" },
];

const ITEM_DROPDOWN = [
  { icon: ImageStarInner, title: "ITEM NAME HERE", id: 1 },
  { icon: ImageDropDown1, title: "ITEM NAME HERE", id: 2 },
  { icon: ImageDropDown2, title: "ITEM NAME HERE", id: 3 },
  { icon: ImageDropDown3, title: "ITEM NAME HERE", id: 4 },
  { icon: ImageDropDown4, title: "ITEM NAME HERE", id: 5 },
  { icon: ImageDropDown5, title: "ITEM NAME HERE", id: 6 },
  { icon: ImageDropDown6, title: "ITEM NAME HERE", id: 7 },
  { icon: ImageDropDown7, title: "ITEM NAME HERE", id: 8 },
];

export function BottomNav() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showMinimalDropDown, setShowMinimalDropDown] = useState(false);
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  
  function handleActiveLink(id: number) {
    setActive(id);
  }
  function handleshowDropDown(status: boolean) {
    setShowDropDown(status);
  }

  function handleCloseDropDown() {
    setShowDropDown(false);
  }

  const handleshowMinimalDropDown = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      setShowMinimalDropDown(!showMinimalDropDown);
    },
    [showMinimalDropDown]
  );
  const navigator = (page: string) => {
    navigate(page);
  };
  function handleNavigationSpecial() {
    navigate("/special-offer")
  }
  function handleNavigationProduct() {
    navigate("/detail-product")
  }

  return (
    <>
      <div className="bottom-nav px-5">
        <div className="bottom-nav-items">
          <div className="bottom-nav-items-search">
            <SelectCategories onOpen={handleshowDropDown} />
          </div>
          <div className="bottom-nav-items-links">
            <Button
              onClick={() => navigator("/excess")}
              title={"EXCESS CAPACITY"}
            />
            <Button onClick={() => navigator("/product")} title={"PRODUCT"} />
            <ButtonDropdown title={"SUPPLIERS"} links={TEST} />
            <ButtonDropdown title={"DEMANDERS"} links={[]} />
            <ButtonDropdown title={"BROKERS"} links={[]} />
            <ButtonDropdown title={"SIDE SERVICES"} links={sideService} />
            <Button title={"SPECIAL OFFERS"} onClick={handleNavigationSpecial} />
            <Button title={"MAP"} />
          </div>
          {showDropDown === true ? (
            <DropDownBottomMenu onClose={handleCloseDropDown} />
          ) : null}
        </div>
      </div>
      <div className="bottom-nav-minimal">
        <button
          className="border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMinimal"
          aria-controls="offcanvasMinimal"
        >
          <img src={IconBar} className="w-100" />
        </button>
        <div
          className="offcanvas offcanvas-start"
          id="offcanvasMinimal"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasTopLabel"></h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <Link to="/">EXCESS CAPACITY</Link>
            <Link to="/">PRODUCT</Link>

            <DropDown title={"SUPPLIERS"} links={TEST} />
            <DropDown title={"DEMANDERS"} links={[]} />
            <DropDown title={"BROKERS"} links={[]} />
            <DropDown title={"SIDE SERVICES"} links={[]} />
            <Link to="/">SPECIAL OFFERS</Link>
            <Link to="/">MAP</Link>
            <DropDown
              title={"CATEGORIES"}
              links={[]}
              onClick={handleshowMinimalDropDown}
            />
            {showMinimalDropDown === true ? (
              <div>
                {ITEM_DROPDOWN.map((name) => (
                  <div key={name.id}>
                    <TextIconVertical
                      icon={name.icon}
                      title={name.title}
                      showArrow={true}
                      active={active === name.id ? true : false}
                      onClick={() => handleActiveLink(name.id)}
                    />
                    <Divider />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomNav;
