import React, {useEffect, useState} from 'react'
import styles from './Section.module.css'
import { CircularProgress } from '@mui/material'
import Carousel from '../Carousel/Carousel'
import Card from '../Card/Card'
function Section({title, data, filterSource, type}){
    const [carouselToggle, setCarouselToggle]= useState(true)
    const [filters, setFilters]= useState([{key:'all', label:'all'}])
    const [selectedFitlerIndex, setSelectedFitlerIndex]= useState(0)
    const handleToggle=()=>{
        setCarouselToggle(!carouselToggle)
       
    }
    useEffect(()=>{
        if(filterSource){
            filterSource().then((response)=>{
                const {data}= response;
                setFilters(...filters, ...data)
            })
        }

    },[])

    const showFilters = filters.length>1;
    const cardsToRender = data.filter((card)=>{
        (showFilters && selectedFitlerIndex !==0 
        ? cardMediaClasses.genre.key === filters[selectedFitlerIndex].key 
        : card)
    })
    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>{
                    !carouselToggle ? 'Collapse All': 'Show All'
                    }</h4>
            </div>
            {
                showFilters && (
                    <div className={styles.filter}>
                    <Filters filters= {filters} selectedFilterIndex = {selectedFitlerIndex}
                    setSelectedFitlerIndex= {selectedFitlerIndex}/>
                    </div>
                )
            }
            {!data?.length?(
                <CircularProgress/>
            ):(
                <div className={styles.cardWrapper}>
                    {!carouselToggle ?
                    <div className={styles.wrapper}>
                        {data?.map((ele)=>
                            (<Card data ={ele} type={type}/>)
                        )}
                    </div>
                    : <Carousel data ={data}
                    renderComponent={(data)=>(<Card data={data} type= {type}/>)}/>}
                    </div>
            )
            }
        </div>
  
    )
}

export default Section