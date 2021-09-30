import React, {useEffect} from "react";
import "./track.css";
import open from "./open.png";
import healthcare from "./healthcare.png";
import users from "./users.png";
import edu from "./edu.png";
import left from "./left.png";
import Right from "./Right.png";
import AOS from "aos"
import 'aos/dist/aos.css';

const Track = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (
    <div className="Trackx" id="tracks">
      <img src={left} className="left" alt="left" />
      <img src={Right} className="Right" alt="right" />
      <div className="track_box">
        <div className="box_head Tracks">
          <p>Tracks</p>
        </div>
        <div className="box_body">
          <div className="box Communication">
            <h2 data-aos="zoom-in" className="row-1">
              <img src={users} className="users" alt="right" /> Communication
            </h2>
            <p data-aos="zoom-in">
              To drive the innovation in communication technology design devices
              that are potentially impactful . It's time to harness your energy
              and expanding your innovative ideas in making smoother
              communication channels more effectively.
            </p>
          </div>
          <div className="box Agriculture">
            <h2 data-aos="zoom-in" className="row-1">
              <img src={edu} className="edu" alt="edu" /> Agriculture
            </h2>
            <p data-aos="zoom-in">
              With India’s expanding population, global climate change and the
              current uncertain situation the future of agriculture holds the
              opportunities and power to reshape our lives. So build new, fast,
              and frugal solutions.
            </p>
          </div>
          <div className="box Healthcare">
            <h2 data-aos="zoom-in" className="row-1">
              <img src={healthcare} className="healthcare" alt="healthcare" />{" "}
              Healthcare
            </h2>
            <p data-aos="zoom-in">
              Today, we are faced with modern health challenges such as the
              COVID-19 pandemic, mental health, obesity, cardiovascular diseases
              and many more. It is the perfect opportunity for hackers to come
              up with something that serves the health industry.
            </p>
          </div>

          <div className="box Defence">
            <h2 data-aos="zoom-in" className="row-1">
              <img src={healthcare} className="healthcare" alt="Defence" />{" "}
              Defence
            </h2>
            <p data-aos="zoom-in">
              Today, we are faced with modern health challenges such as the
              COVID-19 pandemic, mental health, obesity, cardiovascular diseases
              and many more. It is the perfect opportunity for hackers to come
              up with something that serves the health industry.
            </p>
          </div>

          <div className="box Open">
            <h2 data-aos="zoom-in" className="row-1">
              <img src={open} className="open" alt="open" /> Open Innovation
            </h2>
            <p data-aos="zoom-in">
              Have ideas that do not fall into any of the above tracks? Worry
              not. The best part is we encourage you to exercise your ideas and
              develop technologies that address a problem, without any
              restrictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
