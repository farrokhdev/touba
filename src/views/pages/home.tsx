import { Component } from "react";
import { ImagePersonBox } from "../../assets";
import { CardSearchProduct } from "../components/components";
import HomeController from "../controllers/home_controller";


class Home extends HomeController {
    render() {
        return (
            <div className="home">
                <div className="home-header">
                    <div className="home-header-description">
                        <div className="home-header-description-items">
                            <h2 className="home-header-description-items-title">
                                Produce any product with your brand identity!
                            </h2>
                            <h6 className="home-header-description-items-text1">
                                Or join our supply chain and search between them
                            </h6>
                            <p className="home-header-description-items-text2">
                                You can use our free product lines to make goods with your brand identity and label! Also, you can order products to any supplier or make your products available on Touba.
                            </p>
                        </div>
                        <div className="home-header-description-image">
                            <img src={ImagePersonBox} />
                        </div>
                    </div>
                    <div className="home-header-inputs">
                        <CardSearchProduct />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;