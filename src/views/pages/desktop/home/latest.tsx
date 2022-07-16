import { Navigation, Grid } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageTest } from "../../../../assets";
import { CardProduct } from "../../../components/card_product";
import HomeController from "../../../controllers/home_controller";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

class Latest extends HomeController {
    render() {
        return (
            <>
                <h4 className="home-section-latest-title">
                    Latest Excess Capacites
                </h4>
                <div className="home-section-latest-group-cards">
                    <Swiper
                        slidesPerView={3}
                        grid={{
                            rows: 2,
                        }}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Grid, Navigation]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 80,
                            },
                            769: {
                                slidesPerView: 1,
                                spaceBetween: 80,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            1441: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            1700: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            }
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide className="item-swiper">
                            <CardProduct
                                image={ImageTest}
                                status={"Finish Product"}
                                description={"Pomegranate Juice Pet Bottle..."}
                                amount={200}
                                chart={this.TEST}
                            />
                        </SwiperSlide>
                        <SwiperSlide className="item-swiper">
                            <CardProduct
                                image={ImageTest}
                                status={"Finish Product"}
                                description={"Pomegranate Juice Pet Bottle..."}
                                amount={200}
                                chart={this.TEST}
                            />
                        </SwiperSlide>
                        <SwiperSlide className="item-swiper">
                            <CardProduct
                                image={ImageTest}
                                status={"Finish Product"}
                                description={"Pomegranate Juice Pet Bottle..."}
                                amount={200}
                                chart={this.TEST}
                            />
                        </SwiperSlide>
                        <SwiperSlide className="item-swiper">
                            <CardProduct
                                image={ImageTest}
                                status={"Finish Product"}
                                description={"Pomegranate Juice Pet Bottle..."}
                                amount={200}
                                chart={this.TEST}
                            />
                        </SwiperSlide>
                        <SwiperSlide className="item-swiper">
                            <CardProduct
                                image={ImageTest}
                                status={"Finish Product"}
                                description={"Pomegranate Juice Pet Bottle..."}
                                amount={200}
                                chart={this.TEST}
                            />
                        </SwiperSlide>
                        <SwiperSlide className="item-swiper">
                            <CardProduct
                                image={ImageTest}
                                status={"Finish Product"}
                                description={"Pomegranate Juice Pet Bottle..."}
                                amount={200}
                                chart={this.TEST}
                            />
                        </SwiperSlide>
                        <SwiperSlide className="item-swiper">
                            <CardProduct
                                image={ImageTest}
                                status={"Finish Product"}
                                description={"Pomegranate Juice Pet Bottle..."}
                                amount={200}
                                chart={this.TEST}
                            />
                        </SwiperSlide>
                        <SwiperSlide className="item-swiper">
                            <CardProduct
                                image={ImageTest}
                                status={"Finish Product"}
                                description={"Pomegranate Juice Pet Bottle..."}
                                amount={200}
                                chart={this.TEST}
                            />
                        </SwiperSlide>
                        <SwiperSlide className="item-swiper">
                            <CardProduct
                                image={ImageTest}
                                status={"Finish Product"}
                                description={"Pomegranate Juice Pet Bottle..."}
                                amount={200}
                                chart={this.TEST}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </>
        )
    }
}

export default Latest;