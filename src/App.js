import "./App.css";
import About from "./Components/About/About";
import Schedule from "./Components/Schedule/Schedule";
import Faq from "./Components/FAQ/Faq";
import Tracks from "./Components/Tracks/Track";
import Prizes from "./Components/Prizes/Prizes";
import Sponsors from "./Components/Sponsors/Sponsor";
import Navbar from "./Components/Home/Navbar";
import Register from "./Components/Register/Register";
import React from "react";
const Home = React.lazy(() => import("./Components/Home/Home"));

function App() {
  const [active, setActive] = React.useState(0);
  const handleScroll = e => {
    if (window.scrollY <= 1530) setActive(0);
    else if (window.scrollY <= 2330) setActive(1);
    else if (window.scrollY <= 3500) setActive(2);
    else if (window.scrollY <= 6950) setActive(3);
    else if (window.scrollY <= 7670) setActive(4);
    else if (window.scrollY > 7670) setActive(5);
  };
  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App">
      <Navbar active={active} />
      <Home />
      <About />
      <Tracks />
      <Prizes />
      <Schedule />
      <Sponsors />
      <Faq />
      <Register />
    </div>
  );
}

export default App;
