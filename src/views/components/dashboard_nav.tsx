import React, { useState } from "react";
import {
  IconAddCircle,
  IconArrowBlack,
  IconChat,
  IconNotification,
  IconProfile,
  ImageNasa,
  ImageOil,
} from "../../assets";
import { ButtonIconDashboard } from "./button_icon_dashboard";
import { CardGroupChat } from "./card_group_chat";
import { ComponentMessage, ComponentMessageImage } from "./components";
import Offcanvas from "./offcanvas";

export type IProps = {
  title: string;
};

const DashboardNav = ({ title }: IProps) => {

  const [active, setActive] = useState(0);

  const handleActiveTab = (number: number) => {
    setActive(number);
  }
  return (
    <div className="dashboard-Nav d-flex flex-row align-items-center justify-content-between px-4">
      <span className="dashboard-Title">{title}</span>
      <div className="btn-Container align-items-center d-flex">
        <button className="add-Btn w-100">
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
            <Offcanvas onActive={handleActiveTab}>
              {active === 3 ? (
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
                  {active === 2 ? (
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
                    <div className="p-2">
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
                    </div>
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
  );
};

export default DashboardNav;
