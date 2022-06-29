import { BaseComponent } from "utilities_js";
import PriceSummary from "../components/price_summary";
import ProductCart from "../components/product_cart";

interface IProps {}
interface IState {}

export default class Cart extends BaseComponent<IProps, IState> {
  state: IState = {};

  render() {
    const fakeList = [
      { quatity: 10, price: 1000, id: 1 },
      { quatity: 10, price: 1000, id: 1 },
      { quatity: 10, price: 1000, id: 1 },
      { quatity: 10, price: 1000, id: 1 },
    ];
    return (
      <div>
        <div className="smalText p-4 px-5">{"You are here: Touba >> Cart"}</div>

        <div className="cart-page d-flex flex-row mx-5">
          <div>
            <div className="mb-4 mt-2">
              <ProductCart />
            </div>
            <div className="my-4">
              <ProductCart />
            </div>
            <div className="my-4">
              <ProductCart />
            </div>
            <div className="my-4">
              <ProductCart />
            </div>
            <div className="my-4">
              <ProductCart />
            </div>
            <div className="my-4">
              <ProductCart />
            </div>
          </div>
          <div className="ms-3 mt-2">
            <PriceSummary list={fakeList} />
          </div>
        </div>
      </div>
    );
  }
}
