import { Component } from "react";
import { ImageLaboratory, ImagePersonBox } from "../../assets";
import { Button, CardSearchProduct } from "../components/components";
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
                <div className="home-section-earn">
                    <div className="home-section-earn-content">
                        <h4 className="home-section-earn-content-header">
                            Let`s earn from
                        </h4>
                        <h2 className="home-section-earn-content-title">
                            Excess Capacity
                        </h2>
                        <div className="home-section-earn-content-description">
                            <p className="home-section-earn-content-description-text">
                                Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore
                                magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam,
                                quis nostrud exerci tation
                                ullamcorper suscipit lobortis
                                nisl ut aliquip ex ea commodo
                                consequat. Duis autem vel eum
                                iriure dolor in hendrerit in
                                vulputate
                            </p>
                        </div>
                        <Button title="LEARN MORE" />
                    </div>
                    <div className="home-section-earn-image">
                        <img src={ImageLaboratory} className="image-laboratory" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;