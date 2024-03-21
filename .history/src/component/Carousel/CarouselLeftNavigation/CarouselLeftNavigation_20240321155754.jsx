import React, {useEffect, useState} from "react";
import { useSwiper } from "swiper/react";
import {ReactComponent as LeftArrow}

export default function CarouselLeftNavigation(){
    const swiper = useSwiper();
    const [isBeginning, setIsBebinning]= useState(swiper.isBeginning
        )

        useEffect(()=>{
            swiper.on('slideChange', function(){
                setIsBebinning(swiper.isBeginning)
            },[])

        })

        return (
            <div>
                {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()/>}}
            </div>
        )
}