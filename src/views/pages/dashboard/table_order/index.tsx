import { IconSearch } from "../../../../assets";
import { ButtonSelect } from "../../../components/button_select";
import {
  SelectComponent,
  ComponentTableORder,
  ComponentTableExcess,
} from "../../../components/components";
import DashboardNav from "../../../components/dashboard_nav";
import DashboardTableOrderController from "../../../controllers/dashboard_table_order_controller";

export default class DashboardTableOrder extends DashboardTableOrderController {
  render() {
    return (
      <div>
        <div>
          <DashboardNav title="Orders" />
        </div>
        <div className="d-flex align-items-center justify-content-center py-3">
          <ButtonSelect
            setState1={() => this.setState({ navFilter: 1 })}
            setState2={() => this.setState({ navFilter: 2 })}
            titleButton1="Your Orders"
            titleButton2="Sales List"
            state={this.state.navFilter}
          />
        </div>
        <div className="row  align-items-center d-flex p-3 ">
          <div className="table-box">
            <div className="row border-bottom d-flex align-items-center ">
              <div className="col-6 ">
                <div className="row d-flex -align-items-center ">
                  <div
                    onClick={() => this.handleShow(1)}
                    className="col-4 text-center "
                  >
                    <div
                      className={`item-nav ${
                        this.state.filter == 1 && "item-active"
                      } py-4 `}
                    >
                      Products
                    </div>
                  </div>
                  <div
                    onClick={() => this.handleShow(2)}
                    className="col-4 text-center "
                  >
                    <div
                      className={`item-nav ${
                        this.state.filter == 2 && "item-active"
                      } py-4 `}
                    >
                      Excess Capacity
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row d-flex align-items-center justify-content-center px-2">
                  <div className="col-8 ">
                    <div className="search-table d-flex">
                      <div className="">
                        <img src={IconSearch} />
                      </div>
                      <input
                        className="input-search"
                        placeholder="Search in Orders"
                      />
                    </div>
                  </div>
                  <div className="col-4 px-2">
                    <SelectComponent
                      type="one"
                      onSelect={() => {}}
                      placeholder="Status Sorting"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              {this.state.navFilter == 2 && (
                <div>
                  {this.state.filter == 1 && this.state.navFilter == 2 && (
                    <ComponentTableORder mode="Supplier" />
                  )}
                  {this.state.filter == 2 && this.state.navFilter == 2 && (
                    <ComponentTableExcess mode="Supplier" />
                  )}
                </div>
              )}
              {this.state.navFilter == 1 && (
                <div>
                  {this.state.filter == 1 && this.state.navFilter == 1 && (
                    <ComponentTableORder mode="Client" />
                  )}
                  {this.state.filter == 2 && this.state.navFilter == 1 && (
                    <ComponentTableExcess mode="Client" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
