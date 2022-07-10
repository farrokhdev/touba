import { useState } from "react";
import { InputTextLabel, Map, ModalCompany } from "../../components/components";
import MyCompanyNav from "../../components/mycompany_nav";
import CompanyProfileStartController from "../../controllers/company_profile_start_controller";
import { IconAddCircleWhite } from "../../../assets";
import Location from "../../components/location";

// class LocationPage extends CompanyProfileStartController {

//     render() {
//         const {
//             modalLocation,
//             locationName
//         } = this.state;
//         return (
//             <div className="body-content-location">
//                 <button onClick={this.showModalLocation}>
//                     show modal
//                 </button>
//                 {modalLocation === true ? (
//                     <ModalCompany onClose={this.closeModalLocation} onSave={() => { }} >
//                         <div className="modal-location-input">
//                             <InputTextLabel
//                                 value={locationName}
//                                 title={"Location Name"}
//                                 placeholder={"Name"}
//                                 type={"text"}
//                                 showDropDown={false}
//                                 onChange={(event) => this.setState({locationName: event.currentTarget.value})}
//                             />
//                         </div>
//                         <div className="modal-location-map">
//                             <Map/>
//                         </div>
//                     </ModalCompany>
//                 ) : (null)}
//             </div>
//         )
//     }

class LocationPage extends CompanyProfileStartController {
  render() {
    const { modalLocation, locationName } = this.state;
    return (
      <div className="location-start  mx-4">
        <div className="title">
          <span className="px-5">Locations</span>
        </div>
        <div className="py-3 px-5 d-flex flex-row align-items-center justify-content-between">
          <div className="location-table ">
            <div className="head d-flex flex-row align-items-center justify-content-between py-4 px-4">
              <span className="head-title">Your Locations</span>
              <button className="green-btn" onClick={this.showModalLocation}>
                <img src={IconAddCircleWhite} alt="add" className="me-2" />
                add new location
              </button>
            </div>
            <div className="table-order">
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
          <div className="map-container ms-4">
            <Map />
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
        </div>
        {modalLocation === true ? (
          <ModalCompany onClose={this.closeModalLocation} onSave={() => {}}>
            <div className="modal-location-input mb-4">
              <InputTextLabel
                value={locationName}
                title={"Location Name"}
                placeholder={"Name"}
                type={"text"}
                showDropDown={false}
                onChange={(event) =>
                  this.setState({ locationName: event.currentTarget.value })
                }
              />
            </div>
            <div className="modal-location-map">
              <Map />
            </div>
          </ModalCompany>
        ) : null}
      </div>
    );
  }
}

export default LocationPage;
