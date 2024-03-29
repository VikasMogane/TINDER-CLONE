import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
    <div className='header'>
        <IconButton>
                <PersonIcon fontSize="large" className="header-icon"  />
        </IconButton>

            <img src="https://www.linkpicture.com/q/tinder-logo.png" className="header_logo" alt="" />
    <IconButton>

    <ForumIcon fontSize="large" className="header-icon" />
    </IconButton> 
     </div>
    );
}

export default Header
