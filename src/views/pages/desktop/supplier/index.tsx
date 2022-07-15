import { Link } from "react-router-dom";
import { ComponentFilterSidebar, SelectComponent, ComponentCapicityFilter, ComponentSuppliers } from "../../../components/components";
import SupplierController from "../../../controllers/supplier_controller";
import Footer from "../../../layout/footer";

export class ToubaSupplier extends SupplierController {
  
  render() {
    return (
      <div>
        <div className=" px-5">
          <div className="row p-3">
            <div className="col-3">
              <ComponentFilterSidebar showButton={true} />
            </div>
            <div className="col-9">
              <div className="p-2 d-flex align-items-center justify-content-between">
                <div className="bigText">221 Products</div>
                <div>
                  <SelectComponent
                    type="one"
                    onSelect={function (name: string): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </div>
              </div>
              <div className="p-2 mt-4">
                <ComponentCapicityFilter />
              </div>

              <div className=" p-2">
                {" "}
                <Link to="/company-profile" className="text-decoration-none">
                  <ComponentSuppliers />{" "}
                </Link>
              </div>
              <div className="p-2">
                {" "}
                <Link to="/company-profile" className="text-decoration-none">
                  <ComponentSuppliers />{" "}
                </Link>
              </div>
              <div className="p-2">
                {" "}
                <Link to="/company-profile" className="text-decoration-none">
                  <ComponentSuppliers />{" "}
                </Link>
              </div>
              <div className="p-2">
                {" "}
                <Link to="/company-profile" className="text-decoration-none">
                  <ComponentSuppliers />{" "}
                </Link>
              </div>
              <div className="p-2">
                <Link to="/company-profile" className="text-decoration-none">
                  <ComponentSuppliers />
                </Link>
              </div>

              <div className="d-flex justify-content-center pagination mt-2">
                <div className="bigText">
                  <div>1</div>
                </div>
                <div className="bigText">
                  <div>2</div>
                </div>
                <div className="bigText">
                  <div className="active">3</div>
                </div>
                <div className="bigText">
                  <div>4</div>
                </div>
                <div className="bigText">
                  <div className="">5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ToubaSupplier;
