import React from 'react'
import { Avatar ,Link } from '@material-ui/core';
import './shortProfileview.css'

function shortProfileView() {
    return (
        <div>
            <div className="userShortProfile">
                <div className="Profile_Picture">
                <Avatar src="./profile/yash.jpg"style={{width:"100px" ,height:"100px"}} />
                </div>
                <div className="profile_actions">
                    <button >Edit Profile Picture</button>
                    <Link className="full_Profile_view" to="#">View Profile</Link>
                </div>
                <div className="User_information">
                    
                    <p className="User_name" style={{marginleft:"auto",
    marginright:"auto" }}>Yash Purohit</p>
                    <p>#76336336</p>
                    <p><label>D.O.B : </label> 21/04/1998</p>
                    <p><label>Gender : </label> Male</p>
                    <p><label>Occupation : </label> IT Professional</p>
                </div> 
            </div>
        </div>
    )
}

export default shortProfileView
