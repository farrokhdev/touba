import { memo, ReactElement} from "react";

interface Props {
    image: any;
    title: string;
}

export function CardCategory({image, title}: Props): ReactElement {

    return (
        <div className="card-category">
            <img src={image} className="card-category-image"/>
            <h3 className="card-category-text">
                {title}
            </h3>
        </div>
    )
}

export default memo(CardCategory);