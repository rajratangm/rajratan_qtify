import React from 'react'
import { Tooltip } from '@mui/material';

function Card({data, type}){
    const {image, follows, title, slug, songs}= data;
    return(
        <Tooltip title={``} placement='top' arrow>
            <a>
                <div>
                    <div>
                        <img></img>
                        <div>
                            <Chip 
                            label=`${}`
                            />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </a>
        </Tooltip>
    )
}

export default Card;