import {
    memo,
    ReactElement,
    useCallback,
    MouseEvent,
    ButtonHTMLAttributes,
    useState
} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    titleButton1: string;
    titleButton2: string;
    onClick?:any
}

export function ButtonSelect({ onClick, titleButton1, titleButton2 }: Props): ReactElement {

    const [activeButton, setActiveButton] = useState(true);

    function handleOnClickButtonOne () {
        setActiveButton(true);
        onClick(true)

    }; 
    function handleOnClickButtonTwo () {
        setActiveButton(false);
        onClick(false)
    };
    return (
        <div className="button-select">
            {activeButton === true ? (
                <>
                    <button
                        className="button-select-one-active"
                        onClick={handleOnClickButtonOne}
                    >
                        <p className="text-active">
                            {titleButton1}
                        </p>
                    </button><button
                        className="button-select-two-deactive"
                        onClick={handleOnClickButtonTwo}
                    >
                        <p className="text-deactive">
                            {titleButton2}
                        </p>
                    </button>
                </>
            ) : (
                <>
                    <button
                        className="button-select-one-deactive"
                        onClick={handleOnClickButtonOne}
                    >
                        <p className="text-deactive">
                            {titleButton1}
                        </p>
                    </button><button
                        className="button-select-two-active"
                        onClick={handleOnClickButtonTwo}
                    >
                        <p className="text-active">
                            {titleButton2}
                        </p>
                    </button>
                </>
            )}

        </div>
    )
}

export default memo(ButtonSelect);