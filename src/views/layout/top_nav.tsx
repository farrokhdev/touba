import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IconBag,
  IconBar,
  IconFacebook,
  IconInstagram,
  IconLinkdin,
  IconTwitter,
  IconTwoPerson,
  IconYoutube,
  ImageBrand,
} from "../../assets";
import { ButtonIcon } from "../components/button_icon";
import { ComponentSearch, Divider } from "../components/components";

export function TopNav() {
  useEffect(() => {
    console.log("local", localStorage.getItem("token"));
  }, []);
  const location = useLocation();
  return (
    <div className="top-nav px-5">
      <div className="top-nav-items">
        <div className="top-nav-items-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "link active" : "link"}
          >
            <p className="text-link">HOME</p>
          </Link>
          <Link
            to="/help"
            className={location.pathname === "/help" ? "link active" : "link"}
          >
            <p className="text-link">HELP</p>
          </Link>
          <Link
            to="/membership"
            className={
              location.pathname === "/membership" ? "link active" : "link"
            }
          >
            <p className="text-link">Membership</p>
          </Link>
          <Link
            to="/about-us"
            className={
              location.pathname === "/about-us" ? "link active" : "link"
            }
          >
            <p className="text-link">ABOUT US</p>
          </Link>
          <Link
            to="/contact-us"
            className={
              location.pathname === "/contact-us" ? "link active" : "link"
            }
          >
            <p className="text-link">CONTACT US</p>
          </Link>
        </div>
        <div className="top-nav-items-socials">
          <Link to="/">
            <img src={IconInstagram} className="social-link" />
          </Link>
          <Link to="/">
            <img src={IconYoutube} className="social-link" />
          </Link>
          <Link to="/">
            <img src={IconTwitter} className="social-link" />
          </Link>
          <Link to="/">
            <img src={IconLinkdin} className="social-link" />
          </Link>
          <Link to="/">
            <img src={IconFacebook} className="social-link" />
          </Link>
        </div>
      </div>
      <Divider direction={"horizontal"} />
      <div className="top-nav-content">
        <div className="top-nav-content-brand">
          <img src={ImageBrand} className="top-nav-content-brand-image" />
        </div>
        <div className="top-nav-content-search">
          <ComponentSearch />
        </div>
        <div className="top-nav-content-button">
          <Link to="/login">
            <ButtonIcon icon={IconTwoPerson} nameButton={""} />
          </Link>

        </div>
      </div>
    </div>
  );
}

export default TopNav;
