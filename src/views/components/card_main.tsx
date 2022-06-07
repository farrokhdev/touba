import React, { memo, useState } from "react";
import { ContentRelated } from "./components";
import Content from "./content_product";
import Slider from "./slider";

interface Props{
  show:boolean
  image:any
  tabItemOne:string
  tabItemTwo:string

}
const CardMain = ({show,image,tabItemOne,tabItemTwo}:Props) => {
  const [tab, setTab] = useState(true);
  return (
    <div>
      <div className="card-main">
        <div className="product-tabs row px-4">
          <div onClick={()=>setTab(true)} className={`${tab ? 'tabActive ' :''} col-2   text-center cursor-pointer`}>
            <p>{tabItemOne}</p>
          </div>
          <div onClick={()=>setTab(false)} className={`${!tab ? 'tabActive' :''} col-3   text-center cursor-pointer`}>
            <p>{tabItemTwo}</p>
          </div>
        </div>
        {tab && (
          <div className="row p-4">
            <div className="col-5">
              <Slider image={image} />
            </div>
            <div className="col-7 p-4">
              <Content show={show} />
            </div>
          </div>
        )}
        {!tab && (
          <div className="p-4">
            <ContentRelated />{" "}
          </div>
        )}
      </div>
    </div>
  );
};
export default memo(CardMain);
