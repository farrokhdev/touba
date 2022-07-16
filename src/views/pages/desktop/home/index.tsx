import { Link } from "react-router-dom";
import { BackgroundLatest ,IconAlibaba, IconArvan, ImageControll, ImageLaboratory, ImagePersonBox, ImageTest, ImageTest2, ImageTest3, ImageTest4 } from "../../../../assets";
import { Button, CardSearchProduct, CardProduct, CardCategory, CardImage, CardCollectionProduct, CardProductWithPrice, CardBestSeller, CardCollectionBest, Divider, CardNewExcess, CardBestBrand, CardNewProduct } from "../../../components/components";
import HomeController from "../../../controllers/home_controller";


import Header from "./header";
import Earn from "./earn";
import Latest from "./latest";
import Categories from "./categories";
import Special from "./special";
import SpecialTwo from "./special_two";
import BestSeller from "./best_seller";
import New from "./new_excess";
import NewExcess from "./new_excess";
import Images from "./images";
import NewProduct from "./new_product";
import BestBrand from "./best_brand";
import Description from "./description";

class Home extends HomeController {
    render() {
      
        return (
            <div className="home">
                <div className="home-header px-5">
                    <Header/>
                </div>
                <div className="home-section-earn px-5">
                    <Earn/>
                </div>
                <div className="home-section-latest px-5" style={{ backgroundImage: "url(" + BackgroundLatest + ")" }}>
                    <Latest/>
                </div>
                <div className="home-section-categories px-5">
                    <Categories/>
                </div>
                <div className="home-section-special px-5">
                    <Special/>
                </div>
                <div className="home-section-special-two px-5">
                    <SpecialTwo/>
                </div>
                <div className="home-section-best-seller px-5">
                   <BestSeller/>
                </div>
                <div className="home-section-new px-5">
                    <NewExcess/>
                </div>
                <div className="home-section-images px-5">
                    <Images/>
                </div>
                <div className="home-section-newest-product px-5">
                    <NewProduct/>
                </div>
                <div className="home-section-best-brand px-5">
                    <BestBrand/>
                </div>
                <div className="home-section-description px-5">
                    <Description/>
                </div>
            </div >
        )
    }
}

export default Home;