import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Schedule from "./Components/Schedule/Schedule";
import Faq from "./Components/FAQ/Faq";
import Tracks from "./Components/Tracks/Track";
function App() {
  return (
    <div className="App">
      <Home />
      <Tracks />
      <About />
      <Schedule />
      <Faq />
    </div>
  );
}

export default App;
