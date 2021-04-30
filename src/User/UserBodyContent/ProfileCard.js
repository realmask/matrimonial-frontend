import React from 'react'
import './profileCard.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { shadows } from '@material-ui/system';


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
function ProfileCard() {
    return (

        <div>

            {
                members_info.map(data => {
                  return(
                    <div key={data.memberId}>

                        <div shadows={3} className="Profile_card">
                            <div className="premimum_tag">
                                <span>prime</span>
                            </div>
                            <div className="profiles">

                                <div className="profile_Img" >
                                    <img src={data.image_path} alt="" />
                                </div>

                                <div className="profile_info">
                                    <p className="profile_name">{data.member_Fname} {data.member_lname}</p>
                                    <p><strong>Member ID </strong> {data.memberId} </p>
                                    <p className="profile_bio">Happiness depends upon ourselves – Aristotle </p>

                                    <div className="favorite">
                                        <FavoriteIcon style={{ fontSize: "small", fill: "grey" }} />
                                        <p>48,763</p>
                                    </div>
                                    <p></p>
                                    <div className="profile_personal_details">

                                        <div className="detail_element location">
                                            <p><strong> location</strong></p>
                                            <p>kolkata , WestBengal</p>
                                        </div>
                                        <div className="detail_element location">
                                            <p><strong> Gender </strong></p>
                                            <p>{data.Gender}</p>
                                        </div>

                                        <div className="detail_element location">
                                            <p><strong> Age </strong></p>
                                            <p>{data.Age}</p>
                                        </div>

                                       .
                                    </div>

                                </div>

                                <div className="Add_react">
                                    <FavoriteIcon />
                                </div>

                            </div>

                        </div>
                    </div>
                    )

                })


            }
        </div>

    )
}

export default ProfileCard
