import React from 'react';
import './UserHeader.css'
import SearchIcon from '@material-ui/icons/Search';
import { Button, Link } from '@material-ui/core';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';


function UserHeader() {
    
    return (
            <div className="Userheader">
                <div className="UserheaderOptions">
                    <div className="HeaderLogo">
                        <img  src="./logo1.png" alt="logo"></img>
                    </div>
                    <div className="header_left">
                        <Button><NotificationsNoneRoundedIcon style={{fill:'rgb(31, 41, 73)'}}/></Button>
                        <div className="Search_box">
                            <button><SearchIcon style={{fill:'rgba(33, 40, 61, 0.981)' , borderRadius:'8px'}} /></button>
                            <input type="text" name="SearchBox" placeholder="Search" />
                        </div>
                        <Button>
                        <Link to="#" style={{ textDecoration: 'none', cursor: 'pointer', color:'rgba(33, 40, 61, 0.981)'  }}>Sign Out</Link>
                        </Button>
                    </div>
                </div>
               
            </div>
        
    )
}

export default UserHeader
