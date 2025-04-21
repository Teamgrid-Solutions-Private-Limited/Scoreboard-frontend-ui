import { configureStore } from "@reduxjs/toolkit";
import senatorReducer from "./action-reducer/senatorSlice";
import senatorDataSlice from "./action-reducer/senatorTermSlice"
import houseReducer from "./action-reducer/houseSlice"
import termReducer from "../redux/Reducer/termSlice"

const store = configureStore({
  reducer: {
    vote : VoteReducer,
   
  }
});

export default store;