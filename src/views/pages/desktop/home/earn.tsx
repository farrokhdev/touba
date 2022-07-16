import { ImageLaboratory } from "../../../../assets";
import Button from "../../../components/button";
import HomeController from "../../../controllers/home_controller";

class Earn extends HomeController {
    render() {
        return (
            <>
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
                    <Button title="LEARN MORE" route="/excess" />
                </div>
                <div className="home-section-earn-image">
                    <img src={ImageLaboratory} className="image-laboratory" />
                </div>
            </>
        )
    }
}

export default Earn;