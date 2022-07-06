import { HTMLAttributes, memo, ReactElement, useCallback, MouseEvent, ChangeEvent, useState, useEffect } from "react";
import { IconArrowGreen, IconArrowWhite, IconAttachSorme, ImageFoot } from "../../assets";
import { Divider } from "./components";

interface Props extends HTMLAttributes<HTMLElement> {
    title: string;
    handleGetValues(image: string, text: string): void;
}

export function TextAreaLabelImage({ title, handleGetValues }: Props): ReactElement {
    const [image, setImage] = useState("");
    const [text, setText] = useState("");

    const handleGetImageCard = (event: ChangeEvent<HTMLInputElement>) => {
        const files = (event.currentTarget as HTMLInputElement).files;
        if (files && files.length > 0) {
            setImage(URL.createObjectURL(files[0]))
        }
    };

    useEffect (() => {
        handleGetValues(image, text);
    }, [image, text]);

    return (
        <div className="textarea-lable-image">
            <div className="textarea-lable-image-content">
                <div className="textarea-lable-image-content-title">
                    <h6>
                        {title}
                    </h6>
                </div>
                <div className="textarea-lable-image-content-input">
                    <textarea 
                    className="textarea-lable-image-content-input-textarea"
                    onChange={(event) => {setText(event.currentTarget.value)}}
                    >

                    </textarea>
                    <img
                        src={image === "" ? ImageFoot : image}
                        alt=""
                        className="textarea-lable-image-content-input-image"
                    />
                </div>
                <div className="textarea-lable-image-content-divider">
                    <Divider direction={"vertical"} />
                </div>
                <div className="textarea-lable-image-content-icon">
                    <input type="file" onChange={handleGetImageCard} />
                    <img src={IconAttachSorme} alt="" />
                </div>
            </div>
        </div>
    )
}
export default memo(TextAreaLabelImage);