import { memo, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

interface Props {
    images: string[];
}

export function CardBestBrand({images}: Props): ReactElement {

    return (
        <div className="card-best-brand">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[ Autoplay]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt="" className="image-brand"/>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default memo(CardBestBrand);