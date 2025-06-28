import React from "react";
import { Link } from "react-router-dom"; 

const Footer =()=>{
    return(
        <div className=" footer">
            <div className="before-footer-p"> 
                        <div className="before-footer  p-5 ">
                            <div className="row">
                                <div className="col col-lg-6">
                                    <h5 className="  text-capitalize  w-75">see my projects at once & leave here your email address</h5>
                                </div>
                                <div className="col col-lg-6">
                                    <form>
                                        <div className="input-submit-wrapper ">
                                            <input type="email" placeholder="Enter your email" required />
                                            <button type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
            </div>


            <div className="end d-flex justify-content-between ">
                    <a className="navbar-brand logo" href="#"><h1>Portfolio</h1></a>
                    <div className="icons ">
                            <div className="i-parent">
                                <div className="overlay">
                                </div>
                                <Link to="https://facebook.com"><i className="fa-brands fa-facebook-f"></i></Link>
                            </div>
                            <div className="i-parent">
                                <div className="overlay">
                                </div>
                                <Link to="https://linkedin.com"><i className="fa-brands fa-linkedin-in"></i></Link>
                            </div>
                            <div className="i-parent">
                                <div className="overlay">
                                </div>
                                <Link to="https://instagram.com"><i className="fa-brands fa-instagram"></i></Link>
                            </div>
                            <div className="i-parent">
                                <div className="overlay">
                                </div> 
                                <Link to="https://github.com"><i className="fa-brands fa-github"></i></Link>
                            </div>
                    </div> 
            </div>                   
         </div>
    )
}
export default Footer ;