import { useEffect, useState } from "react";
import axios from "axios";
import Intro from "./components/AppIntro";
import "./css/ands.css";

function App() {
  const [data, setData] = useState(null);
  const [id] = useState("intro"); // Hardcoding the ID to 'intro' for this example

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/data/content/${id}.json`);
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching ${id} data:`, error);
        setData(null); // Ensure data is null if fetching fails
      }
    };

    fetchData();
  }, [id]);

  console.log(data);

  let contentComponent;
  if (id === "intro" && data) {
    contentComponent = <Intro data={data} />;
  } else {
    contentComponent = <div>Component for ID {id} not found.</div>;
  }

  return <div className="App">{contentComponent}</div>;
}

export default App;
