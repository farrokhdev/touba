import { ChangeEvent, memo, ReactElement, useCallback, useState } from "react";
import { IconDeletGreen, IconImage, IconUpload } from "../../assets";


interface Props {
    title: string;
    handleGetImage(image: string): void;
}

export function CardUploadImage({ handleGetImage, title }: Props): ReactElement {

    const [image, setImage] = useState("");

    const handleGetImageCard = (event: ChangeEvent<HTMLInputElement>) => {
        const files = (event.currentTarget as HTMLInputElement).files;
        if (files && files.length > 0) {
            handleGetImage(URL.createObjectURL(files[0]))
            setImage(URL.createObjectURL(files[0]))
        }
    };

    function handleDeleteImage() {
        setImage("");
    }

    return (
        <>
            {image === "" ? (
                <div className="card-upload-image">
                    <div className="card-upload-image-content">
                        <div className="card-upload-image-content-input">
                            <img
                                src={IconImage}
                                alt=""
                            />
                            <input
                                type="file"
                                onChange={handleGetImageCard}
                            />
                        </div>
                        <h5 className="card-upload-image-content-text">
                            {title}
                        </h5>
                    </div>
                </div>
            ) : (
                <div className="card-show-image">
                    <img
                        src={image}
                        alt=""
                    />
                    <div className="card-show-image-buttons">
                        <div className="card-show-image-buttons-upload">
                            <img
                                src={IconImage}
                                alt=""
                            />
                            <input
                                type="file"
                                onChange={handleGetImageCard}
                            />
                        </div>
                        <button onClick={handleDeleteImage}>
                            <img src={IconDeletGreen} alt="" />
                        </button>
                    </div>
                </div>
            )}
        </>

    )
}

export default memo(CardUploadImage);