import CompanyProfileController from "../../../controllers/company_profile_controller";
import ToubaProduct from "../product";

export default class Product extends CompanyProfileController {
    render() {
        return <ToubaProduct />;
    };
}
