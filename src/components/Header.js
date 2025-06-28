import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

const Header =()=> {

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return(
        <div className={`header  ${scrolled ? "scrolled" : ""}`}>
        <div className="header  py-2">
            
            <nav className="navbar navbar-expand-lg ">
                <div className=" container  h-left  ">

                   <a className="navbar-brand logo" href="#"><h1>Portfolio</h1></a>

                    <button className="navbar-toggler  bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="parent-left d-flex   justify-content-around   gap-4">
                        <div className="collapse navbar-collapse gap-3" id="navbarNav">
                            <nav className=" header-nav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#home">Home</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#skills">Skills</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#projects">Projects</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="icons ">
                            <div className="i-parent">
                                <div className="overlay">
                                </div>
                                <Link><i className="fa-brands fa-facebook-f"></i></Link>
                            </div>
                            <div className="i-parent">
                                <div className="overlay">
                                </div>
                                <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                            </div>
                            <div className="i-parent">
                                <div className="overlay">
                                </div>
                                <Link><i className="fa-brands fa-instagram"></i></Link>
                            </div>
                            <div className="i-parent">
                                <div className="overlay">
                                </div> 
                                <Link><i className="fa-brands fa-github"></i></Link>
                            </div>
                        </div>

                        <div>
                            <button>
                                <div className="overlay-b"></div>
                                <Link>let's connect</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    )
}
export default Header ;