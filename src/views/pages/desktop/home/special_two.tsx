import { ImageControll } from "../../../../assets";
import { CardCollectionProduct } from "../../../components/card_collection_product";
import { CardProductWithPrice } from "../../../components/card_product_with_price";
import HomeController from "../../../controllers/home_controller";

class SpecialTwo extends HomeController {
    render() {
        return (
            <>
                <CardCollectionProduct title={"Analust’s Choice"} location={""} >
                    <CardProductWithPrice
                        image={ImageControll}
                        title={"Product Name"}
                        fromPrice={12}
                        toPrice={24}
                    />
                    <CardProductWithPrice
                        image={ImageControll}
                        title={"Product Name"}
                        fromPrice={12}
                        toPrice={24}
                    />
                    <CardProductWithPrice
                        image={ImageControll}
                        title={"Product Name"}
                        fromPrice={12}
                        toPrice={24}
                    />
                    <CardProductWithPrice
                        image={ImageControll}
                        title={"Product Name"}
                        fromPrice={12}
                        toPrice={24}
                    />
                </CardCollectionProduct>
                <CardCollectionProduct title={"Low MOQ"} location={""} >
                    <CardProductWithPrice
                        image={ImageControll}
                        title={"Product Name"}
                        fromPrice={12}
                        toPrice={24}
                    />
                    <CardProductWithPrice
                        image={ImageControll}
                        title={"Product Name"}
                        fromPrice={12}
                        toPrice={24}
                    />
                    <CardProductWithPrice
                        image={ImageControll}
                        title={"Product Name"}
                        fromPrice={12}
                        toPrice={24}
                    />
                    <CardProductWithPrice
                        image={ImageControll}
                        title={"Product Name"}
                        fromPrice={12}
                        toPrice={24}
                    />
                </CardCollectionProduct>
            </>
        )
    }
}

export default SpecialTwo;