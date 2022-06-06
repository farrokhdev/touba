import { Component } from "react";
import { Link } from "react-router-dom";
import { BackgroundLatest, IconAlibaba, IconArvan, ImageBackgroundLogin, ImageControll, ImageLaboratory, ImagePersonBox, ImageTest, ImageTest2, ImageTest3, ImageTest4 } from "../../assets";
import { CHART } from "../components/chart";
import { Button, CardSearchProduct, CardProduct, CardCategory, CardImage, CardCollectionProduct, CardProductWithPrice, CardBestSeller, CardCollectionBest, Divider, CardNewExcess, CardBestBrand, CardNewProduct } from "../components/components";
import HomeController from "../controllers/home_controller";


class Home extends HomeController {
    render() {
        return (
            <div className="login" style={{ backgroundImage: "url(" + ImageBackgroundLogin + ")" }}>

            </div>
        )
    }
}

export default Home;