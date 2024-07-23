import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialData } from "./store/dataSlice";
import Intro from "./components/AppIntro";
import "./css/ands.css";

function App() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      {data ? <Intro data={data} /> : <div>No data available</div>}
    </div>
  );
}

export default App;
