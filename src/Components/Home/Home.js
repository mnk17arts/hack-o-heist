import Hackathon from "./Hackathon";
import Navbar from "./Navbar";
import "./Home.css";
import bgBottom from "./img/bgBottom.png";

export default function Home() {
  return (
    <div className="home">
      <div className="navigation-menu">
        <Navbar />
      </div>

      <div className="home__content">
        <div className="home__content-left">
          <Hackathon />
        </div>

        <div className="home__content-middle">
          <h3>ROBOTICS CLUB NITP</h3>
          <h2>HACK O HEIST</h2>
          <h3>COMING SOON</h3>
        </div>

        <div className="home__content-right">
          <Hackathon />
        </div>
      </div>

      <img className="bgBottom" src={bgBottom} alt="bottom" />
    </div>
  );
}
