import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../api/Api";

//getAllHouseData
export const getAllHouseData = createAsyncThunk(
    'houseData/getAllHouseData',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_URL}/houseData/house-data/viewAll/`);
        console.log(response.data)
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );


  const initialState={
    houseData: [],
    currentHouse: null,
    loading: false,
    error: null,
  }

// Slice
const houseDataSlice = createSlice({
    name: 'houseData',
    initialState,
    reducers: {
      clearHouseDataState: (state) =>{
        state.currentHouse = null;
        state.loading = false;
        state.error = null;
      }
    },
    extraReducers: (builder) => {
      builder
        // Get All Senator Data
        .addCase(getAllHouseData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getAllHouseData.fulfilled, (state, action) => {
          state.loading = false;
          state.houseData = action.payload;
        })
        .addCase(getAllHouseData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
});

export default houseDataSlice.reducer;
export const {clearHouseDataState}=houseDataSlice.actions