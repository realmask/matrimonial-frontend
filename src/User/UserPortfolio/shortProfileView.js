import React from 'react'
import { Avatar,  Badge } from '@material-ui/core';
import {NavLink} from 'react-router-dom'
import './shortProfileview.css'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
function shortProfileView() {
    return (
        <div>
            <div className="userShortProfile">
                <div className="Profile_Picture">
                    <Badge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        badgeContent={<Avatar style={{ height: "20px", width: "20px", background: "white", border: "1px solid pink" }} ><EditOutlinedIcon style={{ fontSize: "medium", color: "red" }} /> </Avatar>}
                    >
                        <Avatar src="./profile/yash.jpg" style={{ width: "70px", height: "70px", border: "1px solid pink" }} />


                    </Badge>
                    <div className="profile_actions">
                        <p className="User_name" >Yash Purohit</p>
                        
                        <NavLink className="full_Profile_view" to="#">View Profile</NavLink>
                    </div>

                </div>
                
                <div className="membershipPlan">
                            <p> Be a Premium Member ? </p>
                               <button><NavLink to='/plans' >get the plans </NavLink> </button>

                            </div>

        
                <div className="User_information">
                    <div className="some_info">
                        <AccountCircleRoundedIcon style={{ fontSize: "medium", color: "brown " , margin:"0 8px 0 0px" }} /><p> <strong>My ID  </strong>  3258496 </p>
                    </div>

                    <div className="some_info">
                        <LocationOnIcon style={{ fontSize: "medium", color: "brown" , margin:"0 8px 0 0px" }} /><p> <strong>Lived at </strong>  kolkata ,India </p>
                    </div>

                    <div className="some_info">
                        <WorkIcon style={{ fontSize: "medium", color: "brown " , margin:"0 8px 0 0px" }} /><p> <strong>worked at </strong>  GoldMinesachs </p>
                    </div>

                    <div className="some_info">
                        <SchoolIcon style={{ fontSize: "medium", color: "brown " , margin:"0 8px 0 0px" }} /><p> <strong>studied from </strong>  Shree Jain Vidyalaya </p>
                    </div>

                </div>
                <div className="User_information bio">
                <EditOutlinedIcon style={{ fontSize: "medium", color: "brown" }} /> <strong>Bio</strong>
                <p>none</p>
                </div>
            </div>
        </div>
    )
}

export default shortProfileView
