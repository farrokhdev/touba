import { Link } from "react-router-dom";
import { IconBag, IconBar, IconFacebook, IconInstagram, IconLinkdin, IconTwitter, IconTwoPerson, IconYoutube, ImageBrand } from "../../assets";
import { ButtonIcon } from "../components/button_icon";

export function TopNav() {
    return (
        <>
            <div className="top-nav">
                <div className="top-nav-brand">
                    <img
                        src={ImageBrand}
                        className="top-nav-brand-image"
                    />
                </div>
                <div className="top-nav-links">
                    <Link to="/" className="link">
                        <p className="text-link">HOME</p>
                    </Link>
                    <Link to="/" className="link">
                        <p className="text-link">HELP</p>
                    </Link>
                    <Link to="/" className="link">
                        <p className="text-link">Membership</p>
                    </Link>
                    <Link to="/" className="link">
                        <p className="text-link">ABOUT US</p>
                    </Link>
                    <Link to="/" className="link">
                        <p className="text-link">CONTACT US</p>
                    </Link>
                </div>
                <div className="top-nav-socials">
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
                <div className="top-nav-button-group">
                    <ButtonIcon icon={IconBag} />
                    <Link to="/login">
                        <ButtonIcon icon={IconTwoPerson} />
                    </Link>
                </div>
            </div>
            <div className="top-nav-minimal">
                <button className="border-0" style={{ backgroundColor: "transparent" }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                    <img src={IconBar} className="w-100" />
                </button>

                <div className="offcanvas offcanvas-start" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasTopLabel"></h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="top-nav-minimal-brand">
                            <img
                                src={ImageBrand}
                                className="top-nav-minimal-brand-image"
                            />
                            <div className="top-nav-minimal-brand-button-group">
                                <ButtonIcon icon={IconBag} />
                                <ButtonIcon icon={IconTwoPerson} />
                            </div>
                        </div>
                        <div className="top-nav-minimal-links">
                            <Link to="/" className="link">
                                <p className="text-link">HOME</p>
                            </Link>
                            <Link to="/" className="link">
                                <p className="text-link">HELP</p>
                            </Link>
                            <Link to="/" className="link">
                                <p className="text-link">Membership</p>
                            </Link>
                            <Link to="/" className="link">
                                <p className="text-link">ABOUT US</p>
                            </Link>
                            <Link to="/" className="link">
                                <p className="text-link">CONTACT US</p>
                            </Link>
                        </div>
                        <div className="top-nav-minimal-socials">
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
                </div>
            </div>
        </>
    )
}

export default TopNav;