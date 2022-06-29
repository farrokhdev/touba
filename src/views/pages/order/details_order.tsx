import { Component } from "react";
import { Link } from "react-router-dom";
import { BackgroundLatest, IconAlibaba, IconArvan, IconEmail, IconError, IconLinkdin, IconLinkdinGray, IconMarker, IconTouba, IconTwiterGray, IconTwitter, ImageBackgroundLogin, ImageControll, ImageLaboratory, ImagePersonBox, ImageTest, ImageTest2, ImageTest3, ImageTest4 } from "../../../assets";
import { ButtonDropdown } from "../../components/button_dropdown";
import { ButtonOutline } from "../../components/button_outline";
import { CHART } from "../../components/chart";
import { Button, CardSearchProduct, CardProduct, CardCategory, CardImage, CardCollectionProduct, CardProductWithPrice, CardBestSeller, CardCollectionBest, Divider, CardNewExcess, CardBestBrand, CardNewProduct, InputTextLabel, ComponentRadioSquare, CardCalculateProduct, Map, DropDown } from "../../components/components";
import DashboardNav from "../../components/dashboard_nav";
import HomeController from "../../controllers/home_controller";
import LoginControll from "../../controllers/login_controll";


class DetailsOrder extends Component {
    render() {
        return (
            <div className="details-order row">
                <DashboardNav title={"Orders"} />
                <div className="details-order-header col-12">

                </div>
                <div className="details-order-content col-12">
                    <div className="details-order-content-product col-7 ">
                        <CardCalculateProduct image={ImageTest} name={"Product Name Here"} price={12} number={250} />
                        <div className="row">
                            <Divider direction={"vertical"} />
                        </div>
                        <CardCalculateProduct image={ImageTest} name={"Product Name Here"} price={12} number={250} />
                        <div className="row">
                            <Divider direction={"vertical"} />
                        </div>
                        <CardCalculateProduct image={ImageTest} name={"Product Name Here"} price={12} number={250} />
                        <div className="row">
                            <Divider direction={"vertical"} />
                        </div>
                        <div className="col-7">

                        </div>
                        <div className="details-order-content-product-counting col-4 px-3">
                            <div className="details-order-content-product-counting-details">
                                <h6 className="details-order-content-product-counting-details-title">
                                    Subtotal:
                                </h6>
                                <h5 className="details-order-content-product-counting-details-price">
                                    $<span>267,058</span>
                                </h5>
                            </div>
                            <div className="details-order-content-product-counting-details">
                                <h6 className="details-order-content-product-counting-details-title">
                                    Delivery:
                                </h6>
                                <h5 className="details-order-content-product-counting-details-price">
                                    $<span>870</span>
                                </h5>
                            </div>
                            <div className="details-order-content-product-counting-details">
                                <h6 className="details-order-content-product-counting-details-title">
                                    Tax:
                                </h6>
                                <h5 className="details-order-content-product-counting-details-price">
                                    $<span>1,250</span>
                                </h5>
                            </div>
                            <div className="details-order-content-product-counting-details">
                                <h6 className="details-order-content-product-counting-details-title">
                                    Total:
                                </h6>
                                <h5 className="details-order-content-product-counting-details-price">
                                    $<p className="details-order-content-product-counting-details-price-total">273,180</p>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className=" h-100">
                        <Divider direction={"horizontal"} />
                    </div>
                    <div className="details-order-content-address col-4">
                        <div className="details-order-content-address-top">
                            <div className="details-order-content-address-top-image col-2">
                                <img src={IconMarker} alt="" />
                            </div>
                            <div className="details-order-content-address-top-items col-10">
                                <div className="details-order-content-address-top-items-location">
                                    <h5 className="details-order-content-address-top-items-location-title">
                                        Address-top:
                                    </h5>
                                    <h5 className="details-order-content-address-top-items-location-description">
                                        Great Southern, South West Australia, Western Australia, Australia
                                    </h5>
                                </div>
                                <Divider direction="vertical" />
                                <div className="details-order-content-address-top-items-details">
                                    <div className="details-order-content-address-top-items-details-text">
                                        <h5 className="title">
                                            Post Type:
                                        </h5>
                                        <h5 className="description">
                                            Express Post
                                        </h5>
                                        <Divider direction="vertical" />
                                    </div>
                                    <div className="details-order-content-address-top-items-details-text">
                                        <h5 className="title">
                                            Zip code:
                                        </h5>
                                        <h5 className="description">
                                            7481333254
                                        </h5>
                                        <Divider direction="vertical" />
                                    </div>
                                    <div className="details-order-content-address-top-items-details-text">
                                        <h5 className="title">
                                            Plaque:
                                        </h5>
                                        <h5 className="description">
                                            1
                                        </h5>
                                        <Divider direction="vertical" />
                                    </div>
                                    <div className="details-order-content-address-top-items-details-text">
                                        <h5 className="title">
                                            Recipient name:
                                        </h5>
                                        <h5 className="description">
                                            Saber Noori
                                        </h5>
                                    </div>
                                    <div className="details-order-content-address-top-items-details-text">
                                        <h5 className="title">
                                            Phone number:
                                        </h5>
                                        <h5 className="description">
                                            09330673967
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="details-order-content-address-map row">
                            <Map />
                        </div>
                    </div>
                </div>
                <div className="details-order-divider">
                    <Divider direction={"vertical"} />
                </div>
                <div className="details-order-footer">
                    <div className="details-order-footer-select">
                        <h5>
                            Status:
                        </h5>
                        <p>
                            In Progress
                        </p>
                    </div>
                    <div className="details-order-footer-button-group">
                        <button type="button" className="btn my-btn-gray" data-bs-dismiss="modal">
                            <h6>
                                BACK
                            </h6>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsOrder;