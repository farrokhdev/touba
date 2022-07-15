import { ComponentFilterTopbar, ComponentSuppliers } from "../../../components/components";
import Component_filter_sidebar from "../../../components/component_filter_sidebar";
import Component_search_bar from "../../../components/component_search_bar";
import ResultSupplierController from "../../../controllers/result_supplier_controller";
import BottomNav from "../../../layout/bottom_nav";
import Footer from "../../../layout/footer";
import TopNav from "../../../layout/top_nav";

export class SearchResultSupplier extends ResultSupplierController {

  render() {
    return (
      <div>
        <TopNav />
        <BottomNav />
        <Component_search_bar />
        <div className=" px-4">
        <div className="mt-3">
           <ComponentFilterTopbar/>
          </div>
          <div className="row p-3">
            <div className="col-2 p-2">
              <Component_filter_sidebar showButton={false} />
            </div>
            <div className="col-10">
              <div className=" p-2">
                <ComponentSuppliers />
              </div>
              <div className="p-2">
                <ComponentSuppliers />
              </div>
              <div className="p-2">
                <ComponentSuppliers />
              </div>
              <div className="p-2">
                <ComponentSuppliers />
              </div>
              <div className="p-2">
                <ComponentSuppliers />
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

export default SearchResultSupplier;
