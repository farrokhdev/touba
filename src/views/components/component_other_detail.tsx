import React, { memo, useState } from "react";
import CongratulationBanner from "./congratulation_banner";
import {
  ComponentColors,
  ComponentColorSelect,
  ComponentFieldsetPrice,
  ComponentProductDetail,
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

const ComponentOtherDetail = () => {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState(false);

  return (
    <div>
      {" "}
      {!tab ? (
        <div style={{ width: "960px", height: "670px" }}>
          <CongratulationBanner
            onClick={() => setTab(true)}
            activeTab="Other Details"
          />
        </div>
      ) : (
        <div>
          <div>
            <ComponentProductDetail />
          </div>
          <div className="table-box mt-3 ">
            <div className="row border-bottom d-flex align-items-center ">
              <div className="row d-flex -align-items-center ">
                <div
                  onClick={() => setActive(0)}
                  className="col-3 text-center "
                >
                  <div
                    className={`item-nav py-4 ${active == 0 && "item-active"} `}
                  >
                    Packaging & Shipping
                  </div>
                </div>
                <div
                  onClick={() => setActive(1)}
                  className="col-2 text-center "
                >
                  <div
                    className={`item-nav py-4 ${active == 1 && "item-active"} `}
                  >
                    Certifications
                  </div>
                </div>
                <div
                  onClick={() => setActive(2)}
                  className="col-2 text-center "
                >
                  <div
                    className={`item-nav py-4 ${active == 2 && "item-active"} `}
                  >
                    FAQ{" "}
                  </div>
                </div>
                <div
                  onClick={() => setActive(3)}
                  className="col-2 text-center "
                >
                  <div
                    className={`item-nav py-4 ${active == 3 && "item-active"} `}
                  >
                    Other option{" "}
                  </div>
                </div>
                <div
                  onClick={() => setActive(4)}
                  className="col-2 text-center "
                >
                  <div
                    className={`item-nav py-4 ${active == 4 && "item-active"}`}
                  >
                    Other option
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 border-bottom p-3">
              {active == 0 && (
                <div className="">
                  {" "}
                  <ButtonAdd onClick={() => {}} />
                </div>
              )}
              {active == 1 && (
                <div>
                  <div className="row">
                    <div className="col-6 px-2">
                      <InputTextLabel
                        type="select"
                        placeholder="Certificate Name"
                        title="Certificate:"
                        value=""
                        onChange={() => {}}
                        showDropDown={true}
                      />
                    </div>
                    <div className="col-6 px-2">
                      <InputTextLabel
                        type="select"
                        placeholder="123456"
                        title="Code::"
                        value=""
                        onChange={() => {}}
                        showDropDown={true}
                      />
                    </div>
                  </div>
                </div>
              )}
              {active == 2 && (
                <div className="">
                  <div className="row">
                    <div>
                      <InputTextLabel
                        type="select"
                        placeholder="Type Question Here"
                        title="Question"
                        value=""
                        onChange={() => {}}
                        showDropDown={true}
                      />
                    </div>
                    <div className="mt-3 ">
                      <InputTextLabel
                        type="select"
                        placeholder="Type Answer"
                        title="Answer"
                        value=""
                        onChange={() => {}}
                        showDropDown={true}
                      />
                    </div>
                    <div className="border-bottom-dashed mt-3"></div>
                    <div className="mt-3">
                      <InputTextLabel
                        type="select"
                        placeholder="Type Question Here"
                        title="Question"
                        value=""
                        onChange={() => {}}
                        showDropDown={true}
                      />
                    </div>
                    <div className="mt-3 ">
                      <InputTextLabel
                        type="select"
                        placeholder="Type Answer"
                        title="Answer"
                        value=""
                        onChange={() => {}}
                        showDropDown={true}
                      />
                    </div>
                    <div className="border-bottom-dashed mt-3"></div>
                    <div className="mt-1">
                      <ButtonAdd onClick={() => {}} />
                    </div>
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
                <button className="btn-cancle p-3">Save and Quit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ComponentOtherDetail);
