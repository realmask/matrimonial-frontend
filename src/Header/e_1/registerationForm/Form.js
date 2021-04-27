import { Link } from '@material-ui/core'
import { useState } from 'react';

export const Form = () => {
    const [Register, setRegister] = useState({

        userFname: "",
        userLname: ""
        ,
        Email: "",
        password: "",
        dateOfBirth: "",
        PhoneNumber: "",

        city: "",
        state: "",
        pincode: "",

        college: ""

    })

    const InputHandler = (e) => {
        const name = e.target.name;
        console.log(name);
        const value = e.target.value;
        console.log(value);
        setRegister({ ...Register, [name]: value })
    }
    return (
        <div /* className="formBody" */>
            {/*    <div className="formHeader">
                    <h2>Register</h2>
                  
                </div>
                <div className="formLoginSection"><p> Already a member ? <a href="#">login</a> </p></div> */}
            <form method="POST" >


                <div className="form-elements">
                    <label htmlFor="fname"> Name :</label>
                    <div className="column"><input value={Register.userFname} onChange={InputHandler} type="text" className="form-input " name="userFname" placeholder="First Name" required="required" /></div>
                    <div className="column"><input value={Register.userlname} onChange={InputHandler} type="text" className="form-input " name="userLname" placeholder="Last Name" required="required" /></div>

                </div>
                <div className="form-elements">

                </div>
                <div className="form-elements">
                    <label htmlFor="email">Email :</label>
                    <div className="column"><input value={Register.email} onChange={InputHandler} type="email" className="form-input " name="email" placeholder="Email" required="required" /></div>
                </div>
                <div class="form-elements">
                    <label htmlFor="password">Password:</label>
                    <div className="column"><input value={Register.password} onChange={InputHandler} type="password" className="form-input " name="password" placeholder="Password" required="required" /></div>
                </div>
                <div class="form-elements">
                    <label htmlFor="re-enter password">Re-enter Password:</label>
                    <div className="column"><input /*  value={Register.}   onChange={InputHandler} */ type="password" className="form-input " name="confirm_password" placeholder="Confirm Password" required="required" /></div>

                </div>
                <div className="form-elements">
                    <label htmlFor="dateOfBirth">D.O.B.</label>
                    <div className="column"><input value={Register.dateOfBirth} onChange={InputHandler} type="date" className="form-input " name="dateOfBirth" placeholder="date of  birth" required="required" /></div>

                </div>
                <div className="form-elements">
                    <label htmlFor="Phone">Phone No.</label>
                    <div className="column"><input value={Register.PhoneNumber} onChange={InputHandler} type="text" className="form-input " name="PhoneNumber" placeholder="+91" required="required" /></div>

                </div>
                <div className="form-elements">
                    <label htmlFor="Address">Address:</label>
                    <div className="column"><input value={Register.state} onChange={InputHandler} type="text" className="state" name="state" placeholder="state" required="required" /></div>
                    <div className="column"><input value={Register.city} onChange={InputHandler} type="text" className="city" name="city" placeholder="city" required="required" /></div>
                    <div className="column"><input value={Register.pincode} onChange={InputHandler} type="text" className="pincode" name="pincode" placeholder="pincode" required="required" /></div>
                </div>
                <div className="form-elements">
                    <label htmlFor="college">college</label>
                    <div className="column"><input value={Register.college} onChange={InputHandler} type="text" className="form-input " name="college" placeholder="First Name" required="required" /></div>

                </div>
                <div className="termCondition">
                    <div className="termcondition">
                        <input  /* value={Register.}   onChange={InputHandler} */ type="checkbox" required="required" />
                        <p>I have agreed to the <a href="3"> Terms & Conditions</a>  & have read & understood the Privacy Policy.</p>
                    </div>
                    <Link to="/OtpAuthentication">
                        <button type="submit">Register</button>
                    </Link>
                </div>

            </form>
        </div>
    )
}