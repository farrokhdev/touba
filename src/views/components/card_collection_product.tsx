import { HTMLAttributes, memo, ReactElement} from "react";

interface Props extends HTMLAttributes<HTMLElement> {
   title: string;
   location: string;
}

export function CardCollectionProduct({children, location, title}: Props): ReactElement {

    return (
        <div className="card-collection-product">
            <div className="card-collection-product-header">
                <h3 className="card-collection-product-header-text">
                    {title}
                </h3>
                <a href={location} className="card-collection-product-header-link">
                    SEE ALL
                </a>
            </div>
            <div className="card-collection-product-body">
                {children}
            </div>
        </div>
    )
}

export default memo(CardCollectionProduct);