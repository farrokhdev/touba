import { IconShop, IconChartRed } from "../../../../assets";
import { ComponentSoldBox, Map } from "../../../components/components";
import OrderTableDashboard from "../../../components/order_table_dashbard";
import { TableTransaction } from "../../../components/table_transactions";
import FinanceController from "../../../controllers/finance_controller";

export default class SoldItems extends FinanceController {
    render() {
        return (
            <div className="ps-4 pe-3">
                <div className="top-section d-flex flex-row align-items-center ">
                    <div>
                        <ComponentSoldBox />
                    </div>
                    <div className="icon-button-container d-flex flex-column align-items-center mx-3">
                        <div className="d-flex flex-column align-items-center justify-content-center icon-button">
                            <img src={IconShop} alt="shop" />
                            <span>48 Prodcts</span>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center icon-button">
                            <img src={IconChartRed} alt="shop" />
                            <span>5 Excess Capacity</span>
                        </div>
                    </div>
                    <div className="map">
                        <span>Sales Maps</span>
                        <Map />
                    </div>
                </div>
                <div className="my-4">
                    <TableTransaction transactionBtn={true} items={this.TABLE} />
                </div>
                <div className="order-table">
                    <div className="row d-flex -align-items-center table-box w-50">
                        <div
                            onClick={() => this.handleShow(1)}
                            className="col-4 text-center "
                        >
                            <div
                                className={`item-nav ${this.state.filter == 1 && "item-active"
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
                                className={`item-nav ${this.state.filter == 2 && "item-active"
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
