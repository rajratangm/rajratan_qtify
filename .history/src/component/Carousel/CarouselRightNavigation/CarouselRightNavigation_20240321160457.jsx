import React, {useEffect, useState} from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as RightArrow} from '../../../assets/rightArrow.svg'
import styles from './CarouselLeftNavigation.module.css'
export default function CarouselLeftNavigation(){
    const swiper = useSwiper();
    const [isEnding, setIsEnding]= useState(swiper.isBeginning
        )

        useEffect(()=>{
            swiper.on('slideChange', function(){
                setIsBebinning(swiper.isBeginning)
            },[swiper])

        })

        return (
            <div className={styles.rightNavigation}>
                {!isBeginning && <RightArrow onClick={()=> swiper.slidePrev()}/>}
            </div>
        )
}