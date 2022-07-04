import React, { memo, useState } from "react";
import { BannerLetsStart } from "./banner_lets_start";
import {
  ComponentColors,
  ComponentColorSelect,
  ComponentFieldsetPrice,
  ComponentRadioSquare,
  ComponentTextArea,
  TextIconVerticalDashboard,
} from "./components";
import { InputTextLabel } from "./input_text_label";
import {
  IconCalling,
  IconDanger,
  IconShop,
  ImageJuicer,
  ImageManFlying,
  ImageManWithBox,
  ImageTest,
} from "../../assets";
import Select_component_double from "./select_component_double";
import ButtonAdd from "./button_add";
import ComponentStorage from "./component_storage";
import { Divider } from "./divider";

const ComponentBasicInformation = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div>
        <BannerLetsStart />
      </div>
      <div className="table-box ">
        <div className="row border-bottom d-flex align-items-center ">
          <div className="row d-flex -align-items-center ">
            <div onClick={() => setActive(0)} className="col-2 text-center ">
              <div className={`item-nav py-4 ${active == 0 && "item-active"} `}>
                Products
              </div>
            </div>
            <div onClick={() => setActive(1)} className="col-2 text-center ">
              <div className={`item-nav py-4 ${active == 1 && "item-active"} `}>
                Attributes
              </div>
            </div>
            <div onClick={() => setActive(2)} className="col-2 text-center ">
              <div className={`item-nav py-4 ${active == 2 && "item-active"} `}>
                Price & Delivery
              </div>
            </div>
            <div onClick={() => setActive(3)} className="col-2 text-center ">
              <div className={`item-nav py-4 ${active == 3 && "item-active"} `}>
                Descriptions
              </div>
            </div>
            <div onClick={() => setActive(4)} className="col-2 text-center ">
              <div className={`item-nav py-4 ${active == 4 && "item-active"}`}>
                Specifications
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 border-bottom">
          {active == 0 && (
            <div>
              {" "}
              <div className="row d-flex align-items-center">
                <div className="col-6 p-2">
                  <InputTextLabel
                    type="text"
                    placeholder="Technical Support"
                    title="Product Title"
                    value=""
                    onChange={() => {}}
                    showDropDown={false}
                  />
                </div>
                <div className="col-6 text-start p-2">
                  <TextIconVerticalDashboard
                    icon={IconDanger}
                    title={"Hint text about the title"}
                  />
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-6 p-2">
                  <Select_component_double
                    items1={[{ name: "Agriculture", id: 0 }]}
                    items2={[{ name: "Machines", id: 0 }]}
                  />
                </div>
                <div className="col-6 text-start p-2">
                  <TextIconVerticalDashboard
                    icon={IconDanger}
                    title={"Hint text about the title"}
                  />
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-6 p-2">
                  <InputTextLabel
                    type="text"
                    placeholder="Milk Powder , Food Powders , Food raw materials"
                    title="Keywords"
                    value=""
                    onChange={() => {}}
                    showDropDown={false}
                  />
                </div>
                <div className="col-4 text-start p-2">
                  <div className="row mt-3">
                    <div className=" d-flex align-items-center justify-content-between">
                      <div className="smalText">Keywords Quality</div>
                      <div className="bigText">Excelent!</div>
                    </div>
                    <div className="progress progress-detail mt-2">
                      <div
                        className={`progress-bar-detail w-50`}
                        role="progressbar"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-2 d-flex justify-content-center align-self-end mb-1">
                  <div className="smalText ">Add 3 More Keywords</div>
                </div>
              </div>
            </div>
          )}
          {active == 1 && (
            <div>
              <TextIconVerticalDashboard
                icon={IconDanger}
                title={"Hint text about the feature"}
              />
              <div className="mt-3">
                <TextIconVerticalDashboard
                  icon={IconDanger}
                  title={"Hint text about the feature"}
                />
              </div>
              <div className="p-2">
                <ComponentColors />
              </div>
              <div className="p-2">
                <ButtonAdd onClick={() => {}} />
              </div>
            </div>
          )}
          {active == 2 && (
            <div className="p-3">
              <div className="mt-2">
                <ComponentColorSelect />
              </div>
              <div className="row d-flex align-items-center mt-4">
                <div className="col-6 ">
                  <Select_component_double
                    items1={[{ name: "Select Unit", id: 0 }]}
                    items2={[{ name: "Min Order", id: 0 }]}
                  />
                </div>
                <div className="col-6 text-start ">
                  <TextIconVerticalDashboard
                    icon={IconDanger}
                    title={"Hint text about the title"}
                  />
                </div>
              </div>
              <div className="mt-3">
                <ComponentFieldsetPrice />
                <div className=" mt-3  text-start ">
                  <TextIconVerticalDashboard
                    icon={IconDanger}
                    title={"Hint text about the delivery and price"}
                  />
                </div>
              </div>
              <div className="mt-3">
                <ComponentFieldsetPrice />
                <div className=" mt-3  text-start ">
                  <TextIconVerticalDashboard
                    icon={IconDanger}
                    title={"Hint text about the delivery and price"}
                  />
                </div>
              </div>
              <div className="mt-4 mb-4">
                {" "}
                <ButtonAdd onClick={() => {}} />
              </div>
              <Divider direction="vertical" />
              <div className="mt-3">
                <ComponentRadioSquare
                  active={true}
                  title="Do you want to add any offer for this product?"
                />
              </div>
              <div className="mt-3 col-5">
                <InputTextLabel
                  type="text"
                  placeholder="25"
                  title="Offer Amount(%)"
                  value=""
                  onChange={() => {}}
                  showDropDown={false}
                />
              </div>
            </div>
          )}
          {active == 3 && (
            <div className="px-3">
              <div className="">
                <ComponentTextArea />
              </div>
              <div className=" mt-3  text-start ">
                <TextIconVerticalDashboard
                  icon={IconDanger}
                  title={"Hint text about the feature"}
                />
              </div>
            </div>
          )}
        </div>
        <div className="d-flex p-4 justify-content-between align-items-center">
          <div className="d-flex align-items-center ">
            <button className="btn-save-change p-3">Next Step</button>
            {active > 0 && (
              <div className="px-2">
                <button
                  onClick={() => setActive(active - 1)}
                  className="btn-outline  p-3"
                >
                  {" "}
                  Back
                </button>
              </div>
            )}
          </div>

          <div>
            <button className="btn-cancle p-3">Cancle</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentBasicInformation);
