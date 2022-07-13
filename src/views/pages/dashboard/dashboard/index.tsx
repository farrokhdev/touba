import { IconAddCircle, IconNotification, ImageNasa, ImageOil, IconChat, IconProfile, IconWallet } from "../../../../assets";
import { ButtonIconDashboard } from "../../../components/button_icon_dashboard";
import { CardGroupChat } from "../../../components/card_group_chat";
import { ComponentDashboardHeader, ComponentMessage, ComponentMessageImage, ComponentProgress, ComponentMapBox, ComponentKeyWord } from "../../../components/components";
import ComponentLineChart from "../../../components/component_line_chart";
import Offcanvas from "../../../components/offcanvas";
import DashboarPageController from "../../../controllers/dashboard_page_controller";
import Summary from "../../../components/summary";

export default class DashboardPage extends DashboarPageController {
  render() {
    return (
      <div className="row">
        <div className="col-9 ">
          <div className="border-bottom mb-4">
            {" "}
            <div className=" bigText border-bottom p-4">Dashboard</div>
          </div>
          <div className="mt-5 pt-5 p-2 ">
            <ComponentDashboardHeader />
          </div>
          <div className=" mt-5 ">
            <div className="boldText px-3">Last Status</div>
            <div className="row mt-3">
              <div className="col-3 p-2">
                <Summary
                  img={IconWallet}
                  title={"Total Income:"}
                  amount={"$ 125,000"}
                />
              </div>
              <div className="col-3 p-2">
                <Summary
                  img={IconWallet}
                  title={"Total Income:"}
                  amount={"$ 125,000"}
                />
              </div>
              <div className="col-3 p-2">
                <Summary
                  img={IconWallet}
                  title={"Total Income:"}
                  amount={"$ 125,000"}
                />
              </div>
              <div className="col-3 p-2">
                <Summary
                  img={IconWallet}
                  title={"Total Income:"}
                  amount={"$ 125,000"}
                />
              </div>
            </div>
          </div>
          <div className="mt-3 p-3">
            <ComponentLineChart />
          </div>
        </div>
        <div className="col-3 bg-white">
          <div className=" px-3 row d-flex align-items-center">
            <div className="col-12 dashboard-Nav d-flex">
              <div className="btn-Container align-items-center d-flex">
                <button className="add-Btn d-flex align-items-center">
                  <img src={IconAddCircle} alt="add" />
                  <span>ADD NEW</span>
                </button>
                <div className="col-2 ">
                  <div className="">
                    <ButtonIconDashboard icon={IconNotification} />
                  </div>
                </div>
                <div className="col-3 ">
                  <div className="mx-1">
                    <Offcanvas onActive={this.handleActiveTab}>
                      {this.state.active === 3 ? (
                        <>
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                            date={"25 MINS"} disabled={false} />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                            date={"25 MINS"} disabled={false} />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                            date={"25 MINS"} disabled={false} />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                            date={"25 MINS"} disabled={false} />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                            date={"25 MINS"} disabled={false} />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                            date={"25 MINS"} disabled={true} />
                        </>
                      ) : (
                        <>
                          {this.state.active === 2 ? (
                            <>
                              <ComponentMessage />
                              <ComponentMessage />
                              <ComponentMessage />
                              <ComponentMessage />
                              <ComponentMessage />
                              <ComponentMessage />
                              <ComponentMessage />
                            </>
                          ) : (
                            <>
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                            </>
                          )}
                        </>
                      )}

                    </Offcanvas>
                    <ButtonIconDashboard icon={IconChat} dataBsToggle="offcanvas" dataBsTarget="#offcanvasRight" aria-controls="offcanvasRight" />
                  </div>
                </div>
                <div className="col-2 ">
                  <div className="">
                    <ButtonIconDashboard icon={IconProfile} dropdown="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 border-bottom">
            <ComponentProgress />
          </div>
          <div className="p-3 border-bottom">
            <ComponentProgress />
          </div>
          <div className="p-3 border-bottom">
            <ComponentProgress />
          </div>
          <div className="p-3 border-bottom">
            <ComponentProgress />
          </div>
          <div className="d-flex justify-content-between align-items-center p-3">
            <div className="boldText">Insights</div>
            <div className="text-red">View All</div>
          </div>
          <div className="p-3">
            <ComponentMapBox />
          </div>
          <div className="p-3">
            <ComponentKeyWord />
          </div>
        </div>
      </div>
    );
  }
}
