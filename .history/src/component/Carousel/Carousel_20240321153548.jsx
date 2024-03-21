import React from "react"
import styles from './Carousel.module.css'
import Swiper, {Navigation} from "swiper"
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


            </Swiper>
        </div>
    )
}