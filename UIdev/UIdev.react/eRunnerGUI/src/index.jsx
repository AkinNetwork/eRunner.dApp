/* 
@component Initiate application with Redux Store
@author: Margareta.Sandor@akin.network
Powered by @AkinTechLab
*/

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
