import { IconArrowGreen, ImageProfileSupplier, IconMessages, ImagecompanyProfileTeam, ImageCertificate } from "../../../../assets";
import CompanyProfileController from "../../../controllers/company_profile_controller";

export default class About extends CompanyProfileController {
    render() {
        return (
            <>
                <div className="smalText p-4 px-4">
                    {"You are here: Touba >> Suppliers >> Company Name >> About"}
                </div>
                <div className="d-flex flex-row align-items-start content-Conteiner">
                    <div className="sidebar">
                        <div className="menu">
                            <span className="title">About</span>
                            <ul>
                                <li>
                                    <span>Company Profile</span>
                                    <img src={IconArrowGreen} />
                                </li>
                                <li>
                                    <span> Trade Capacity</span>
                                    <img src={IconArrowGreen} />
                                </li>
                                <li>
                                    <span> Certificates</span>
                                    <img src={IconArrowGreen} />
                                </li>
                                <li>
                                    <span> Production Capacity</span>
                                    <img src={IconArrowGreen} />
                                </li>
                                <li>
                                    <span> Company Show</span>
                                    <img src={IconArrowGreen} />
                                </li>
                            </ul>
                        </div>
                        <div className="supplier">
                            <span className="title">Contact Supplier</span>
                            <div className="d-flex flex-row align-items-center supplier-Info">
                                <img src={ImageProfileSupplier} alt="profile" />
                                <div className="d-flex flex-column align-items-start mx-3">
                                    <span className="pb-2">Name Here</span>
                                    <span>Sales Manager</span>
                                </div>
                            </div>
                            <button>
                                <img src={IconMessages} alt="message" className="mx-3" />
                                <span>Message Supplier</span>
                            </button>
                        </div>
                    </div>
                    <div className="company-Profile-Content">
                        <div>
                            <div className="company">
                                <span className="title">Company Profile</span>
                                <img src={ImagecompanyProfileTeam} alt="prfileCompany" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                    quis nostrud exerci tation ullamcorper suscipit lobortis
                                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                                    iriure dolor in hendrerit in vulputate velit esse molestie
                                    consequat, vel illum dolore eu feugiat nulla facilisis at
                                    vero eros et accumsan et iusto odio dignissim qui blandit
                                    praesent luptatum zzril delenit augue duis dolore te feugait
                                    nulla facilisi.
                                </p>
                                <p>
                                    <span className="title">Competitive Advantages</span>
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                    quis nostrud exerci tation ullamcorper suscipit lobortis
                                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                                    iriure dolor in hendrerit in vulputate velit esse molestie
                                    consequat, vel illum dolore eu feugiat nulla facilisis at
                                    vero eros et accumsan et iusto odio dignissim qui blandit
                                    praesent luptatum zzril delenit augue duis dolore te feugait
                                    nulla facilisi.
                                </p>
                                <ul>
                                    <li>
                                        <span className="field-Name">Established Year</span>
                                        <span className="field-Content">2015</span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Business Type:</span>
                                        <span className="field-Content">
                                            Manufacturer/Factory
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Business Category</span>
                                        <span className="field-Content">
                                            Cosmetic and Hygiene
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Main Products:</span>
                                        <span className="field-Content redText">
                                            Milk Powder , Food Powders , Food raw materials
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Main Products:</span>
                                        <span className="field-Content redText">
                                            Wheel Loader , Forklift , Excavator , Tractor ,
                                            Bulldozer , Roadroller , Trailer , Telescopic ...
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Main Market:</span>
                                        <span className="field-Content redText">
                                            Iran , Iraq , Turkey{" "}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Number of empolyee</span>
                                        <span className="field-Content">3000</span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Registered Capital:</span>
                                        <span className="field-Content">2000000 RMB</span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Plant Area:</span>
                                        <span className="field-Content">
                                            {">2000 square meters"}{" "}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Factory Size:</span>
                                        <span className="field-Content">Size</span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Payment Methode:</span>
                                        <span className="field-Content">Paypal, Cash</span>
                                    </li>
                                    <li>
                                        <span className="field-Name">
                                            Management System Certification:
                                        </span>
                                        <span className="field-Content">
                                            ISO 9001, ISO 9000, ISO 14001, ISO 14000, ISO 20000,
                                            OHSAS/ OHSMS 18001, IATF16949, HSE, ...
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Average Lead Time:</span>
                                        <span className="field-Content">
                                            Peak Season Lead Time: one month, Off Season Lead Time:
                                            within 15 workdays
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">SGS Serial NO. :</span>
                                        <span className="field-Content">QIP-ASI185372</span>
                                        <span className="greenText">Report Verification</span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Average Lead Time:</span>
                                        <span className="field-Content">
                                            Peak Season Lead Time: one month, Off Season Lead Time:
                                            within 15 workdays
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">SGS Serial NO. :</span>
                                        <span className="field-Content">QIP-ASI185372</span>
                                        <span className="greenText">Report Verification</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="company">
                                <span className="title">Trade Capacity</span>

                                <ul>
                                    <li className="d-none"></li>

                                    <li>
                                        <span className="field-Name">Business Type:</span>
                                        <span className="field-Content">
                                            Manufacturer/Factory
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Main Products:</span>
                                        <span className="field-Content redText">
                                            Wheel Loader , Forklift , Excavator , Tractor ,
                                            Bulldozer , Roadroller , Trailer , Telescopic ...
                                        </span>
                                    </li>

                                    <li>
                                        <span className="field-Name">Registered Capital:</span>
                                        <span className="field-Content">2000000 RMB</span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Plant Area:</span>
                                        <span className="field-Content">
                                            {">2000 square meters"}{" "}
                                        </span>
                                    </li>

                                    <li>
                                        <span className="field-Name">
                                            Management System Certification:
                                        </span>
                                        <span className="field-Content">
                                            ISO 9001, ISO 9000, ISO 14001, ISO 14000, ISO 20000,
                                            OHSAS/ OHSMS 18001, IATF16949, HSE, ...
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Average Lead Time:</span>
                                        <span className="field-Content">
                                            Peak Season Lead Time: one month, Off Season Lead Time:
                                            within 15 workdays
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">SGS Serial NO. :</span>
                                        <span className="field-Content">QIP-ASI185372</span>
                                        <span className="greenText">Report Verification</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="company">
                                <span className="title">Certificates</span>
                                <div className="d-flex flex-row">
                                    <ul>
                                        <li className="d-none"></li>
                                        <li>
                                            <span className="field-Name">Certificate:</span>
                                            <span className="field-Content">Certificate Name </span>
                                        </li>
                                        <li>
                                            <span className="field-Name">Code:</span>
                                            <span className="field-Content">1651316465</span>
                                        </li>

                                        <li>
                                            <span className="field-Name">Registered Date:</span>
                                            <span className="field-Content">1/31/2021</span>
                                        </li>
                                        <li>
                                            <span className="field-Name">Expire Date:</span>
                                            <span className="field-Content">7/31/2023</span>
                                        </li>

                                        <li className="imageField">
                                            <img src={ImageCertificate} alt="cetificate" />
                                        </li>
                                    </ul>
                                    <ul className="ms-3">
                                        <li className="d-none"></li>

                                        <li>
                                            <span className="field-Name">Certificate:</span>
                                            <span className="field-Content">Certificate Name </span>
                                        </li>
                                        <li>
                                            <span className="field-Name">Code:</span>
                                            <span className="field-Content">1651316465</span>
                                        </li>

                                        <li>
                                            <span className="field-Name">Registered Date:</span>
                                            <span className="field-Content">1/31/2021</span>
                                        </li>
                                        <li>
                                            <span className="field-Name">Expire Date:</span>
                                            <span className="field-Content">7/31/2023</span>
                                        </li>

                                        <li className="imageField">
                                            <img src={ImageCertificate} alt="cetificate" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="company">
                                <span className="title">Production Capacity</span>

                                <ul>
                                    <li className="d-none"></li>

                                    <li>
                                        <span className="field-Name">Business Type:</span>
                                        <span className="field-Content">
                                            Manufacturer/Factory
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Main Products:</span>
                                        <span className="field-Content redText">
                                            Wheel Loader , Forklift , Excavator , Tractor ,
                                            Bulldozer , Roadroller , Trailer , Telescopic ...
                                        </span>
                                    </li>

                                    <li>
                                        <span className="field-Name">Registered Capital:</span>
                                        <span className="field-Content">2000000 RMB</span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Plant Area:</span>
                                        <span className="field-Content">
                                            {">2000 square meters"}{" "}
                                        </span>
                                    </li>

                                    <li>
                                        <span className="field-Name">
                                            Management System Certification:
                                        </span>
                                        <span className="field-Content">
                                            ISO 9001, ISO 9000, ISO 14001, ISO 14000, ISO 20000,
                                            OHSAS/ OHSMS 18001, IATF16949, HSE, ...
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Average Lead Time:</span>
                                        <span className="field-Content">
                                            Peak Season Lead Time: one month, Off Season Lead Time:
                                            within 15 workdays
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">SGS Serial NO. :</span>
                                        <span className="field-Content">QIP-ASI185372</span>
                                        <span className="greenText">Report Verification</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="company">
                                <span className="title">Company Show</span>

                                <ul>
                                    <li className="d-none"></li>

                                    <li>
                                        <span className="field-Name">Business Type:</span>
                                        <span className="field-Content">
                                            Manufacturer/Factory
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Main Products:</span>
                                        <span className="field-Content redText">
                                            Wheel Loader , Forklift , Excavator , Tractor ,
                                            Bulldozer , Roadroller , Trailer , Telescopic ...
                                        </span>
                                    </li>

                                    <li>
                                        <span className="field-Name">Registered Capital:</span>
                                        <span className="field-Content">2000000 RMB</span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Plant Area:</span>
                                        <span className="field-Content">
                                            {">2000 square meters"}{" "}
                                        </span>
                                    </li>

                                    <li>
                                        <span className="field-Name">
                                            Management System Certification:
                                        </span>
                                        <span className="field-Content">
                                            ISO 9001, ISO 9000, ISO 14001, ISO 14000, ISO 20000,
                                            OHSAS/ OHSMS 18001, IATF16949, HSE, ...
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">Average Lead Time:</span>
                                        <span className="field-Content">
                                            Peak Season Lead Time: one month, Off Season Lead Time:
                                            within 15 workdays
                                        </span>
                                    </li>
                                    <li>
                                        <span className="field-Name">SGS Serial NO. :</span>
                                        <span className="field-Content">QIP-ASI185372</span>
                                        <span className="greenText">Report Verification</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}
