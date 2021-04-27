import { useEffect, useRef, useState } from 'react';
import './otpScreen.css';

function OtpScreen() {

  let [otp, setOtp] = useState(["","","",""]);

  // cannot use map on otp array ^ to create refs, it should be put directly in code like below, otherwise
  // it'll give warning

  let ref1 = useRef(null)
  let ref2 = useRef(null)
  let ref3 = useRef(null)
  let ref4 = useRef(null)

  let refs = [ref1, ref2, ref3, ref4]



  const handleChange = (e, idx) => {

    const value = e.target.value;

    if(isNaN(value)) return;

    const newState = [...otp];
    newState[idx] = value[value.length - 1]; // to get only last character always, shouldnt go more than 1 char
    setOtp(newState);
    if(idx < otp.length - 1) refs[idx + 1].current.focus();
    else {
      refs[idx].current.blur();
    }
  }

  const handleResendOTP = () => {
    ///
  }
  

  const handleSubmitOTP = () => {
    alert(otp);
  }
  


  return (
   
   
          <div className="otp-box">
          {
            otp.map((number, idx) => 
              <input 
                key={idx}
                ref={refs[idx]}
                value={number}
                onChange={(e) => handleChange(e, idx)}
              />
            )
          }
         <div className="otp-actions">
         <button onClick={handleResendOTP}>Resend OTP</button>
          <button onClick={handleSubmitOTP}>check OTP</button>
         </div>
          
          </div>

    
  );
}

export default OtpScreen;