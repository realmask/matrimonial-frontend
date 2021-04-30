import React from 'react'
import './banner.css';

function PremiumBanner() {
    return (
        <div className="Premiumbanner">

            <div className="Plans_info">
                <h3>Get the Right plans for you</h3>

                <div>
                    <p>save more </p>
                    <p><strong>with more Good Plans</strong></p>
                    <p>Be a Premium Member and get extra benefits over different plans .</p>
                    <p>Any Upgraded plan is free for  7 Days</p>
                </div>
                <div className="arrow">
                    <li></li>
                </div>

            </div>
            <div className="plans">
                <div className="About_plans free">
                    <div className="plans_header">
                        <h3>Free Pass</h3>
                        <p className="plan_validity">7 Days free trail</p>
                    </div>

                    <div className="plans_informations">
                        <ul>
                            <li>Free access to profiles for 7 days</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</li>
                            <li> Mauris mattis, nulla eu varius fringilla, elit magna facilisis nibh</li>
                            <li>Mauris facilisis tellus orci, in porttitor risus bibendum nec.</li>
                            <li> Quisque ornare gravida tempor.</li>

                        </ul>

                    </div>
                    <div className="buy_plans"> 
                         <button>Free</button>

                    </div>
                  

                </div>

                <div className="About_plans month">
                    <div className="plans_header">
                        <h3>Monthly Pass</h3>
                        <p className="plan_validity">30 Days free trail</p>
                    </div>

                    <div className="plans_informations  ">
                        <ul>
                            <li>Free access to profiles for 7 days</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</li>
                            <li> Mauris mattis, nulla eu varius fringilla, elit magna facilisis nibh</li>
                            <li>Mauris facilisis tellus orci, in porttitor risus bibendum nec.</li>
                            <li> Quisque ornare gravida tempor.</li>

                        </ul>
                      
                    </div>
                    <div className="buy_plans"> 
                         <button>Get Started</button>

                    </div>
                
                </div>
                <div className="About_plans six_month">
                    <div className="plans_header">
                        <h3>6 month Pass</h3>
                        <p className="plan_validity">182 Days free trail</p>
                    </div>

                    <div className="plans_informations">
                        <ul>
                            <li>Free access to profiles for 7 days</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</li>
                            <li> Mauris mattis, nulla eu varius fringilla, elit magna facilisis nibh</li>
                            <li>Mauris facilisis tellus orci, in porttitor risus bibendum nec.</li>
                            <li> Quisque ornare gravida tempor.</li>

                        </ul>

                    </div>
                    <div className="buy_plans"> 
                         <button>Get Started</button>

                    </div>

                </div>
                <div className="About_plans yearly">
                    <div className="plans_header">
                        <h3>Yearly Pass</h3>
                        <p className="plan_validity">365 Days free trail</p>
                    </div>

                    <div className="plans_informations ">
                        <ul>
                            <li>Free access to profiles for 7 days</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</li>
                            <li> Mauris mattis, nulla eu varius fringilla, elit magna facilisis nibh</li>
                            <li>Mauris facilisis tellus orci, in porttitor risus bibendum nec.</li>
                            <li> Quisque ornare gravida tempor.</li>

                        </ul>

                    </div>
                    <div className="buy_plans"> 
                         <button>Get Started</button>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default PremiumBanner
