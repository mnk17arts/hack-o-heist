import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Schedule from "./Components/Schedule/Schedule";
import Faq from "./Components/FAQ/Faq";
import Tracks from "./Components/Tracks/Track";
import Prizes from "./Components/Prizes/Prizes";
import Sponsors from "./Components/Sponsors/Sponsor";
import Navbar from "./Components/Home/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Tracks id="tracks" />
      {/* <Prizes/> */}
      <Schedule id="schedule" />
      <Sponsors id="sponsors" />
      <Faq id="faq" />
    </div>
  );
}

export default App;
