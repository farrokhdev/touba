import { ImageTest2 } from "../../../../assets";
import { CardCategory } from "../../../components/card_category";
import HomeController from "../../../controllers/home_controller";

class Categories extends HomeController {
    render() {
        return (
            <>
                <h4 className="home-section-categories-title">
                    Categories
                </h4>
                <div className="home-section-categories-group-cards">
                    <CardCategory
                        image={ImageTest2}
                        title={"Sport Tools"}
                    />
                    <CardCategory
                        image={ImageTest2}
                        title={"Sport Tools"}
                    />
                    <CardCategory
                        image={ImageTest2}
                        title={"Sport Tools"}
                    />
                    <CardCategory
                        image={ImageTest2}
                        title={"Sport Tools"}
                    />
                    <CardCategory
                        image={ImageTest2}
                        title={"Sport Tools"}
                    />
                    <CardCategory
                        image={ImageTest2}
                        title={"Sport Tools"}
                    />
                    <CardCategory
                        image={ImageTest2}
                        title={"Sport Tools"}
                    />
                    <CardCategory
                        image={ImageTest2}
                        title={"Sport Tools"}
                    />
                    <CardCategory
                        image={ImageTest2}
                        title={"Sport Tools"}
                    />
                    <CardCategory
                        image={ImageTest2}
                        title={"Sport Tools"}
                    />
                </div>
            </>
        )
    }
}

export default Categories;