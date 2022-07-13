import { ImageTest } from "../../../../assets";
import { ButtonSelect } from "../../../components/button_select";
import { CardOfferHorizontal } from "../../../components/cars_offer_horizontal";
import { ComponentFilterSidebar, CardLike } from "../../../components/components";
import ToubaSpecialOferControllers from "../../../controllers/touba_special_offers";


export class ToubaSpecialOffers extends ToubaSpecialOferControllers {
  text = "You are here: Touba >> Specaial Offers";

  TEST = [
    { name: "JAN", size: 20 },
    { name: "FEB", size: 30 },
    { name: "MAR", size: 40 },
    { name: "APR", size: 50 },
    { name: "MAY", size: 60 },
    { name: "JUN", size: 70 },
    { name: "JUL", size: 80 },
    { name: "AUG", size: 90 },
    { name: "SEP", size: 100 },
    { name: "OCT", size: 20 },
    { name: "NOV", size: 20 },
    { name: "DEC", size: 20 },
  ];
  test = (e: boolean) => {
    this.setState({ showContent: e });
  };
  render() {
    return (
      <div>
        <div className=" px-5">
          <div className="smalText p-2">{this.text}</div>

          <div className="d-flex justify-content-center mt-3">
            <ButtonSelect
              state={this.state.activeTab}
              setState1={()=> this.setState({activeTab : 1})}
              setState2={()=>this.setState({activeTab : 2})}
              titleButton1="Products"
              titleButton2="Excess Capacity"
            />
          </div>
          <div className="row p-3     ">
            <div className="col-3">
              <ComponentFilterSidebar showButton={true} />
            </div>
            {this.state.activeTab==2 && (
              <div className="col-9">
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
            )}
            {this.state.activeTab==1 && (
              <div className="col-9">
                <div className="row">
                  <div className="col-4 p-2">
                    <CardLike discount={true} percent={'30'} />
                  </div>
                  <div className="col-4 p-2">
                  <CardLike discount={true} percent={'30'} />
                  </div>

                  <div className="col-4 p-2">
                  <CardLike discount={true} percent={'30'} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 p-2">
                  <CardLike discount={true} percent={'30'} />
                  </div>
                  <div className="col-4 p-2">
                  <CardLike discount={true} percent={'30'} />
                  </div>

                  <div className="col-4 p-2">
                  <CardLike discount={true} percent={'30'} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 p-2">
                    <CardLike discount={true} percent={'30'} />
                  </div>
                  <div className="col-4 p-2">
                    <CardLike discount={true} percent={'30'} />
                  </div>

                  <div className="col-4 p-2">
                    <CardLike discount={true} percent={'30'} />
                  </div>
                </div>
              </div>
            )}
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
    );
  }
}

export default ToubaSpecialOffers;
