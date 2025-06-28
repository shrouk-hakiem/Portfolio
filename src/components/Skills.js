import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const SkillProgressBar = ({ percentage, label }) => (
    <div className='skill-div'>
      <div style={{ width: 190, height: 190 }}>
        <CircularProgressbar
          value={percentage}
          strokeWidth={10}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0.25,
            textColor:'white',
            pathColor: `rgb(97, 131, 55)`,
            trailColor: 'transparent',
          })}
        />
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#4c00ff" />
              <stop offset="100%" stopColor="#7700ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="skill-labe-p"><h4 className='skill-label  text-light pt-4 text-center '>{label}</h4></div>
    </div>
  );

  return (
    <div className="skills d-flex justify-content-center py-5 m-auto ">
      <div className="container py-5 container-s">
        <div className="text text-center">
          <h1>Skills</h1>
          <p className="skills-p">You Can See My Skills Here</p>
        </div>
        <Carousel responsive={responsive} infinite={true} className="custom-carousel py-5 px-3">
            <SkillProgressBar percentage={95} label={"HTML5"} />
            <SkillProgressBar percentage={90} label={"CSS3"} />
            <SkillProgressBar percentage={90} label={"Bootstrap"} />
            <SkillProgressBar percentage={90} label={"Responsive Design"} />
            <SkillProgressBar percentage={85} label={"JavaScript (ES6+)"} />
            <SkillProgressBar percentage={80} label={"React JS"} />
            <SkillProgressBar percentage={90} label={"FrontEnd Development" } />
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;
