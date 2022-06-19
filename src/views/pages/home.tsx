import { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BackgroundLatest, IconAddCircle, IconAddCircleWhite, IconAlibaba, IconArrow, IconArrowBlack, IconArvan, IconNext, IconPrev, IconYoutube, ImageControll, ImageLaboratory, ImageNasa, ImagePersonBox, ImageTest, ImageTest2, ImageTest3, ImageTest4 } from "../../assets";
import { CHART } from "../components/chart";
import { Button, CardSearchProduct, CardProduct, CardCategory, CardImage, CardCollectionProduct, CardProductWithPrice, CardBestSeller, CardCollectionBest, Divider, CardNewExcess, CardBestBrand, CardNewProduct, CardCalculate, ButtonIcon, CardGroupChat, ButtonIconDashboard, Offcanvas } from "../components/components";
import HomeController from "../controllers/home_controller";
import { Pagination, Autoplay, Navigation, Grid } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TEST: CHART[] = [
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

class Home extends HomeController {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="home">
                <ButtonIcon icon={IconAddCircleWhite} nameButton={"ADD NEW"} />
                <ButtonIconDashboard icon={IconArrowBlack} notification={2} />
                <ButtonIconDashboard icon={IconArrowBlack} dropdown={"/profile"} />
                <div style={{ width: "509px" }}>
                    <CardGroupChat
                        title={"Group Title"}
                        amountMessage={7}
                        message={" message Here"}
                        images={[ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa, ImageNasa]}
                        date={"25 MINS"}
                    />
                </div>
                <Offcanvas />
                <ButtonIconDashboard icon="" dataBsToggle="offcanvas" dataBsTarget="#offcanvasRight" aria-controls="offcanvasRight"/>

                <div className="home-header px-5">
                    <div className="home-header-description">
                        <div className="home-header-description-items">
                            <h2 className="home-header-description-items-title">
                                Produce any product with your brand identity!
                            </h2>
                            <h6 className="home-header-description-items-text1">
                                Or join our supply chain and search between them
                            </h6>
                            <p className="home-header-description-items-text2">
                                You can use our free product lines to make goods with your brand identity and label! Also, you can order products to any supplier or make your products available on Touba.
                            </p>
                        </div>
                        <div className="home-header-description-image">
                            <img src={ImagePersonBox} />
                        </div>
                    </div>
                    <div className="home-header-inputs">
                        <CardSearchProduct
                            onSelectText={this.handleGetSelectText}
                            onSelect={this.handleGetSelect}
                            onValueText={this.handleGetValueText}
                            onSearch={this.handleGetResultSearch}
                        />
                    </div>
                </div>
                <div className="home-section-earn px-5">
                    <div className="home-section-earn-content">
                        <h4 className="home-section-earn-content-header">
                            Let`s earn from
                        </h4>
                        <h2 className="home-section-earn-content-title">
                            Excess Capacity
                        </h2>
                        <div className="home-section-earn-content-description">
                            <p className="home-section-earn-content-description-text">
                                Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore
                                magna aliquam erat volutpat.
                                Ut wisi enim ad minim veniam,
                                quis nostrud exerci tation
                                ullamcorper suscipit lobortis
                                nisl ut aliquip ex ea commodo
                                consequat. Duis autem vel eum
                                iriure dolor in hendrerit in
                                vulputate
                            </p>
                        </div>
                        <Button title="LEARN MORE" />
                    </div>
                    <div className="home-section-earn-image">
                        <img src={ImageLaboratory} className="image-laboratory" />
                    </div>
                </div>
                <div className="home-section-latest px-5" style={{ backgroundImage: "url(" + BackgroundLatest + ")" }}>
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
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                        </Swiper>
                        {/* <Swiper
                            navigation={true}
                            freeMode={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 80,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 80,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                                1440: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                }
                            }}
                            modules={[Navigation, Grid]}
                            className="mySwiper"
                        >
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                            <SwiperSlide className="item-swiper">
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                                <CardProduct
                                    image={ImageTest}
                                    status={"Finish Product"}
                                    description={"Pomegranate Juice Pet Bottle..."}
                                    amount={200}
                                    chart={TEST}
                                />
                            </SwiperSlide>
                        </Swiper> */}
                    </div>
                </div>
                <div className="home-section-categories px-5">
                    <h4 className="home-section-categories-title">
                        Categories
                    </h4>
                    <div className="home-section-categories-group-cards">
                        <CardCategory
                            image={ImageTest2}
                            title={"Sport Tools"}
                        />
                        <CardCategory
                            image={ImageTest2}
                            title={"Sport Tools"}
                        />
                        <CardCategory
                            image={ImageTest2}
                            title={"Sport Tools"}
                        />
                        <CardCategory
                            image={ImageTest2}
                            title={"Sport Tools"}
                        />
                        <CardCategory
                            image={ImageTest2}
                            title={"Sport Tools"}
                        />
                        <CardCategory
                            image={ImageTest2}
                            title={"Sport Tools"}
                        />
                        <CardCategory
                            image={ImageTest2}
                            title={"Sport Tools"}
                        />
                        <CardCategory
                            image={ImageTest2}
                            title={"Sport Tools"}
                        />
                        <CardCategory
                            image={ImageTest2}
                            title={"Sport Tools"}
                        />
                        <CardCategory
                            image={ImageTest2}
                            title={"Sport Tools"}
                        />
                    </div>
                </div>
                <div className="home-section-special px-5">
                    <CardImage image={ImageTest3} />
                    <CardImage image={ImageTest3} />
                </div>
                <div className="home-section-special-two px-5">
                    <CardCollectionProduct title={"Analust’s Choice"} location={""} >
                        <CardProductWithPrice
                            image={ImageControll}
                            title={"Product Name"}
                            fromPrice={12}
                            toPrice={24}
                        />
                        <CardProductWithPrice
                            image={ImageControll}
                            title={"Product Name"}
                            fromPrice={12}
                            toPrice={24}
                        />
                        <CardProductWithPrice
                            image={ImageControll}
                            title={"Product Name"}
                            fromPrice={12}
                            toPrice={24}
                        />
                        <CardProductWithPrice
                            image={ImageControll}
                            title={"Product Name"}
                            fromPrice={12}
                            toPrice={24}
                        />
                    </CardCollectionProduct>
                    <CardCollectionProduct title={"Low MOQ"} location={""} >
                        <CardProductWithPrice
                            image={ImageControll}
                            title={"Product Name"}
                            fromPrice={12}
                            toPrice={24}
                        />
                        <CardProductWithPrice
                            image={ImageControll}
                            title={"Product Name"}
                            fromPrice={12}
                            toPrice={24}
                        />
                        <CardProductWithPrice
                            image={ImageControll}
                            title={"Product Name"}
                            fromPrice={12}
                            toPrice={24}
                        />
                        <CardProductWithPrice
                            image={ImageControll}
                            title={"Product Name"}
                            fromPrice={12}
                            toPrice={24}
                        />
                    </CardCollectionProduct>
                </div>
                <div className="home-section-best-seller px-5">
                    <CardCollectionBest>
                        <CardBestSeller image={ImageControll} discountPercent={45} />
                        <CardBestSeller image={ImageControll} discountPercent={45} />
                        <CardBestSeller image={ImageControll} discountPercent={45} />
                        <CardBestSeller image={ImageControll} discountPercent={45} />
                        <CardBestSeller image={ImageControll} discountPercent={45} />
                        <CardBestSeller image={ImageControll} discountPercent={45} />
                        <CardBestSeller image={ImageControll} discountPercent={45} />
                        <CardBestSeller image={ImageControll} discountPercent={45} />
                    </CardCollectionBest>
                </div>
                <div className="home-section-new px-5">
                    <div className="home-section-new-header">
                        <h4 className="home-section-new-header-text">
                            New Excess Capacities
                        </h4>
                        <Link to="/" className="home-section-new-header-link">
                            SEE ALL
                        </Link>
                    </div>
                    <Divider />
                    <div className="home-section-new-content">
                        <CardNewExcess
                            image={ImageControll}
                            items={TEST}
                            title={"Name of Excess Capacity"}
                        />
                        <CardNewExcess
                            image={ImageControll}
                            items={TEST}
                            title={"Name of Excess Capacity"}
                        />
                        <CardNewExcess
                            image={ImageControll}
                            items={TEST}
                            title={"Name of Excess Capacity"}
                        />
                        <CardNewExcess
                            image={ImageControll}
                            items={TEST}
                            title={"Name of Excess Capacity"}
                        />
                        <CardNewExcess
                            image={ImageControll}
                            items={TEST}
                            title={"Name of Excess Capacity"}
                        />
                        <CardNewExcess
                            image={ImageControll}
                            items={TEST}
                            title={"Name of Excess Capacity"}
                        />
                        <CardNewExcess
                            image={ImageControll}
                            items={TEST}
                            title={"Name of Excess Capacity"}
                        />
                        <CardNewExcess
                            image={ImageControll}
                            items={TEST}
                            title={"Name of Excess Capacity"}
                        />
                        <CardNewExcess
                            image={ImageControll}
                            items={TEST}
                            title={"Name of Excess Capacity"}
                        />
                        <CardNewExcess
                            image={ImageControll}
                            items={TEST}
                            title={"Name of Excess Capacity"}
                        />
                        <CardNewExcess
                            image={ImageControll}
                            items={TEST}
                            title={"Name of Excess Capacity"}
                        />
                        <CardNewExcess
                            image={ImageControll}
                            items={TEST}
                            title={"Name of Excess Capacity"}
                        />
                    </div>
                </div>
                <div className="home-section-images px-5">
                    <CardImage image={ImageTest4} />
                    <CardImage image={ImageTest4} />
                    <CardImage image={ImageTest4} />
                    <CardImage image={ImageTest4} />
                </div>
                <div className="home-section-newest-product px-5">
                    <h4 className="home-section-newest-product-title">New Product</h4>
                    <div className="home-section-newest-product-content">
                        <CardNewProduct image={ImageControll} title={"Product Name"} />
                        <CardNewProduct image={ImageControll} title={"Product Name"} />
                        <CardNewProduct image={ImageControll} title={"Product Name"} />
                        <CardNewProduct image={ImageControll} title={"Product Name"} />
                        <CardNewProduct image={ImageControll} title={"Product Name"} />
                        <CardNewProduct image={ImageControll} title={"Product Name"} />
                        <CardNewProduct image={ImageControll} title={"Product Name"} />
                        <CardNewProduct image={ImageControll} title={"Product Name"} />
                        <CardNewProduct image={ImageControll} title={"Product Name"} />
                        <CardNewProduct image={ImageControll} title={"Product Name"} />
                        <CardNewProduct image={ImageControll} title={"Product Name"} />
                        <CardNewProduct image={ImageControll} title={"Product Name"} />
                    </div>
                </div>
                <div className="home-section-best-brand px-5">
                    <h4 className="home-section-best-brand-title"> Best Brands</h4>
                    <CardBestBrand
                        images={[
                            IconAlibaba,
                            IconArvan,
                            IconAlibaba,
                            IconArvan,
                            IconAlibaba,
                            IconArvan,
                            IconAlibaba,
                            IconArvan,
                            IconAlibaba,
                            IconArvan,
                        ]}
                    />
                </div>
                <div className="home-section-description px-5">
                    <h4 className="home-section-description-title">
                        What is excess capacity?
                    </h4>
                    <p className="home-section-description-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                    </p>
                    {this.state.more === false ? (
                        <button className="home-section-description-button" onClick={this.handleBlurText}>
                            <p className="home-section-description-button-text">
                                READ MORE
                            </p>
                        </button>
                    ) : (null)}
                    {this.state.more === false ? (
                        <div className="blur">
                            <h4 className="blur-title">
                                What is excess capacity?
                            </h4>
                            <p className="blur-text">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                            </p>

                        </div>
                    ) : (
                        <div className="onblur">
                            <h4 className="onblur-title">
                                What is excess capacity?
                            </h4>
                            <p className="onblur-text">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                            </p>
                        </div>
                    )}
                </div>
            </div >
        )
    }
}

export default Home;