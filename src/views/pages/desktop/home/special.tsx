import { ImageTest3 } from "../../../../assets";
import { CardImage } from "../../../components/card_image";
import HomeController from "../../../controllers/home_controller";

class Special extends HomeController {
    render() {
        return (
            <>
                <CardImage image={ImageTest3} />
                <CardImage image={ImageTest3} />
            </>
        )
    }
}

export default Special;