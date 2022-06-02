import { memo, ReactElement, useState } from "react";
import { Button, Hr, InputTextLabel, SelectComponent, SelectText } from "./components";

const BUTTON = [
    { name: "EXCESS CAPACITY", id: 1 },
    { name: "PRODUCT", id: 2 },
    { name: "SUPPLIERS", id: 3 },
]

interface Props {

}

export function CardSearchProduct({ }: Props): ReactElement {

    const [active, setActive] = useState(1);

    function handleActiveButton(id: number) {
        setActive(id)
    }

    return (
        <div className="card-search-product">
            <div className="card-search-product-header">
                {BUTTON.map(button => (
                    <button
                        key={button.id}
                        className={
                            active === button.id ?
                            "card-search-product-header-button active-border"
                            : 
                            "card-search-product-header-button"
                        }
                        onClick={() => {handleActiveButton(button.id)}}
                    >
                        <p
                            className={
                                active === button.id ? 
                                "card-search-product-header-button-text active"
                                :
                                "card-search-product-header-button-text"
                            }
                        >
                            {button.name}
                        </p>
                    </button>
                ))}
            </div>
            <div className="card-search-product-inputs">
                <h6 className="card-search-product-inputs-title">
                    Search for free product lines to make a product with your brand identity
                </h6>
                <div className="card-search-product-inputs-group">
                    <InputTextLabel value={""} />
                    <SelectText value={""} />
                    <SelectComponent type={"one"} />
                    <Button title="SEARCH" />
                </div>
            </div>
        </div>
    )
}

export default memo(CardSearchProduct);