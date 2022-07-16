import SideServiceController from "../../../controllers/side_service_controller";
import Description from "./description";
import Form from "./form";
import Services from "./services";

export default class SideServicePage extends SideServiceController {

  render() {
    return (
      <div className="sideServise-Page w-100 d-flex flex-column align-items-center ">
        <div className="w-100 green-Background d-flex align-items-start justify-content-center">
          <span className="mt-4">Side Services</span>
        </div>
        <div className="sideService-Content d-flex flex-column align-items-center ">
          <div className="sideService-Desc">
            <Description />
          </div>
          <div className="services d-flex flex-row align-items-start my-5">
            <Services />
          </div>
          <div className="w-100 contact-Form">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
