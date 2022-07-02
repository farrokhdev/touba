import {
    memo,
    ReactElement,
} from "react";
import { IconAddCircle, IconAddCircleGreen, ImageManFlying, ImageManWithBox } from "../../assets";
import { ButtonIcon } from "./components";

interface Props {

}

export function BannerLetsStart({ }: Props): ReactElement {

    return (
        <div className="banner-lets-start">
            <img src={ImageManFlying} alt="" />
            <div className="banner-lets-start-groups">
                <div className="banner-lets-start-groups-image">
                </div>
                <div className="banner-lets-start-groups-description">
                    <h4 className="banner-lets-start-groups-description-title">
                        Let’s Start
                    </h4>
                    <p className="banner-lets-start-groups-description-text">
                        The more you add details, the more you can sell and earn! so please follow this construction to have betters products in the market.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default memo(BannerLetsStart);