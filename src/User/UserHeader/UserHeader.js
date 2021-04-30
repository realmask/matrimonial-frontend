import React, { useState } from 'react';
import './UserHeader.css'
import SearchIcon from '@material-ui/icons/Search';
import { Button, Avatar } from '@material-ui/core';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import DropDown from './DropDown';

function UserHeader() {
   /*  const [DropdownMenu, SetDropDown] = useState(false); */
    return (
        <div className="Userheader">
            <div className="UserheaderOptions">
                <div className="HeaderLogo">
                    <img src="./logo.png" alt="logo"></img>
                </div>
                <div className="header_left">
                    <Button><NotificationsNoneRoundedIcon style={{ fill: 'white' }} /></Button>
                    <div className="Search_box">
                        <button><SearchIcon style={{ fill: 'rgba(33, 40, 61, 0.981)', borderRadius: '8px' }} /></button>
                        <input type="text" name="SearchBox" placeholder="Search" />
                    </div>
                    <Avatar src="./profile/yash.jpg" style={{ border: "1px solid white" }} />

                    <div className="dropDown" /* style={{ display: "flex", flexDirection:"column",justifyContent:"end" }} */>
                       
                       {/*  <ArrowDropDownRoundedIcon onClick={() => SetDropDown(true)} /> */}
                       <DropDown />
                    </div>

                </div>
            </div>
           {/*  {DropdownMenu ?
                        <div className="dropDown_elements"onClick={() => SetDropDown(false)}>
                            <DropDown />
                        </div>
                        : ""
                    }  */}
        </div>


    )
}

export default UserHeader
