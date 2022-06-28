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
    state: number;
    setState1(): void;
    setState2(): void;
}

export function ButtonSelect({ setState1, setState2, titleButton1, titleButton2, state }: Props): ReactElement {


    function handleOnClickButtonOne() {
        setState1()
    };
    function handleOnClickButtonTwo() {
        setState2()
    };

    return (
        <div className="button-select">
            {state === 1 ? (
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