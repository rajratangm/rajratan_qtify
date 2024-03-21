import React, {useEffect, useState} from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as LeftArrow} from '../../../assets/LeftArrow.svg'
import styles from './CarouselLeftNavigation.module.css'
export default function CarouselLeftNavigation(){
    const swiper = useSwiper();
    const [isBeginning, setIsBebinning]= useState(swiper.isBeginning
        )

        useEffect(()=>{
            swiper.on('slideChange', function(){
                setIsBebinning(swiper.isBeginning)
            },[swiper])

        })

        return (
            <div className={styles.CarouselLeftNavigation}>
                {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()/>}}
            </div>
        )
}