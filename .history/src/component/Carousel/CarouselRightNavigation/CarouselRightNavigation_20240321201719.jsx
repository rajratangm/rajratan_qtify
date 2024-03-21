import React, {useEffect, useState} from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as RightArrow} from '../../../assets/rightArrow.svg'
import styles from './CarouselRightNavigation.module.css'
export default function CarouselRighttNavigation(){
    const swiper = useSwiper();
    const [isEnding, setIsEnding]= useState(swiper.isEnd
        )

        useEffect(()=>{
            swiper.on('slideChange', function(){
                setIsEnding(swiper.isEnding)
            },[swiper])

        })

        return (
            <div className={styles.rightNavigation}>
                {!isEnding && <RightArrow onClick={()=> swiper.slidePrev()}/>}
            </div>
        )
}