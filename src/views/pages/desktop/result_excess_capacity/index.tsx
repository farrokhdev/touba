import { ImageTest } from "../../../../assets";
import { CardOfferHorizontal } from "../../../components/cars_offer_horizontal";
import { ComponentFilterTopbar, ComponentFilterSidebar } from "../../../components/components";
import Component_search_bar from "../../../components/component_search_bar";
import ResultExcessCapacityController from "../../../controllers/result_excess_capacity_controller";
import BottomNav from "../../../layout/bottom_nav";
import Footer from "../../../layout/footer";
import TopNav from "../../../layout/top_nav";

export class SearchResultExcessCapacity extends ResultExcessCapacityController {
  
  render() {
    return (
      <div>
        <TopNav />
        <BottomNav />
        <Component_search_bar />
        <div className=" px-4">
          <div className="mt-3">
           <ComponentFilterTopbar/>
          </div>
          <div className="row p-3     ">
            <div className="col-2">
              <ComponentFilterSidebar showButton={false} />
            </div>
            <div className="col-10">
              <div className="p-2">
                <CardOfferHorizontal
                  image={ImageTest}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  rate={4}
                  country={"chin"}
                  chart={this.TEST}
                  amount={5}
                  discountPercent={2}
                />
              </div>
              <div className="p-2">
                <CardOfferHorizontal
                  image={ImageTest}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  rate={4}
                  country={"chin"}
                  chart={this.TEST}
                  amount={5}
                  discountPercent={2}
                />
              </div>
              <div className="p-2">
                <CardOfferHorizontal
                  image={ImageTest}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  rate={4}
                  country={"chin"}
                  chart={this.TEST}
                  amount={5}
                  discountPercent={2}
                />
              </div>
              <div className="p-2">
                <CardOfferHorizontal
                  image={ImageTest}
                  status={"exp"}
                  description={
                    "Pomegranate Juice Pet Bottle, Best material and design, Ready to Order"
                  }
                  rate={4}
                  country={"chin"}
                  chart={this.TEST}
                  amount={5}
                  discountPercent={2}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchResultExcessCapacity;
