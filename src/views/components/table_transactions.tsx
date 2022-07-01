import { memo, ReactElement } from "react";

export type AMOUNT = {
    icon: string;
    number: number;
}

export type TABLE = {
    id: number;
    code: number;
    date: string;
    amount: AMOUNT;
    detail: string;
}

interface Props {
    items: TABLE[];
}

export function TableTransaction({ items }: Props): ReactElement {

    return (
        <div className="table-transaction">
            <div className="table-transaction-number">

            </div>
            <div className="table-transaction-code">

            </div>
            <div className="table-transaction-date">

            </div>
            <div className="table-transaction-amount">

            </div>
            <div className="table-transaction-details">

            </div>
        </div>
    )
}
export default memo(TableTransaction);