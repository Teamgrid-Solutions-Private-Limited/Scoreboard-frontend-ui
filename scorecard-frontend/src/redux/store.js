import { configureStore } from "@reduxjs/toolkit";
import senatorReducer from "./action-reducer/senatorSlice";
import senatorDataSlice from "./action-reducer/senatorTermSlice"
const store=configureStore({
    reducer:{
        senator:senatorReducer,
        senatorData:senatorDataSlice
    }
});
export default store;
