import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import FirstSectin from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

const Projects =()=>{


    return(
        <div>
            <div className="projects">
                        <h2 className=" text-center   pt-5  text-light">My Projects</h2>
                        <p className=" text-center pt-2  text-light opacity-75">My name is shrouk hakiem, i'm a frontend web developer</p>
                <div className="conrainer-p ">
                    <div className="nav-p d-flex  justify-content-center ">
                        <nav className="text-center h-100  d-flex justify-content-center">
                            <NavLink className="flex-grow-1 " to="/firstsection"><div className=" h-100"  >1st section</div> </NavLink>
                            <NavLink className="flex-grow-1 " to="/secondsection"><div className=" h-100"  >2nd section</div> </NavLink>
                            <NavLink className="flex-grow-1 " to="/thirdsection"><div className=" h-100"  > 3rd section</div></NavLink>
                        </nav>
                    </div>
                    <Routes>
                        <Route path="/firstsection"  element={<FirstSectin /> }/>
                        <Route path="/secondsection"  element={<SecondSection /> }/>
                        <Route path="/thirdsection"  element={<ThirdSection /> }/>
                    </Routes>

                </div>  
            </div>
        </div>
    )
}
export default Projects ;

