
import React from 'react';
import  "./SwipeButtons.css";
import ReplayIcon  from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";


function SwipeButtons() {
    return (
        <div className="swipeButtons">
            
            <div className="swipeButton__repeat">
                <ReplayIcon fontSize = "large" />
            </div>
            <div className="swipeButton__left">
                <CloseIcon fontSize = "large" />
            </div>
            <div className="swipeButton__star">
                <StarRateIcon fontSize = "large" />
            </div>
            <div className="swipeButton__right">
                <FavoriteIcon fontSize = "large" />
            </div>
            <div className="swipeButton__lightning">
                <FlashOnIcon fontSize = "large" />
            </div>

        </div>
    )
}

export default SwipeButtons
