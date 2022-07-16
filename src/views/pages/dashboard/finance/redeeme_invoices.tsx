import { ImageManMoney } from "../../../../assets";
import { TableTransaction } from "../../../components/table_transactions";
import FinanceController from "../../../controllers/finance_controller";

export default class RedeemedInvoices extends FinanceController {
  render () {
    return (
      <div className="ps-4 pe-3">
        <div className="top-banner d-flex flex-row align-items-end justify-content-between">
          <div className="mb-5">
            <span>Congratulations</span>
            <p>
              You have a new order to deliver. Please check the shipping
              instructure.
            </p>
          </div>
          <img src={ImageManMoney} alt="banner" />
        </div>
        <div className="my-4">
          <TableTransaction
            transactionBtn={true}
            title="Last Transactions"
            items={this.TABLE}
          />
        </div>
      </div>
    );
  };
}
