import { memo, ReactElement} from "react";
import { ImageNasa } from "../../assets";

interface Props {
    title: string;
    amountMessage: number;
    message: string;
    images: string[];
    date: string;
    disabled: boolean;
}

export function CardGroupChat({
    title,
    amountMessage,
    message,
    images,
    date,
    disabled
}: Props): ReactElement {

    return (
        <div className={disabled === true ? "card-group-chat row disabled" : "card-group-chat row"}>
            <div className="card-group-chat-message col-8">
                <div className="card-group-chat-message-title col-12 text-start p-4">
                    <h4 className="card-group-chat-message-title-text">
                        {title}
                    </h4>
                    <span className="card-group-chat-message-title-amount">
                        <span>{amountMessage}</span>
                    </span>
                </div>
                <div className="card-group-chat-message-description col-12 p-4 pt-0">
                    Sender Name: {message}
                </div>
            </div>
            <div className="card-group-chat-images col-4">
                <div className="content col-12 p-4 mt-2 pb-0">
                    {/* {images.map((image, index) => (
                        <img key={index} src={image} className="" />
                    ))} */}
                    <img src={images[0]} className="content-avatar1" />
                    <img src={images[1]} className="content-avatar2" />
                    <img src={images[2]} className="content-avatar3" />
                    <div className="content-amount">
                        <span>+ {images.length - 3}</span>
                    </div>
                </div>
                <div className="date col-12 text-end pt-4 px-5">
                    {date}
                </div>
            </div>
        </div>
    )
}

export default memo(CardGroupChat);