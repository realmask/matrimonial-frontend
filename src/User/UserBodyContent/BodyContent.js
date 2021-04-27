import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar, Link ,Badge } from '@material-ui/core'
import './UserBodyContent.css'

const members_info = [{
    memberId: "#545231",
    image_path: "./profile/1.jpeg",
    member_Fname: "Aarvind ",
    member_lname: "Shaw ",
    Age: "24",
    Occupation: "Job",
    Gender: "Male",
    Marital_Status: "Single",
    height: "170 cms",
}, {
    memberId: "#155323",
    image_path: "./profile/3.jpg",
    member_Fname: "Rahul ",
    member_lname: "Sharma ",
    Age: "25",
    Occupation: "Job",
    Gender: "Male",
    Marital_Status: "Single",
    height: "174 cms"
},
{
    memberId: "#1545",
    image_path: "./profile/2.jpg",
    member_Fname: "Lil ",
    member_lname: "Pump",
    Age: "23",
    Occupation: "Business Man",
    Gender: "Male",
    Marital_Status: "Single",
    height: "173 cms"
}]
function BodyContent() {
    return (
        <div className="content_body">
            {members_info.map(data => {
                return (
                   
                   <div className="Member_Profile">
                    <div className="Member">
                        <div className="Member_Image">
                            <div className="Premium_Member">
                                <p>Premium Member</p>
                            
                            </div>
                        <Badge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        badgeContent={<FavoriteBorderIcon style={{ color: "red" , backgroundColor:"whitesmoke" }}/> }
                      >
                        <Avatar src={data.image_path} style={{ width: "150px", height: "150px",}} />
                           {/*  <img src={data.image_path} width="130px" height="130px"alt="" /> */}
                        </Badge>
                        </div>
            
                        <div className="member_info">
                            <p className="member_name" style={{fontSize:"large",fontWeight:"bold"}}>{data.member_Fname} {data.member_lname}</p>
                           
                            <p className="">member Id : {data.memberId}</p>
                            <table>
                                <tr>
                                    <th>Age   </th>
                                    <th>{data.Age}</th>
                                </tr>
                                <tr>
                                    <th>Gender   </th>
                                    <th>{data.Gender}</th>
                                </tr>
                                <tr>
                                    <th>Height  </th>
                                    <th>{data.height}</th>
                                </tr>
                                <tr>
                                    <th>Maritial Status  </th>
                                    <th>{data.Marital_Status}</th>
                                </tr>
                                <tr>
                                    <th>Occupation  </th>
                                    <th>{data.Occupation}</th>
                                </tr>

                            </table>
            

                        </div>
                    
                    </div>
                    <div className="member_full_profile">
                           <Link className="full_Profile_view" to=""> View member Profile</Link>

                    </div>
                    
                 </div>
                )
            })}
        </div>
    )
}

export default BodyContent
