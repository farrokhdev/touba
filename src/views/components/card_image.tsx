import { memo, ReactElement} from "react";

interface Props {
    image: any;
}

export function CardImage({image}: Props): ReactElement {

    return (
        <div className="card-image">
            <img src={image} className="card-image-image"/>
        </div>
    )
}

export default memo(CardImage);