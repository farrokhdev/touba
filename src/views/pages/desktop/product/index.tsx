import { ComponentFilterSidebar, ComponentFilterRangeSlider, SelectComponent, ComponentCapicityFilter, CardLike } from "../../../components/components";
import ProductController from "../../../controllers/product_controller";

export class ToubaProduct extends ProductController {
  
  render() {
    return (
      <div>
        <div className="px-5">
          <div className="smalText p-4 px-5" onClick={this.navigateToDetail}>{this.test}</div>
          <div className="row p-3">
            <div className="col-3">
              <ComponentFilterSidebar showButton={true} />
            </div>
            <div className="col-9">
              <div className="p-2">
                <ComponentFilterRangeSlider />
              </div>
              <div className="p-2 d-flex align-items-center justify-content-between">
                <div className="bigText">221 Products</div>
                <div>
                  <SelectComponent type="one" onSelect={function (name: string): void {
                    throw new Error("Function not implemented.");
                  } } />
                </div>
              </div>
              <div className="p-2 d-flex align-items-center mt-3">
                <ComponentCapicityFilter />
              </div>
              <div className="row">
                <div className="col-4 p-2">
                  <CardLike navigate="/detail-product"/>
                </div>
                <div className="col-4 p-2">
                  <CardLike />
                </div>

                <div className="col-4 p-2">
                  <CardLike />
                </div>
              </div>
              <div className="row">
                <div className="col-4 p-2">
                  <CardLike />
                </div>
                <div className="col-4 p-2">
                  <CardLike />
                </div>

                <div className="col-4 p-2">
                  <CardLike />
                </div>
              </div>
              <div className="row">
                <div className="col-4 p-2">
                  <CardLike />
                </div>
                <div className="col-4 p-2">
                  <CardLike />
                </div>

                <div className="col-4 p-2">
                  <CardLike />
                </div>
                <div className="d-flex justify-content-center pagination mt-2">
                  <div className="bigText">
                    <div>1</div>
                  </div>
                  <div className="bigText">
                    <div>2</div>
                  </div>
                  <div className="bigText">
                    <div className="active">3</div>
                  </div>
                  <div className="bigText">
                    <div>4</div>
                  </div>
                  <div className="bigText">
                    <div className="">5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToubaProduct;
