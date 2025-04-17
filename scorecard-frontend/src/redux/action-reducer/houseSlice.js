import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../api/Api";

//getAllHouse
export const getAllHouses=createAsyncThunk(
    "house/getAllHouses",
    async(_,{rejectWithValue})=>{
        try{
            const response=await axios.get(`${API_URL}/house/house/view`);
            console.log(response.data)
            return response.data
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
);

 //Initial State
 const initialState={
    houses:[],
    house:null,
    loading:false,
    error:null
 }

 //Slice
 const houseSlice= createSlice({
    name:"house",
    initialState,
    reducers:{
        clearHouseState:(state)=>{
            state.house=null;
            state.loading=false,
            state.error=null;
        }
    },
    extraReducers:(builder)=>{
        //Get all house
        builder
        .addCase(getAllHouses.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(getAllHouses.fulfilled,(state,action)=>{
            state.loading=false;
            state.houses=action.payload;

        })
        .addCase(getAllHouses.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
        })

    }
 })
 export default houseSlice.reducer;
 export const {clearHouseState}=houseSlice.actions



