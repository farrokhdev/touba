import {
    memo,
    ReactElement,
    useCallback,
    MouseEvent,
    HTMLAttributes
} from "react";
import { Link } from "react-router-dom";
import { IconClose, IconPersonCircle, ImageFlagChine, ImageOil } from "../../assets";
import { ButtonDropdown } from "./button_dropdown";
import { DropDown } from "./components";
import { Divider } from "./divider";
import { LINKS } from "./dropdown";
import Raiting from "./rating";

interface Props extends HTMLAttributes<HTMLElement> {
    iconPerson: string;
    namePerson: string;
    date: string;
    rateStar: number;
    iconCountry: string;
    location: string;
    description: string;
    imageProduct: string;
    nameProduct: string;
    itemDropDown: LINKS[];
    country: string;
}

export function Modal({
    iconPerson,
    namePerson,
    date,
    rateStar,
    iconCountry,
    location, 
    description,
    imageProduct,
    nameProduct,
    itemDropDown,
    country
}: Props): ReactElement {

    return (
        <div className="modal-component">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title mx-3" id="staticBackdropLabel">Review Details</h5>
                            <button type="button" className="button-close" data-bs-dismiss="modal" aria-label="Close">
                                <img src={IconClose} alt="" />
                            </button>
                        </div>
                        <div className="modal-body row px-4">
                            <div className="content col-7">
                                <div className="header row my-3">
                                    <div className="user col-7 col-lg-5">
                                        <img src={iconPerson} alt="" />
                                        <div className="mx-3">
                                            <h5 className="user-name py-2">
                                                {namePerson}
                                            </h5>
                                            <p className="user-date">
                                                {date} from {country}.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rate col-5 col-lg-7">
                                        <Raiting rate={rateStar} />
                                        <Divider direction="horizontal" />
                                        <div className="mx-3 icon">
                                            <img src={iconCountry} alt="" />
                                        </div>
                                        <Divider direction="horizontal" />
                                        <Link to={location} className="mx-3 link">
                                            SEE PROFILE
                                        </Link>
                                    </div>
                                </div>
                                <div className="description">
                                    <p className="text">
                                        {description}
                                    </p>
                                </div>
                            </div>
                            <div className="col-1 my-3">
                                <Divider direction={"horizontal"} />
                            </div>
                            <div className="product col-4">
                                <h6 className="title">
                                    REVIEW ON THIS ITEM
                                </h6>
                                <div className="product-image">
                                    <img src={imageProduct} alt="" />
                                    <h4>
                                        {nameProduct}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="footer-dropdown">
                                <h5>
                                    Change Status:
                                </h5>
                                <DropDown title={"Approve"} links={itemDropDown} />
                            </div>
                            <div className="footer-button-group">
                                <button type="button" className="btn my-btn-gray" data-bs-dismiss="modal">
                                    <h6>
                                        CANCEL
                                    </h6>
                                </button>
                                <button type="button" className="btn my-btn-green">
                                    <h6>
                                        SAVE CHANGE
                                    </h6>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Modal);