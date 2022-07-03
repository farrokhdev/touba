import { memo, ReactElement } from "react";
import { IconDecrease } from "../../assets";

export type TABLE = {
    id: number;
    code: number;
    date: string;
    amount: number;
    detail: string;
}

interface Props {
    items: TABLE[];
}

export function TableTransaction({ items }: Props): ReactElement {

    return (
        <div className="table-transaction">
            <div className="table-transaction-title">
                <h4>
                    Income Transactions
                </h4>
            </div>
            <div className="table-transaction-header">
                <div className="table-transaction-header-id">
                    <h6>
                        #
                    </h6>
                </div>
                <div className="table-transaction-header-code">
                    <h6>
                        Tracking Code
                    </h6>
                </div>
                <div className="table-transaction-header-date">
                    <h6>
                        Date
                    </h6>
                </div>
                <div className="table-transaction-header-amount">
                    <h6>
                        Amount
                    </h6>
                </div>
                <div className="table-transaction-header-details">
                    <h6>
                        Details
                    </h6>
                </div>
            </div>
            {items.map(item => (
                <div className="table-transaction-content" key={item.id}>
                    <div className="table-transaction-content-id">
                        <div>
                            <h6>
                                {item.id}
                            </h6>
                        </div>
                    </div>
                    <div className="table-transaction-content-code">
                        <h6>
                            {item.code}
                        </h6>
                    </div>
                    <div className="table-transaction-content-date">
                        <h6>
                            {item.date}
                        </h6>
                    </div>
                    <div className="table-transaction-content-amount">
                        <img src={IconDecrease} alt="" />
                        <h5>
                            <span>
                                $
                            </span>
                            {item.amount}
                        </h5>
                    </div>
                    <div className="table-transaction-content-details">
                        <h6>
                            {item.detail}
                        </h6>
                    </div>
                </div>
            ))}
            <div className="table-transaction-footer">
                <div className="d-flex justify-content-center pagination ">
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
    )
}
export default memo(TableTransaction);