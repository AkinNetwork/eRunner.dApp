import "./css/ands.css";
import Hero from "./components/Hero";

const slogan =
  " Enhance Every Delivery, Your Way! Price match and deliver added value. Customize courier services for any errand request, optimizing efficiency with our intuitive app";

function App() {
  return (
    <div className="App">
      <Hero appName="eRRand" pageTitle={slogan} />
    </div>
  );
}

export default App;
