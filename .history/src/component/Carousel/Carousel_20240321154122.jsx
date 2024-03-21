import React from "react"
import styles from './Carousel.module.css'
import Swiper, {Navigation, SwiperSlide} from "swiper"
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation'
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation'
import 'swiper/css'
export default function Carousel({data, renderComponent}){
    return (
        <div>
            <Swiper
            style={{padding:'0px 20px'}}
            initialSlid={0}
            modules={[Navigation]}
            slidesPerView={'auto'}
            spaceBetween={40}
            allowTouchMove
            
            >
                <CarouselLeftNavigation/>
                <CarouselRightNavigation/>
                {data.map((ele)=>{
                    <SwiperSlide>
                        renderComponent(ele)
                    </SwiperSlide>
                })}


            </Swiper>
        </div>
    )
}