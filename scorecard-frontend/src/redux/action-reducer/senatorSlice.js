import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../api/Api";

export const getAllSenators = createAsyncThunk(
  "senators/getAllSenators",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/senator/senators/view`)
      // console.log(response)
      return response.data.info

    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
export const getSenatorById = createAsyncThunk(
  "senators/getSenatorById",
  async (id, { rejectWithValue }) => {
    try {
      // const response = await axios.get(`${API_URL}/senator/senators/viewId/${id}`);
      const response = await axios.get(`${API_URL}/senator/senators/viewId/${id}`);

      // console.log(response.data)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

const senatorSlice = createSlice({
  name: "senators",
  initialState: {
    senators: [],
    senator:null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSenatorState: (state) => {
      state.senator = null; // Clear the selected senator
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSenators.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllSenators.fulfilled, (state, action) => {
        state.loading = false;
        state.senators = action.payload;
      })
      .addCase(getAllSenators.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      //get Senator By Id
      builder
      .addCase(getSenatorById.pending,(state)=>{
        state.loading=true;
        state.error=null;
      })
      .addCase(getSenatorById.fulfilled,(state,action)=>{
        state.loading=false;
        state.senator=action.payload;
      })
      .addCase(getSenatorById.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload
      })
  },
});
export const {clearSenatorState}=senatorSlice.actions
export default senatorSlice.reducer;