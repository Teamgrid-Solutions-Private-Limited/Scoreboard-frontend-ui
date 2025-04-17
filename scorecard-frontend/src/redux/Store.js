import { configureStore } from "@reduxjs/toolkit";
import VoteReducer from "../redux/Reducer/voteSlice"
import termReducer from "../redux/Reducer/termSlice"

const store = configureStore({
  reducer: {
    vote : VoteReducer,
   
  }
});

export default store;