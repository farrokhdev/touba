import { BaseComponent } from "utilities_js";
import { ImageTest } from "../../../../assets";
import { CardMain, ComponentProductSideCard, CardLike, CardDetails, ComponentDetailPRoductSideCard } from "../../../components/components";
import Inquiry from "../../../components/inquiry";
import ProductSingleController from "../../../controllers/product_single_controller";

export class ToubaProductSingle1 extends ProductSingleController {

  render() {
    const { isShow } = this.state;
    return (
      <div className="product-Single-Page">
        <div className="px-5">
          <div className="smalText p-2" onClick={this.navigateToDetail}>{this.test}sss</div>
          <div className="row">
            <div className="col-9 p-2">
              <div>
                <CardMain
                  tabItemOne="Product"
                  tabItemTwo="Related Excess Capacity"
                  image={ImageTest}
                  show={true}
                />
              </div>
            </div>
            <div className="col-3 p-2">
              <div>
                <ComponentProductSideCard handleAddToCart={() => this.showInquiry()} />
              </div>
            </div>
          </div>
          <div>
            <div className="bigText mt-3">You may also like</div>
            <div className="row mt-4">
              <div className="col-3 p-2">
                <CardLike navigate="" />
              </div>
              <div className="col-3 p-2">
                <CardLike />
              </div>
              <div className="col-3 p-2">
                <CardLike />
              </div>
              <div className="col-3 p-2">
                <CardLike />
              </div>
            </div>
          </div>
          <div>
            <div className="bigText mt-4">Product Details</div>
            <div className="row mt-4">
              <div className="col-9 p-2">
                <CardDetails />
              </div>
              <div className="col-3 p-2">
                <div>
                  <ComponentDetailPRoductSideCard />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bigText mt-3">Frequently bought together</div>
            <div className="row mt-4">
              <div className="col-3 p-2">
                <CardLike />
              </div>
              <div className="col-3 p-2">
                <CardLike />
              </div>
              <div className="col-3 p-2">
                <CardLike />
              </div>
              <div className="col-3 p-2">
                <CardLike />
              </div>
            </div>
          </div>
          <div>
            <div className="bigText mt-3">Supplier's popular products</div>
            <div className="row mt-4">
              <div className="col-3 p-2">
                <CardLike />
              </div>
              <div className="col-3 p-2">
                <CardLike />
              </div>
              <div className="col-3 p-2">
                <CardLike />
              </div>
              <div className="col-3 p-2">
                <CardLike />
              </div>
            </div>
          </div>
        </div>
        {this.state.isShow ? (
          <div className="product-Inquiry d-flex flex-row">
            <div
              className="blur-Background"
              onClick={() => this.setState({ isShow: false })}
            >
              <span>sv</span>
            </div>
            <Inquiry />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ToubaProductSingle1;
