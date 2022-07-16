import { Link } from "react-router-dom";
import { ImageControll } from "../../../../assets";
import { CardNewExcess } from "../../../components/card_new_excess";
import Divider from "../../../components/divider";
import HomeController from "../../../controllers/home_controller";

class NewExcess extends HomeController {
    render() {
        return (
            <>
                <div className="home-section-new-header">
                    <h4 className="home-section-new-header-text">
                        New Excess Capacities
                    </h4>
                    <Link to="/" className="home-section-new-header-link">
                        SEE ALL
                    </Link>
                </div>
                <Divider direction={"vertical"} />
                <div className="home-section-new-content">
                    <CardNewExcess
                        image={ImageControll}
                        items={this.TEST}
                        title={"Name of Excess Capacity"}
                    />
                    <CardNewExcess
                        image={ImageControll}
                        items={this.TEST}
                        title={"Name of Excess Capacity"}
                    />
                    <CardNewExcess
                        image={ImageControll}
                        items={this.TEST}
                        title={"Name of Excess Capacity"}
                    />
                    <CardNewExcess
                        image={ImageControll}
                        items={this.TEST}
                        title={"Name of Excess Capacity"}
                    />
                    <CardNewExcess
                        image={ImageControll}
                        items={this.TEST}
                        title={"Name of Excess Capacity"}
                    />
                    <CardNewExcess
                        image={ImageControll}
                        items={this.TEST}
                        title={"Name of Excess Capacity"}
                    />
                    <CardNewExcess
                        image={ImageControll}
                        items={this.TEST}
                        title={"Name of Excess Capacity"}
                    />
                    <CardNewExcess
                        image={ImageControll}
                        items={this.TEST}
                        title={"Name of Excess Capacity"}
                    />
                    <CardNewExcess
                        image={ImageControll}
                        items={this.TEST}
                        title={"Name of Excess Capacity"}
                    />
                    <CardNewExcess
                        image={ImageControll}
                        items={this.TEST}
                        title={"Name of Excess Capacity"}
                    />
                    <CardNewExcess
                        image={ImageControll}
                        items={this.TEST}
                        title={"Name of Excess Capacity"}
                    />
                    <CardNewExcess
                        image={ImageControll}
                        items={this.TEST}
                        title={"Name of Excess Capacity"}
                    />
                </div>
            </>
        )
    }
}

export default NewExcess;