import MyCompanyNav from "../../components/mycompany_nav";
import CompanyProfileStartController from "../../controllers/company_profile_start_controller";

class LocationPage extends CompanyProfileStartController {

    render() {

        return (
            <>
                <div className="body-content-header">
                    <MyCompanyNav onActive={this.handleGetActiveTab} />
                </div>
            </>
        )
    }
}

export default LocationPage;