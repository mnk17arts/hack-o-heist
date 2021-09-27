import React from "react";
import "./About.css";
import layer from "./layer.png";
import pic from "./photo.png";
//import spot from "./spot.png";

const About = () => {
  return (
    <div className="back">
      <img class="layer" src={layer} alt="layer" />
      <img className="maskPhoto" src={pic} alt="layer"></img>
      <div className="containerAbout">
        <h2 className="headingAbout">ABOUT US</h2>
        <div className="material">
          Hacking Heist is a highly anticipated international hackathon
          organized by many famous student communities all over the world
          uniting together to produce a memorable event for talented students
          who possess the skills of different domains. The event is a 36-hour
          long with a theme based on Pirates. The participants come resembling
          pirates and fight through the dangerous perils of the oceans which are
          the different domains they will receive in the hackathon. The domains
          come as waves and the pirates maneuvering their way to the treasure.
          The top pirate takes the loot and in the same way, the top
          participants will receive awards. The participant who successfully
          travels through all the perils of the ocean(challenges) is termed as
          the “King of the Ocean”.
        </div>
      </div>
      <div class="clear"></div>
    </div>
  );
};

export default About;
