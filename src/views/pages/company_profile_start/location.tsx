import { useState } from "react";
import { InputTextLabel, Map, ModalCompany } from "../../components/components";
import MyCompanyNav from "../../components/mycompany_nav";
import CompanyProfileStartController from "../../controllers/company_profile_start_controller";

class LocationPage extends CompanyProfileStartController {

    render() {
        const {
            modalLocation,
            locationName
        } = this.state;
        return (
            <div className="body-content-location">
                <button onClick={this.showModalLocation}>
                    show modal
                </button>
                {modalLocation === true ? (
                    <ModalCompany onClose={this.closeModalLocation} onSave={() => { }} >
                        <div className="modal-location-input">
                            <InputTextLabel
                                value={locationName}
                                title={"Location Name"}
                                placeholder={"Name"}
                                type={"text"}
                                showDropDown={false}
                                onChange={(event) => this.setState({locationName: event.currentTarget.value})}
                            />
                        </div>
                        <div className="modal-location-map">
                            <Map/>
                        </div>
                    </ModalCompany>
                ) : (null)}
            </div>
        )
    }
}

export default LocationPage;