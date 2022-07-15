import { ProductCart } from "../../../components/components";
import PriceSummary from "../../../components/price_summary";
import CardController from "../../../controllers/card_controller";

export class CardPage extends CardController {

  render() {
    const {
      isShow,
    } = this.state;
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
                <PriceSummary list={this.TEST} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardPage;
