import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor  } from "react-simple-typewriter";
import Skills from "./Skills";

const Home =()=>{

    const [text] = useTypewriter({
    words: ['React JS', 'Web Developer', 'Frontend Developer'],
    loop: 10,
    })

    return(
        <div className="home ">
            <div className="container-h  bg-info pt-5 pt-md-4  pt-sm-5">
                <div className="row  w-100  ">
                        <div className="text col-lg-6 col-12 mb-4 mb-lg-0 text-center text-lg-start col-md-12">
                            <h4>Welcome All To My Portfolio</h4>
                            <h1 className=" my-3">Hi! I'm Shrouk Hakiem,</h1>
                            <h1>{text}<span><Cursor /></span></h1>
                            <p>hello everyone i have 8 months of experience in web development.</p>
                            <div className="arr-p">
                                <Link className="d-flex">
                                        <h5>Let's Connect</h5>
                                        <div className="arr">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                </Link>
                            </div>
                        </div>

                        <div className="robot-img col-lg-6 col-12 text-center col-md-12 ">
                            <img src="/images/pngegg.png" alt="Logo" 
                                 className="img-fluid"
                                 style={{ maxWidth: "100%", height: "auto" }}
              />
                        </div> 
                </div>
            </div>   
        </div>
    )
}
export default Home ;


