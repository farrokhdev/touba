import { ChangeEvent, memo, ReactElement, useState } from "react";
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
    const [searchExcess, setSearchExcess] = useState('');
    const [searchProduct, setSearchProduct] = useState('');
    const [searchSuppliers, setSearchSuppliers] = useState('');
    const [selectExcess, setSelectExcess] = useState('');
    const [selectTextExcess, setSelectTextExcess] = useState('');
    const [valueExcess, setValueExcess] = useState('');
    const [selectProduct, setSelectProduct] = useState('');
    const [selectTextProduct, setSelectTextProduct] = useState('');
    const [valueProduct, setValueProduct] = useState('');
    const [selectSuppliers, setSelectSuppliers] = useState('');
    const [selectTextSuppliers, setSelectTextSuppliers] = useState('');
    const [valueSuppliers, setValueSuppliers] = useState('');

    function handleActiveButton(id: number) {
        setActive(id)
    };

    function handleGetSelectedExcess(name: string) {
        setSelectExcess(name);
    };

    function handleGetSelectedTextExcess(name: string) {
        setSelectTextExcess(name);
    };

    function handleGetValueSelectedExcess(event: ChangeEvent<HTMLInputElement>) {
        setValueExcess(event.currentTarget.value);
    };

    function handleGetSelectedProduct(name: string) {
        setSelectProduct(name);
    };

    function handleGetSelectedTextProduct(name: string) {
        setSelectTextProduct(name);
    };

    function handleGetValueSelectedProduct(event: ChangeEvent<HTMLInputElement>) {
        setValueProduct(event.currentTarget.value);
    };

    function handleGetSelectedSuppliers(name: string) {
        setSelectSuppliers(name);
    };

    function handleGetSelectedTextSuppliers(name: string) {
        setSelectTextSuppliers(name);
    };

    function handleGetValueSelectedSuppliers(event: ChangeEvent<HTMLInputElement>) {
        setValueSuppliers(event.currentTarget.value);
    };

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
                                value={searchExcess}
                                onChange={(event => { setSearchExcess(event.currentTarget.value); })}
                                title={"Product or Service"}
                                placeholder={"What product you want to produce? Eg. PET Bottle"}
                                type={"text"}
                                showDropDown={true}
                            />
                            <SelectText
                                value={valueExcess}
                                placeholderSelect={"Select Unit"}
                                onSelected={handleGetSelectedTextExcess}
                                onChange={handleGetValueSelectedExcess}
                            />
                            <SelectComponent
                                type={"one"}
                                items={DROPDOWN}
                                placeholder={"Regional Channel"}
                                onSelect={handleGetSelectedExcess}
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
                                    value={searchProduct}
                                    onChange={(event => { setSearchProduct(event.currentTarget.value); })}
                                    title={"Product or Service"}
                                    placeholder={"What product you want to produce? Eg. PET Bottle"}
                                    type={"text"}
                                    showDropDown={true}
                                />
                                <SelectText
                                    value={valueProduct}
                                    placeholderSelect={"Select Unit"}
                                    onSelected={handleGetSelectedTextProduct}
                                    onChange={handleGetValueSelectedProduct}
                                />
                                <SelectComponent
                                    type={"one"}
                                    items={DROPDOWN}
                                    placeholder={"Regional Channel"}
                                    onSelect={handleGetSelectedProduct}
                                />
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
                                    value={searchSuppliers}
                                    onChange={(event => { setSearchSuppliers(event.currentTarget.value); })}
                                    title={"Product or Service"}
                                    placeholder={"What product you want to produce? Eg. PET Bottle"}
                                    type={"text"}
                                    showDropDown={true}
                                />
                                <SelectText
                                    value={valueSuppliers}
                                    placeholderSelect={"Select Unit"}
                                    onSelected={handleGetSelectedTextSuppliers}
                                    onChange={handleGetValueSelectedSuppliers}
                                />
                                <SelectComponent
                                    type={"one"}
                                    items={DROPDOWN}
                                    placeholder={"Regional Channel"}
                                    onSelect={handleGetSelectedSuppliers}
                                />
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