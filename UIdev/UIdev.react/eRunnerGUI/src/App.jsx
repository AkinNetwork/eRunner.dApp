import "./css/ands.css";
import Hero from "./components/Hero";

const heroIntroTitle = "My delivery service, <br>my way!";
const heroIntroDescription =
  "Customise delivery offers instantly, optimise itineraries, and streamline delivery timelines with transparency.";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Hero
          heroTitle={heroIntroTitle}
          heroDescription={heroIntroDescription}
        />
      </div>
    </div>
  );
}

export default App;
