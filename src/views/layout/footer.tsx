import { Link } from "react-router-dom";
import { IconDot, IconFacebookWhite, IconInstagramWhite, IconLinkdinWhite, IconTwitterWhite, IconYoutubeWhite, Image7, ImageBoxes, ImageBrandWhite, ImagePerson } from "../../assets";
import { Button } from "../components/components";

export function Footer() {

    return (
        <div className="footer">
            <div className="footer-section-bottom">
                <div className="footer-section-bottom-content">
                    <img
                        src={ImageBrandWhite}
                        className="footer-section-bottom-content-brand"
                    />
                    <p className="footer-section-bottom-content-description">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    </p>
                    <div className="footer-section-bottom-content-social">
                        <Link to="/">
                            <img src={IconInstagramWhite} className="social-link" />
                        </Link>
                        <Link to="/">
                            <img src={IconYoutubeWhite} className="social-link" />
                        </Link>
                        <Link to="/">
                            <img src={IconTwitterWhite} className="social-link" />
                        </Link>
                        <Link to="/">
                            <img src={IconLinkdinWhite} className="social-link" />
                        </Link>
                        <Link to="/">
                            <img src={IconFacebookWhite} className="social-link" />
                        </Link>
                    </div>
                </div>
                <div className="footer-section-bottom-image-boxes">
                    <img src={ImageBoxes} />
                </div>
                <div className="footer-section-bottom-name-brand">
                    <h5 className="footer-section-bottom-name-brand-text">
                        ALL RIGHTS RESERVED TO TOUBA CO.
                    </h5>
                </div>
            </div>
            <div className="footer-section-top">
                <div className="footer-section-top-content">
                    <div className="footer-section-top-content-description">
                        <div className="footer-section-top-content-description-body">
                            <h4 className="footer-section-top-content-description-body-title">
                                Have a product to sell?
                                Or an excess capacity to share?
                            </h4>
                            <p className="footer-section-top-content-description-body-text">
                                Get 7 Days premium touba account
                                for free!
                            </p>
                            <Button title="JOIN TOUBA NOW" />
                        </div>
                        <div className="footer-section-top-content-description-image">
                            <img src={Image7} />
                        </div>
                    </div>
                    <div className="footer-section-top-content-items">
                        <div className="footer-section-top-content-items-support">
                            <div className="footer-section-top-content-items-support-body">
                                <h4 className="footer-section-top-content-items-support-body-title">
                                    Have a question or need support?
                                </h4>
                                <h4 className="footer-section-top-content-items-support-body-email">
                                    info@toubaresources.com
                                </h4>
                                <Button title="CONTACT TOUBA" />
                            </div>
                            <div className="footer-section-top-content-items-support-image">
                                <img src={ImagePerson} />
                            </div>
                        </div>
                        <div className="footer-section-top-content-items-services">
                            <div className="list-services">
                                <h6 className="list-services-title">
                                    SERVICES
                                </h6>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    PRODUCT
                                </Link>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    SUPPLIERS
                                </Link>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    DEMANDERS
                                </Link>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    BROKERS
                                </Link>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    SIDE SERVICES
                                </Link>
                            </div>
                            <div className="list-services">
                                <h6 className="list-services-title">
                                    SERVICES
                                </h6>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    PRODUCT
                                </Link>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    SUPPLIERS
                                </Link>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    DEMANDERS
                                </Link>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    BROKERS
                                </Link>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    SIDE SERVICES
                                </Link>
                            </div>
                            <div className="list-services">
                                <h6 className="list-services-title">
                                    SERVICES
                                </h6>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    PRODUCT
                                </Link>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    SUPPLIERS
                                </Link>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    DEMANDERS
                                </Link>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    BROKERS
                                </Link>
                                <Link to="/" className="list-services-link">
                                    <img src={IconDot} />
                                    SIDE SERVICES
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-section-top-links">
                    <Link to="/">
                        PRODUCT LISTING POLICY
                    </Link>
                    <Link to="/">
                        INTELLECTUAL PROPERTY PROTECTION
                    </Link>
                    <Link to="/">
                        PRIVACY POLICY
                    </Link>
                    <Link to="/">
                        TERMS OF USE
                    </Link>
                    <Link to="/">
                        USER INFORMATION LEGAL ENQUIRY GUIDE
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;