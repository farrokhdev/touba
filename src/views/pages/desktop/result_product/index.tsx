import { ComponentFilterTopbar, ComponentFilterSidebar, CardLike } from "../../../components/components";
import Component_search_bar from "../../../components/component_search_bar";
import ResultProductController from "../../../controllers/result_product_controller";
import BottomNav from "../../../layout/bottom_nav";
import Footer from "../../../layout/footer";
import TopNav from "../../../layout/top_nav";

export class SearchResultProduct extends ResultProductController {

  render() {
    return (
      <div>
        <TopNav />
        <BottomNav />
        <Component_search_bar />
        <div className=" px-4">
          <div className="mt-3">
            <ComponentFilterTopbar />
          </div>
          <div className="row p-3">
            <div className="col-2"><ComponentFilterSidebar showButton={false} /></div>
            <div className="col-10">
              <div className="row">
                <div className="col-4 p-2">
                  <CardLike />
                </div>
                <div className="col-4 p-2">
                  <CardLike />
                </div>
                <div className="col-4 p-2">
                  <CardLike />
                </div>
              </div>
              <div className="row">
                <div className="col-4 p-2">
                  <CardLike />
                </div>
                <div className="col-4 p-2">
                  <CardLike />
                </div>
                <div className="col-4 p-2">
                  <CardLike />
                </div>
              </div>
              <div className="row">
                <div className="col-4 p-2">
                  <CardLike />
                </div>
                <div className="col-4 p-2">
                  <CardLike />
                </div>
                <div className="col-4 p-2">
                  <CardLike />
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

export default SearchResultProduct;
