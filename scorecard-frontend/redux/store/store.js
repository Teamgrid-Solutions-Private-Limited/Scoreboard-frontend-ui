import { configureStore } from "@reduxjs/toolkit";
import senatorReducer from "../slice/SenatorSlice";

const store=configureStore({
    reducer:{
        senator:senatorReducer
    }
});
export default store;
