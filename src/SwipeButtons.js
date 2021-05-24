import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
import "./SwipeButtons.css"

const SwipeButtons = () => {
    return (
        <div className="SwipeButtons">
            <IconButton>
               <ReplayIcon className="SwipeButtons__Replay" fontSize="large" />
            </IconButton>
            <IconButton>
               <StarRateIcon className="SwipeButtons__Star" fontSize="large" />
            </IconButton>
            <IconButton>
               <FavoriteIcon className="SwipeButtons__Favorite" fontSize="large" />
            </IconButton>            
        </div>
    )
}

export default SwipeButtons
