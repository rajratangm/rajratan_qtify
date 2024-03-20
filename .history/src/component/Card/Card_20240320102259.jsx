import React from 'react'
import { Tooltip } from '@mui/material';

function Card({data, type}){
    const getCard =(type)=>{
        switch(type){
            case 'album': {
                const {image, follows, title, slug, songs}= data;

            }
        }
    }
    return(
        <Tooltip title={`${songs.length} songs`} placement='top' arrow>
            <a href={`/album/${slug}`}>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src= {image} alt='album' loading='lazy'>
                        <div className={styles.banner}>
                            <Chip 
                            label={`${follows} Follows`}
                            size = 'small'
                            className={styles.chip}

                            />
                        </div>
                    </div>
                    <div className={styles.titleWrapper}>
                        <p>{title}</p>

                    </div>
                </div>
            </a>
        </Tooltip>
    )
}

export default Card;