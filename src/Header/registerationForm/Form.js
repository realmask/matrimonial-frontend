import axios from "axios";
import React, { useState } from 'react';
import OtpScreen from "../otpmodal/OtpScreen";


const API_URL = "http://localhost:9000/signup";

export const Form = () => {

    // Collect user data
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        cpassword: "",
        date_of_birth: "",
        phone_number: "",
        statee: "",
        city: "",
        pin_code: "",
        college: ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target

        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    // send user data
    const handleSubmitClick = (e) => {
        e.preventDefault();

        // prepare user data in a payload

        let payload = {
            "first_name": state.first_name,
            "last_name": state.last_name,
            "email": state.email,
            "password": state.password,
            "date_of_birth": state.date_of_birth,
            "phone_number": state.phone_number,
            "address_city": state.city,
            "address_state": state.statee,
            "address_code": state.pin_code,
            "college": state.college
        };

        // hit sign up API endpoint with axios
        axios.post(API_URL, payload)
            .then(function (response) {

                if (response.status === 200) {

                    console.log(response.data)
                    const { success, message } = response.data;
                    if (success === true) {
                        // signed up
                    }
                    else {
                        // failed to sign up
                    }
                } else {

                    console.log("error");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    return (
        < >

            {/*   
            <form method="POST" >
             

                <div className="form-elements">
                    <label htmlFor="fname"> Name :</label>
                    <div className="column">
                        <input type="text"
                         className="form-input-field" 
                         name="first_name" 
                         id = "first_name"
                         value={state.first_name}
                         onChange={handleChange} 
                         placeholder="First Name"
                         required="required" />
                     </div>
              
                    <div className="column">
                        <input type="text" 
                        className="form-input-field" 
                        name="last_name" 
                        id = "last_name"
                        value={state.last_name}
                        onChange={handleChange} 
                        placeholder="Last Name" 
                        required="required" />
                    </div>

                </div>
                <div className="form-elements">
                   
                </div>
                <div className="form-elements">
                    <label htmlFor="email">Email :</label>
                    <div className="column">
                        <input type="email" 
                        className="form-input-field" 
                        name="email" 
                        id = "email"
                        value={state.email}
                        onChange={handleChange} 
                        placeholder="Email" 
                        required="required" />
                    </div>
                </div>
                <div class="form-elements">
                    <label htmlFor="password">Password:</label>
                    <div className="column">
                        <input type="password" 
                        className="form-input-field" 
                        name="password"
                        id = "password"
                        value={state.password}
                        onChange={handleChange}  
                        placeholder="Password" 
                        required="required" />
                    </div>
                </div>
                <div class="form-elements">
                    <label htmlFor="re-enter password">Re-enter Password:</label>
                    <div className="column">
                        <input type="password" 
                        className="form-input-field" 
                        name="confirm_password" 
                        id = "cpassword"
                        value={state.cpassword}
                        onChange={handleChange} 
                        placeholder="Confirm Password" 
                        required="required" />
                    </div>

                </div>
                <div className="form-elements">
                    <label htmlFor="fname">D.O.B.</label>
                    <div className="column">
                        <input type="date" 
                        className="form-input-field" 
                        name="date_of_birth" 
                        id = "date_of_birth"
                        value={state.date_of_birth}
                        onChange={handleChange} 
                        placeholder="date of  birth" 
                        required="required" />
                    </div>

                </div>
                <div className="form-elements">
                    <label htmlFor="fname">Phone No.</label>
                    <div className="column">
                        <input type="text" 
                        className="form-input-field" 
                        name="phoneNumber" 
                        id = "phone_number"
                        value={state.phone_number}
                        onChange={handleChange} 
                        placeholder="+91" 
                        required="required" />
                    </div>

                </div>
                <div className="form-elements">
                    <label htmlFor="fname">Address:</label>
                    <div className="column">
                        <input type="text" 
                        className="state" 
                        name="state" 
                        id = "statee"
                        value={state.statee}
                        onChange={handleChange} 
                        placeholder="state" 
                        required="required" />
                    </div>
                    <div className="column">
                        <input type="text" 
                        className="city" 
                        name="city"
                        id = "city"
                        value={state.city}
                        onChange={handleChange}  
                        placeholder="city" 
                        required="required" />
                    </div>
                    <div className="column">
                        <input type="text" 
                        className="pincode" 
                        name="pincode"
                        id = "pin_code"
                        value={state.pin_code}
                        onChange={handleChange}  
                        placeholder="pincode" 
                        required="required" />
                    </div>
                </div>
                <div className="form-elements">
                    <label htmlFor="fname">college</label>
                    <div className="column">
                        <input type="text" 
                        className="form-input-field" 
                        name="college" 
                        id = "college"
                        value={state.college}
                        onChange={handleChange} 
                        placeholder="First Name" required="required" />
                    </div>

                </div>
                <div className="termCondition">
                    <div className="termcondition">
                    <input type="checkbox" required="required" />
                    <p>I have agreed to the <a href="3"> Terms & Conditions</a>  & have read & understood the Privacy Policy.</p>
                    </div>
                   
                    <button type="submit" onClick = {handleSubmitClick}>Register</button>
                </div>
                
            </form> */}
           <div className="otp-elements">
           <OtpScreen/>

           </div>
          

        </>
    )
}