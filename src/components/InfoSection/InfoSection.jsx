import React from "react";
import { useNavigate } from "react-router-dom";
import "./InfoSection.css";
import carebox from "../../assets/healconscious-carebox-home-banner-row-1-1-2-300x275.webp"
import careoxLogo from "../../assets/Careox-Connect-Login-Screen-Mobile-App-234x300.png";


const InfoSection = () => {
  const navigate = useNavigate();

  return (
    <section className="info">
     <div className="info-left">

  
  <div className="card-container">
    <h1 className="card-heading">GET THE CAROEOX<br/> PROGRAM</h1>
    <div className="card" onClick={() => navigate("/page1")}>
      <img src={carebox} alt="Careox Program" />
  
    </div>
  </div>

  {/* Second card + heading */}
  <div className="card-container">
    <h1 className="card-heading">SIGN UP ON CONNECT<br/> APP</h1>
    <div className="card" onClick={() => navigate("/page2")}>
      <img src={careoxLogo} alt="Connect App" />
      
    </div>
  </div>
</div>

      
      <div className="info-right">
        <h4 className="h4">How it works?</h4>
        <h1 className="h1">What is Careox?</h1>
        <h5 className="h5">Careox is a 4-week reset for your mental well-being, combining daily<br></br> mindfulness exercises, journaling prompts, and expert-led strategies to help<br/> you break free from stress and past struggles <br></br><br></br>
              The mental health fortification program includes easy daily tasks that ensure clarity<br/> and structure empowering you to cultivate lasting happiness through a <br></br>holistic approach, making mental health care simple, accessible, and deeply<br></br> personal.<br></br><br></br>
              Our mental health squad helps you navigate through the program and your<br></br> mental health lifestyle revamp through Connect mobile app to ensure you get<br></br> the best out of Careox.</h5>
            <button onClick={() => navigate("/careox")}>Read More</button>
      </div>
     </section>
  );
};

export default InfoSection;