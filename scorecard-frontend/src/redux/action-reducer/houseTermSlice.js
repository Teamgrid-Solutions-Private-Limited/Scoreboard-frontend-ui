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

  export const getHouseDataById = createAsyncThunk(
    'houseData/getHouseDataById',
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_URL}/houseData/house-data/viewID/${id}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const getHouseDataByHouseId = createAsyncThunk(
    'houseData/getHouseDataByHouseId',
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_URL}/houseData/house-data/viewbyhouse/${id}`);
        // console.log("house tERM",response.data.info)
        return response.data.info;
      } catch (error) {
        console.log("house ERROR",error.response.data)
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
        })
        // Get Senator Data by ID
        .addCase(getHouseDataById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getHouseDataById.fulfilled, (state, action) => {
          state.loading = false;
          state.currentHouse = action.payload;
        })
        .addCase(getHouseDataById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(getHouseDataByHouseId.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getHouseDataByHouseId.fulfilled, (state, action) => {
          state.loading = false;
          state.currentHouse = action.payload;
        })
        .addCase(getHouseDataByHouseId.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
    },
});

export default houseDataSlice.reducer;
export const {clearHouseDataState}=houseDataSlice.actions