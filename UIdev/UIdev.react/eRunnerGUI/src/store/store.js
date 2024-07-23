/* 
@component Application Redux Store
@author: Margareta.Sandor@akin.network
Powered by @AkinTechLab
*/

import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
