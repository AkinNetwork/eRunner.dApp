import "./css/ands.css";
import "./components/Hero";
//import BannerSVG from "./components/svg/BannerSVG/BannerSVG";
//import BannerCellSVG from "./components/svg/BannerCellSVG/BannerCellSVG";
import BannerCell from "./components/svg/BannerCellSVG/BannerCell";

function App() {
  return (
    <>
      <div>
        {/* <BannerCellSVG /> */}
        <BannerCell />
      </div>
    </>
  );
}

export default App;
