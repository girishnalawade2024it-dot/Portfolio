import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { portfolioData } from "../data/portfolioData";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{portfolioData.landing.greeting}</h2>
            <h1>
              {portfolioData.landing.firstName}
              <br />
              <span>{portfolioData.landing.lastName}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{portfolioData.landing.roles[0].primary}</div>
              <div className="landing-h2-2">{portfolioData.landing.roles[0].secondary}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{portfolioData.landing.roles[1].primary}</div>
              <div className="landing-h2-info-1">{portfolioData.landing.roles[1].secondary}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
