import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Schedule from "./Components/Schedule/Schedule";
import Faq from "./Components/FAQ/Faq";
import Tracks from "./Components/Tracks/Track";
import Prizes from "./Components/Prizes/Prizes";
import Sponsors from "./Components/Sponsors/Sponsor";
import Navbar from "./Components/Home/Navbar";
import Register from "./Components/Register/Register";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Tracks/>
      <Prizes/>
      <Schedule/>
      <Sponsors/>
      <Faq/>
      <Register/>
    </div>
  );
}

export default App;
