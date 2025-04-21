import { configureStore } from "@reduxjs/toolkit";
import senatorReducer from "./action-reducer/senatorSlice";
import senatorDataSlice from "./action-reducer/senatorTermSlice"
import houseReducer from "./action-reducer/houseSlice"
import houseDataReducer from "./action-reducer/houseTermSlice"
import voteReducer from "./action-reducer/voteSlice"
import termReducer from "./action-reducer/termSlice"
import activityReducer from "./action-reducer/activitySlice"
const store=configureStore({
    reducer:{
        senator:senatorReducer,
        senatorData:senatorDataSlice,
        house:houseReducer,
        houseData:houseDataReducer ,
        vote:voteReducer,
        term:termReducer,
        activity:activityReducer,
    }
});
export default store;