import { Button } from '@material-ui/core'
import { useState } from 'react'
import './header.css'
import './registerationForm/form.css'
import { Form } from './registerationForm/Form';
import LoginModalPage from './loginMondal/LoginModalPage'



function Header() {
    const [loginpage , setLoginpage] = useState(false);
    const closeHandler = () =>{ setLoginpage(false )}

    return (
        
        <div className ="try"  style={{backgroundImage:"url(/banner7.jpg)  "}}>
            {loginpage ? <LoginModalPage closeHandler = {closeHandler}setLoginpage = {setLoginpage} /> : ""} 
            <div className="navbar">
                <div className="logo">
                    <img src="./logo.png" width="150px" height="50px" style={{padding:"10px"}} alt="logo" />
                </div>

                <div className="navbarOptions">
                    <a href="#"> Home</a>
                    <a href="#"> Support</a>

                    <Button color="secondary" onClick={() =>{setLoginpage(true)}} style={{ fontWeight: 'bold' }}>Login</Button>

                </div>
            </div>
            <div className="formBody">
            <div className="formHeader">
                    <h1>Register</h1>
                  
                </div>
                <div className="formLoginSection"><p> Already a member ? <a href="#">login</a> </p></div>
                <Form/>
            </div>
            <section className="main" >
                  
                  <div className="bannerDesign">
              
                      <p>never marry the one you can live with , marry the one you cannot live without</p>
                  </div>
            </section>
        </div>
    )
}

export default Header
