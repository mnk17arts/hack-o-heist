import Hackathon from "./Hackathon";
import Navbar from "./Navbar";
import "./Home.css";
import bgBottom from "./img/layer.png";
import Timer from "../Timer/Timer";

export default function Home() {
  return (
    <div className="home">

      <div className="home__content">
        <div className="home__content-left">
          <Hackathon />
        </div>

        <div className="home__content-middle">
          <h3>ROBOTICS CLUB NITP</h3>
          <h2>HACK O HEIST</h2>
          <Timer />
        </div>

        <div className="home__content-right">
          <Hackathon />
        </div>
      </div>

      <img className="bgBottom" src={bgBottom} alt="bottom" />
    </div>
  );
}
