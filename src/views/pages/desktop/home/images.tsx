import { ImageTest4 } from "../../../../assets";
import { CardImage } from "../../../components/card_image";
import HomeController from "../../../controllers/home_controller";

class Images extends HomeController {
    render() {
        return (
            <>
                <CardImage image={ImageTest4} />
                <CardImage image={ImageTest4} />
                <CardImage image={ImageTest4} />
                <CardImage image={ImageTest4} />
            </>
        )
    }
}

export default Images;