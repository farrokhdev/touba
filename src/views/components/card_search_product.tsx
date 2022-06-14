import { memo, ReactElement, useState } from "react";
import { Button, Divider, InputTextLabel, SelectComponent, SelectText } from "./components";

const BUTTON = [
    { name: "EXCESS CAPACITY", id: 1 },
    { name: "PRODUCT", id: 2 },
    { name: "SUPPLIERS", id: 3 },
];

const DROPDOWN = [
    { name: "link1", id: 1 },
    { name: "link2", id: 2 },
    { name: "link3", id: 3 },
    { name: "link4", id: 4 },
    { name: "link5", id: 5 },
    { name: "link6", id: 6 },
    { name: "link7", id: 7 },
    { name: "link8", id: 8 },
    { name: "link9", id: 9 },
]

interface Props {

}

export function CardSearchProduct({ }: Props): ReactElement {

    const [active, setActive] = useState(1);
    const [search, setSearch] = useState('');

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
                        onClick={() => { handleActiveButton(button.id) }}
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
                {active === 1 ? (
                    <>
                        <h6 className="card-search-product-inputs-title">
                            Search for free excess lines to make a product with your brand identity
                        </h6>
                        <div className="card-search-product-inputs-group">
                            <InputTextLabel
                                value={search}
                                onChange={(event => { setSearch(event.currentTarget.value); })}
                                title={"Product or Service"}
                                placeholder={"What product you want to produce? Eg. PET Bottle"}
                                type={"text"}
                                showDropDown={true}
                            />
                            <SelectText
                                value={""}
                                placeholderSelect={"Select Unit"}
                            />
                            <SelectComponent
                                type={"one"}
                                items={DROPDOWN}
                                placeholder={"Regional Channel"}
                            />
                            <Button title="SEARCH" />
                        </div>
                    </>
                ) : (
                    active === 2 ? (
                        <>
                            <h6 className="card-search-product-inputs-title">
                                Search for free product lines to make a product with your brand identity
                            </h6>
                            <div className="card-search-product-inputs-group">
                                <InputTextLabel
                                    value={search}
                                    onChange={(event => { setSearch(event.currentTarget.value); })}
                                    title={"Product or Service"}
                                    placeholder={"What product you want to produce? Eg. PET Bottle"}
                                    type={"text"}
                                    showDropDown={true}
                                />
                                <SelectText value={""} />
                                <SelectComponent type={"one"} />
                                <Button title="SEARCH" />
                            </div>
                        </>
                    ) : (
                        <>
                            <h6 className="card-search-product-inputs-title">
                                Search for free suppliers lines to make a product with your brand identity
                            </h6>
                            <div className="card-search-product-inputs-group">
                                <InputTextLabel
                                    value={search}
                                    onChange={(event => { setSearch(event.currentTarget.value); })}
                                    title={"Product or Service"}
                                    placeholder={"What product you want to produce? Eg. PET Bottle"}
                                    type={"text"}
                                    showDropDown={true}
                                />
                                <SelectText value={""} />
                                <SelectComponent type={"one"} />
                                <Button title="SEARCH" />
                            </div>
                        </>
                    )
                )}
            </div>
        </div>
    )
}

export default memo(CardSearchProduct);