import { HTMLAttributes, memo, ReactElement } from "react";
import { Button } from "./components";

interface Props extends HTMLAttributes<HTMLElement> {

}

export function CardCollectionBest({ children }: Props): ReactElement {

    return (
        <div className="card-collection-best">
            <img
                src={""}
                className="card-collection-best-background"
            />
            <div className="card-collection-best-content">
                <h4 className="card-collection-best-content-title">
                    Best Sellers
                </h4>
                <div className="card-collection-best-content-body">
                    {children}
                </div>
                <div className="card-collection-best-content-button">
                    <Button title="SEE MORE" />
                </div>
            </div>

        </div>
    )
}

export default memo(CardCollectionBest);