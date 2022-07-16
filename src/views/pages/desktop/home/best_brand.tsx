import { IconAlibaba, IconArvan } from "../../../../assets";
import { CardBestBrand } from "../../../components/card_best_brand";
import HomeController from "../../../controllers/home_controller";

class BestBrand extends HomeController {
    render() {
        return (
            <>
                <h4 className="home-section-best-brand-title"> Best Brands</h4>
                <CardBestBrand
                    images={[
                        IconAlibaba,
                        IconArvan,
                        IconAlibaba,
                        IconArvan,
                        IconAlibaba,
                        IconArvan,
                        IconAlibaba,
                        IconArvan,
                        IconAlibaba,
                        IconArvan,
                    ]}
                />
            </>
        )
    }
}

export default BestBrand;