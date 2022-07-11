import {
    memo,
    ReactElement,
    useCallback,

} from "react";

interface Props {
    title: string;
    image?: string;
}

export function ImageArrow({title, image}: Props): ReactElement {

    return (
        <div className="image-arrow">
            <div className="image-arrow-rectangle">
                <img src={image} alt="" />
                <h5>
                    {title}
                </h5>
            </div>
            <div className="image-arrow-trigle">

            </div>
        </div>
    )
}

export default memo(ImageArrow);