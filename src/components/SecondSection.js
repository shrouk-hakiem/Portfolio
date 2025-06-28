import React from "react";
import { Link } from "react-router-dom";

const SecondSection =()=>{

    return(
        <div>
            <div className="second">
                <div className="second-overlay  ">
                    <div className="row w-100">
                            <div className="col-lg-6 col-12 col-md-6"><img className="   " src="/images/pngegg (2).png"/></div>

                            <div className="col-lg-6 col-12 col-md-6">
                                <form className=" ">
                                    <h2 className=" text-light pb-4">Get In Touch</h2>
                                    <div class="row g-2  mb-3">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                                        </div>
                                    </div>
                                    <div class="row g-2 ">
                                        <div class="col">
                                            <input type="email" class="form-control" placeholder="Email address" aria-label="First name"/>
                                        </div>
                                        <div class="col">
                                            <input type="password" class="form-control" placeholder="Password" aria-label="Last name"/>
                                        </div>
                                    </div>
                                    {/* <div className=" row"> */}
                                        <div class=" col mb-3 ">
                                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                                        </div>
                                    {/* </div>     */}
                                    <button className="send-btn"><span className="overlay-b"></span>Send</button>
                                </form>
                            </div>    
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default SecondSection;