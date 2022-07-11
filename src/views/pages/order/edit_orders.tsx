import { Component } from "react";
import { IconMarker, ImageTest} from "../../../assets";
import { Divider, CardCalculateProduct, Map, DropDown } from "../../components/components";
import DashboardNav from "../../components/dashboard_nav";
import OrderHead from "../../components/order_head";

class EditOrder extends Component {
    render() {
        return (
            <div className="edit-order">
                <DashboardNav title={"Orders"} />
                <div className="edit-order-card">
                    <div className="edit-order-card-header">
                        <OrderHead orderNumber={2334217651} client={"Saber Noori"} />
                    </div>
                    <div className="edit-order-card-content">
                        <div className="edit-order-card-content-product">
                            <CardCalculateProduct image={ImageTest} name={"Product Name Here"} price={12} number={250} />
                            <div className="">
                                <Divider direction={"vertical"} />
                            </div>
                            <CardCalculateProduct image={ImageTest} name={"Product Name Here"} price={12} number={250} />
                            <div className="">
                                <Divider direction={"vertical"} />
                            </div>
                            <CardCalculateProduct image={ImageTest} name={"Product Name Here"} price={12} number={250} />
                            <div className="edit-order-card-content-product-divider">
                                <Divider direction={"vertical"} />
                            </div>
                            <div className="edit-order-card-content-product-counting">
                                <div className="edit-order-card-content-product-counting-details">
                                    <h6 className="edit-order-card-content-product-counting-details-title">
                                        Subtotal:
                                    </h6>
                                    <h5 className="edit-order-card-content-product-counting-details-price">
                                        $<span>267,058</span>
                                    </h5>
                                </div>
                                <div className="edit-order-card-content-product-counting-details">
                                    <h6 className="edit-order-card-content-product-counting-details-title">
                                        Delivery:
                                    </h6>
                                    <h5 className="edit-order-card-content-product-counting-details-price">
                                        $<span>870</span>
                                    </h5>
                                </div>
                                <div className="edit-order-card-content-product-counting-details">
                                    <h6 className="edit-order-card-content-product-counting-details-title">
                                        Tax:
                                    </h6>
                                    <h5 className="edit-order-card-content-product-counting-details-price">
                                        $<span>1,250</span>
                                    </h5>
                                </div>
                                <div className="edit-order-card-content-product-counting-details">
                                    <h6 className="edit-order-card-content-product-counting-details-title">
                                        Total:
                                    </h6>
                                    <h5 className="edit-order-card-content-product-counting-details-price">
                                        $<p className="edit-order-card-content-product-counting-details-price-total">273,180</p>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="edit-order-card-content-address">
                            <div className="edit-order-card-content-address-top">
                                <div className="edit-order-card-content-address-top-image ">
                                    <img src={IconMarker} alt="" />
                                </div>
                                <div className="edit-order-card-content-address-top-items">
                                    <div className="edit-order-card-content-address-top-items-location">
                                        <h5 className="edit-order-card-content-address-top-items-location-title">
                                            Address-top:
                                        </h5>
                                        <h5 className="edit-order-card-content-address-top-items-location-description">
                                            Great Southern, South West Australia, Western Australia, Australia
                                        </h5>
                                    </div>
                                    <Divider direction="vertical" />
                                    <div className="edit-order-card-content-address-top-items-details">
                                        <div className="edit-order-card-content-address-top-items-details-text">
                                            <h5 className="title">
                                                Post Type:
                                            </h5>
                                            <h5 className="description">
                                                Express Post
                                            </h5>
                                            <Divider direction="vertical" />
                                        </div>
                                        <div className="edit-order-card-content-address-top-items-details-text">
                                            <h5 className="title">
                                                Zip code:
                                            </h5>
                                            <h5 className="description">
                                                7481333254
                                            </h5>
                                            <Divider direction="vertical" />
                                        </div>
                                        <div className="edit-order-card-content-address-top-items-details-text">
                                            <h5 className="title">
                                                Plaque:
                                            </h5>
                                            <h5 className="description">
                                                1
                                            </h5>
                                            <Divider direction="vertical" />
                                        </div>
                                        <div className="edit-order-card-content-address-top-items-details-text">
                                            <h5 className="title">
                                                Recipient name:
                                            </h5>
                                            <h5 className="description">
                                                Saber Noori
                                            </h5>
                                        </div>
                                        <div className="edit-order-card-content-address-top-items-details-text">
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
                            <div className="edit-order-card-content-address-map">
                                <Map />
                            </div>
                        </div>
                    </div>
                    <div className="edit-order-card-divider">
                        <Divider direction={"vertical"} />
                    </div>
                    <div className="edit-order-card-footer">
                        <div className="edit-order-card-footer-select">
                            <h5>
                                Change Status:
                            </h5>
                            <DropDown title={"In Progress"} links={[]} />
                        </div>
                        <div className="edit-order-card-footer-button-group">
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
        )
    }
}

export default EditOrder;