import { ImageControll } from "../../../../assets";
import { CardNewProduct } from "../../../components/card_new_product";
import HomeController from "../../../controllers/home_controller";

class NewProduct extends HomeController {
    render() {
        return (
            <>
                <h4 className="home-section-newest-product-title">New Product</h4>
                <div className="home-section-newest-product-content">
                    <CardNewProduct image={ImageControll} title={"Product Name"} />
                    <CardNewProduct image={ImageControll} title={"Product Name"} />
                    <CardNewProduct image={ImageControll} title={"Product Name"} />
                    <CardNewProduct image={ImageControll} title={"Product Name"} />
                    <CardNewProduct image={ImageControll} title={"Product Name"} />
                    <CardNewProduct image={ImageControll} title={"Product Name"} />
                    <CardNewProduct image={ImageControll} title={"Product Name"} />
                    <CardNewProduct image={ImageControll} title={"Product Name"} />
                    <CardNewProduct image={ImageControll} title={"Product Name"} />
                    <CardNewProduct image={ImageControll} title={"Product Name"} />
                    <CardNewProduct image={ImageControll} title={"Product Name"} />
                    <CardNewProduct image={ImageControll} title={"Product Name"} />
                </div>
            </>
        )
    }
}

export default NewProduct;