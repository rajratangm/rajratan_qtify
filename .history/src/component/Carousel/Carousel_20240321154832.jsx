import React from "react"
import styles from './Carousel.module.css'
// import Swiper, {Navigation, SwiperSlide} from "swiper"
import {Navigation} from 'swiper'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation'
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation'
import 'swiper/css'
import { useEffect } from "react"


const Controls= ({data})=>{
    const swiper = useSwiper()
    useEffect(()=>{
        swiper.slideTo(0)
    },[data])
    return <></>
}
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