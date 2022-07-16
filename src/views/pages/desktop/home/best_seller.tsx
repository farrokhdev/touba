import { ImageControll } from "../../../../assets";
import { CardBestSeller } from "../../../components/card_best_seller";
import { CardCollectionBest } from "../../../components/card_collection_best";
import HomeController from "../../../controllers/home_controller";

class BestSeller extends HomeController {
    render() {
        return (
            <>
                <CardCollectionBest>
                    <CardBestSeller image={ImageControll} discountPercent={45} />
                    <CardBestSeller image={ImageControll} discountPercent={45} />
                    <CardBestSeller image={ImageControll} discountPercent={45} />
                    <CardBestSeller image={ImageControll} discountPercent={45} />
                    <CardBestSeller image={ImageControll} discountPercent={45} />
                    <CardBestSeller image={ImageControll} discountPercent={45} />
                    <CardBestSeller image={ImageControll} discountPercent={45} />
                    <CardBestSeller image={ImageControll} discountPercent={45} />
                </CardCollectionBest>
            </>
        )
    }
}

export default BestSeller;