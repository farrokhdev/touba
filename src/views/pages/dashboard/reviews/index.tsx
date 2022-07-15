import { BaseComponent } from "utilities_js";
import { ButtonSelect } from "../../../components/button_select";
import { SelectComponent } from "../../../components/components";
import DashboardNav from "../../../components/dashboard_nav";
import ProductTable from "../../../components/product_table";
import ReviewProduct from "../../../components/review_product";
import ReviewController from "../../../controllers/review_controller";


export default class Review extends ReviewController {

  render() {
    const { filter, activeTab } = this.state;
    return (
      <div className="review-Page">
        <div>
          <DashboardNav title="Reviews" />
        </div>
        <div className="d-flex align-items-center justify-content-center py-3">
          <ButtonSelect
            state={activeTab}
            setState1={() => this.setState({ activeTab: 1 })}
            setState2={() => this.setState({ activeTab: 2 })}
            titleButton1="My Reviews"
            titleButton2="Reviews on My Items"
          />
        </div>
        <div className="row  align-items-center d-flex p-3 ">
          <div className="table-box">
            <div className="row border-bottom d-flex align-items-center ">
              <div className="col-6 ">
                <div className="row d-flex -align-items-center ">
                  <div
                    className="col-4 text-center "
                    onClick={() => this.handleShow(1)}
                  >
                    <div
                      className={`item-nav ${filter === 1 && "item-active"
                        } py-4 `}
                    >
                      Products
                    </div>
                  </div>
                  <div
                    className="col-4 text-center "
                    onClick={() => this.handleShow(2)}
                  >
                    <div
                      className={`item-nav ${filter === 2 && "item-active"
                        } py-4 `}
                    >
                      Excess Capacity
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row d-flex align-items-center justify-content-center px-2">
                  <div className="col-8 "></div>
                  <div className="col-4 px-2">
                    <SelectComponent
                      type="one"
                      onSelect={() => { }}
                      placeholder="Status Sorting"
                    />
                  </div>
                </div>
              </div>
            </div>
            {activeTab === 1 ? (
              <div className="mt-3">
                {filter === 1 && <ProductTable />}
                {filter === 2 && <ProductTable />}
              </div>
            ) : (
              <div className="mt-3">
                {filter === 1 && <ReviewProduct />}
                {filter === 2 && <ReviewProduct />}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
