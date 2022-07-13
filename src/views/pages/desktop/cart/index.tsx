import { BaseComponent } from "utilities_js";
import {
  CardDetails,
  CardLike,
  CardMain,
  ComponentDetailPRoductSideCard,
  ComponentProductSideCard,
  ProductCart,
} from "../../../components/components";
import honur from "../../../assets/images/honur.svg";
import image_test from "../../../assets/images/image-test.png";
import { CardProduct } from "../../../components/card_product";
import Inquiry from "../../../components/inquiry";
import PriceSummary from "../../../components/price_summary";

interface IProps {}

interface IState {
  isShow: boolean;
}

const TEST = [
  { quantity: 1, price: 100 },
  { quantity: 1, price: 310 },
  { quantity: 1, price: 401 },
];

export class CartPage extends BaseComponent<IProps, IState> {
  test = "You are here: Touba >> Cart";
  state: IState = {
    isShow: false,
  };
  showInquiry = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  render() {
    return (
      <div>
        <div className="px-5">
          <div className="smalText p-2">{this.test}</div>
          <div className="row">
            <div className="col-9 p-2">
              <div>
                <div className="mb-4">
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
            </div>
            <div className="col-3 p-2">
              <div>
                <PriceSummary list={TEST} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartPage;
