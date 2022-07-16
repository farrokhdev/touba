import { ImageDeliveryMan } from "../../../../assets";
import OrderTableDashboard from "../../../components/order_table_dashbard";
import { TableTransaction } from "../../../components/table_transactions";
import FinanceController from "../../../controllers/finance_controller";

export default class PurchasedItems extends FinanceController {
    render () {
        return (
          <div className="ps-4 pe-3">
            <div className="top-banner d-flex flex-row align-items-end justify-content-between">
              <div>
                <span>Congratulations</span>
                <p>
                  You have a new order to deliver. Please check the shipping
                  instructure.
                </p>
                <button>Shipping instructure</button>
              </div>
              <img src={ImageDeliveryMan} alt="banner" />
            </div>
            <div className="my-4">
              <TableTransaction
                transactionBtn={true}
                title="Outgoing Transactions"
                items={this.TABLE}
              />
            </div>
            <div className="order-table">
              <div className="row d-flex -align-items-center table-box w-50">
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
              <OrderTableDashboard />
            </div>
          </div>
        );
      };
}
