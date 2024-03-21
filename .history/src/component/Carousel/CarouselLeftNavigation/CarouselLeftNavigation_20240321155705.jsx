import React, {useEffect, useState} from "react";
import { useSwiper } from "swiper/react";

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
                {!isBeginning && <LeftArrow onClick={}}
            </div>
        )
}