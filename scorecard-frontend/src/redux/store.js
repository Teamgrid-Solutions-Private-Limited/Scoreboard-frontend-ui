import { configureStore } from "@reduxjs/toolkit";
import senatorReducer from "./action-reducer/senatorSlice";
import senatorDataSlice from "./action-reducer/senatorTermSlice"
import houseReducer from "./action-reducer/houseSlice"
import houseDataReducer from "./action-reducer/houseTermSlice"
import voteReducer from "./action-reducer/voteSlice"
import activityReducer from "./action-reducer/activitySlice"
import termSlice from "./action-reducer/termSlice";
const store=configureStore({
    reducer:{
        senator:senatorReducer,
        senatorData:senatorDataSlice,
        house:houseReducer,
        houseData:houseDataReducer ,
        vote:voteReducer,
        activity:activityReducer,
        term:termSlice
    }
});

export default store;