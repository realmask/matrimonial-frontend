import './loginpage.css';
import axios from "axios";
import React, {useState} from 'react';
const API_URL = "http://localhost:9000/userlogin";
// Freddy's changes
// added onclick callback function
// added use state

function LoginModalPage({closeHandler }) {

    // Collect user data
    const [state , setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
       
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    // send user data
    const handleSubmitClick = (e) => {
        e.preventDefault();

        // prepare email and password in a payload
        const payload = {
            "email":state.email,
            "password":state.password
        };

        // hit login API endpoint with axios
          axios.post(API_URL, payload)
               .then(function (response) {

                if(response.status === 200){
                  
                    console.log(response.data)
                    const {success,message,token,currUser} = response.data;
                    if(success === true){
                        // logged in
                    }
                    else{
                        // failed to log in
                    }
                } else{

                   console.log("error");
                }
            })
            .catch(function (error) {
                console.log(error);
            }); 
    }

    return (
        <div className="login_container">

            <div className="login_page_row">
                <div className="login_page_header">
                    <h3>Login</h3>
                    <span onClick={closeHandler }>x</span>
                </div>
                <div className="login_page_col">
                    <form methord="POST" action="">
                        <div className="login-form-elemnts">
                            <label>Email:</label>
                            <input type="email" 
                            placeholder="email" 
                            id = "email"
                            value={state.email}
                            onChange={handleChange} />
                        </div>

                        <div className="login-form-elemnts">
                            <label>Password:</label>
                            <input type="password" 
                            placeholder="password"
                            id = "password"
                            value={state.password}
                            onChange={handleChange} />
                        </div>

                        <div className="login-button-row">
                            <div className="check-box">
                                <input  type="checkbox" required="required"/>
                                <p>Remember me</p>
                            </div>
                            <button type="button" onClick ={handleSubmitClick} >login</button>
                        </div>
                        <a href="#">Forgot password ?</a>
                    </form>
                </div>

            </div>


        </div>
    )
}

export default LoginModalPage
