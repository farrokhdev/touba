import {
    memo,
    ReactElement,
} from "react";
import { IconAddCircle, IconAddCircleGreen, ImageManWithBox } from "../../assets";
import { ButtonIcon } from "./components";

interface Props {

}

export function BannerCongratulations({ }: Props): ReactElement {

    return (
        <div className="banner-congratulations">
            <img src={ImageManWithBox} alt="" />
            <div className="banner-congratulations-content">
                <h4 className="banner-congratulations-content-title">
                    Congratulations
                </h4>
                <p className="banner-congratulations-content-description">
                    You have more than <span>150</span> products! You sold more than <span>150,000</span> items of them!
                </p>
            </div>
            <div className="banner-congratulations-button">
                <ButtonIcon icon={IconAddCircleGreen} nameButton={"Add New Product"} />
            </div>
        </div>
    )
}

export default memo(BannerCongratulations);