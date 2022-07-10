import React, { memo, useState } from "react";
import CongratulationBanner from "./congratulation_banner";
import {
  CardLike,
  ComponentColors,
  ComponentColorSelect,
  ComponentFieldsetPrice,
  ComponentProductDetail,
  ComponentRadioCircle,
  ComponentRadioSquare,
  ComponentTextArea,
  TextIconVerticalDashboard,
} from "./components";
import { InputTextLabel } from "./input_text_label";
import image_test from "../../assets/images/image-test.png";

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
import { ModalCompany } from "./modal_company";
import { CardProduct } from "./card_product";
const ComponentRelatedItems = () => {
  const [active, setActive] = useState(0);
  const [shoModalProduct, setShowModalProduct] = useState(false);
  const TEST = [
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
  return (
    <div>
      <div>
        <div>
          <ComponentProductDetail />
        </div>
        <div className="table-box mt-3 ">
          <div className="row border-bottom d-flex align-items-center ">
            <div className="row d-flex -align-items-center ">
              <div onClick={() => setActive(0)} className="col-4 text-center ">
                <div
                  className={`item-nav py-4 ${active == 0 && "item-active"} `}
                >
                  Related Products{" "}
                </div>
              </div>
              <div onClick={() => setActive(1)} className="col-4 text-center ">
                <div
                  className={`item-nav py-4 ${active == 1 && "item-active"} `}
                >
                  Related excess capacity{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 border-bottom p-3">
            {active == 0 && (
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
                <div className="p-2 mt-3">
                  <ButtonAdd onClick={() => setShowModalProduct(true)} />
                </div>
                <div>
                  {shoModalProduct && (
                    <ModalCompany
                      onClose={() => setShowModalProduct(false)}
                      onSave={() => setShowModalProduct(false)}
                    >
                      <div className="p-2">
                        <div className="pt-3 col-5 border-bottom">
                        <div className="col-5 mb-3 ">
                            <InputTextLabel
                              type="select"
                              placeholder="Name of product"
                              title="Search Products"
                              value=""
                              onChange={() => {}}
                              showDropDown={true}
                            />
                          </div>
                        </div>
                        <div className="row mt-3">
                          {" "}
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
                      </div>{" "}
                    </ModalCompany>
                  )}
                </div>
              </div>
            )}
            {active == 1 && (
              <div>
                <div className="row">
                  <div className="col-6 p-2">
                    <CardProduct
                      image={image_test}
                      status={"exp"}
                      description={"Pomegranate Juice Pet Bottle, "}
                      chart={TEST}
                      amount={5}
                    />{" "}
                  </div>
                  <div className="col-6 p-2">
                    <CardProduct
                      image={image_test}
                      status={"exp"}
                      description={"Pomegranate Juice Pet Bottle, "}
                      chart={TEST}
                      amount={5}
                    />{" "}
                  </div>
                  <div className="p-2 mt-3">
                    <ButtonAdd onClick={() => setShowModalProduct(true)} />
                  </div>
                  {shoModalProduct && (
                    <ModalCompany
                      onClose={() => setShowModalProduct(false)}
                      onSave={() => setShowModalProduct(false)}
                    >
                      <div className="p-2">
                        <div className="pt-3  border-bottom">
                          <div className="col-5 mb-3 ">
                            <InputTextLabel
                              type="select"
                              placeholder="Name of excess capacity"
                              title="Search Excess Capacity"
                              value=""
                              onChange={() => {}}
                              showDropDown={true}
                            />
                          </div>
                        </div>
                        <div className="row mt-3">
                          {" "}
                          <div className="col-6 p-2">
                            <CardProduct
                              image={image_test}
                              status={"exp"}
                              description={"Pomegranate Juice Pet Bottle, "}
                              chart={TEST}
                              amount={5}
                            />{" "}
                          </div>
                          <div className="col-6 p-2">
                            <CardProduct
                              image={image_test}
                              status={"exp"}
                              description={"Pomegranate Juice Pet Bottle, "}
                              chart={TEST}
                              amount={5}
                            />{" "}
                          </div>
                        </div>
                        <div className="row mt-3">
                          {" "}
                          <div className="col-6 p-2">
                            <CardProduct
                              image={image_test}
                              status={"exp"}
                              description={"Pomegranate Juice Pet Bottle, "}
                              chart={TEST}
                              amount={5}
                            />{" "}
                          </div>
                          <div className="col-6 p-2">
                            <CardProduct
                              image={image_test}
                              status={"exp"}
                              description={"Pomegranate Juice Pet Bottle, "}
                              chart={TEST}
                              amount={5}
                            />{" "}
                          </div>
                        </div>
                      </div>{" "}
                    </ModalCompany>
                  )}
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
    </div>
  );
};

export default memo(ComponentRelatedItems);
