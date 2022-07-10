import { IconAddCircleWhite } from "../../../assets";
import Location from "../../components/location";
import CompanyProfileStartController from "../../controllers/company_profile_start_controller";

class LocationPage extends CompanyProfileStartController {
  render() {
    return (
      <div className="contact-us-start  mx-4">
        {/* <div className="title">
          <span className="px-5">Locations</span>
        </div>
        <div className="py-3 px-5">
          <div className="location">
            <div className="head d-flex flex-row align-items-center justify-content-between">
              <span className="title">Your Locations</span>
              <button className="green-btn">
                <img src={IconAddCircleWhite} alt="add" className="me-2" />
                add new location
              </button>
            </div>
            <div>
              <div className="table-head d-flex flex-row align-items-center justify-content-between">
                <span className="d-flex align-items-center justify-content-center">
                  #
                </span>
                <span className="">Location Name</span>
                <span>Area</span>
                <span>Actions</span>
              </div>
              <div className="table-body">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <Location
                    area="BandarAbbas, Iran"
                    index={index}
                    name="Bandar Abbas Office"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="body-content-main-footer px-5">
          <div className="body-content-main-footer-button-group">
            <button className="body-content-main-footer-button-group-next">
              <h5>NEXT STEP</h5>
            </button>
            <button className="body-content-main-footer-button-group-back">
              <h5>BACK</h5>
            </button>
          </div>
          <button className="body-content-main-footer-button-cancel">
            <h5>CANCEL</h5>
          </button>
        </div> */}
      </div>
    );
  }
}

export default LocationPage;
