import { HTMLAttributes, memo, ReactElement } from "react";
import { ImageBackgroundBest } from "../../assets";
import { Button } from "./components";

interface Props extends HTMLAttributes<HTMLElement> {

}

export function CardCollectionBest({ children }: Props): ReactElement {

    return (
        <div className="card-collection-best" style={{ backgroundImage: "url(" + ImageBackgroundBest + ")" }}>
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