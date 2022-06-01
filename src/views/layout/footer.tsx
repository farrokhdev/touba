import { Link } from "react-router-dom";
import { IconFacebook, IconInstagram, IconLinkdin, IconTwitter, IconYoutube, ImageBoxes, ImageBrandWhite } from "../../assets";


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
                <div className="footer-section-bottom-image-boxes">
                    <img src={ImageBoxes} />
                </div>
            </div>
            <div className="footer-section-top">
                <div className="footer-section-top-content">
                    <div className="footer-section-top-content-description">

                    </div>
                    <div className="footer-section-top-content-items">
                        <div className="footer-section-top-content-items-support">

                        </div>
                        <div className="footer-section-top-content-items-services">

                        </div>
                    </div>
                </div>
                <div  className="footer-section-top-content-links">

                </div>
            </div>
        </div>
    )
}

export default Footer;