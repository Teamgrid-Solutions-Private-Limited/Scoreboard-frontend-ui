import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from "../api/Api"

export const getAllSenatorData = createAsyncThunk(
    'senatorData/getAllSenatorData',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_URL}/senatorData/senator-data/viewAll/`);
        console.log(response.data)
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  
// Initial state
const initialState = {
    senatorData:[],
  currentSenator: null,
  loading: false,
  error: null,
};

// Slice
const senatorDataSlice = createSlice({
  name: 'senatorData',
  initialState,
  reducers: {
    clearSenatorDataState: (state) => {
      state.currentSenator = null; 
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
       // Get All Senator Data
       .addCase(getAllSenatorData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllSenatorData.fulfilled, (state, action) => {
        state.loading = false;
        state.senatorData = action.payload;
      })
      .addCase(getAllSenatorData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default senatorDataSlice.reducer;
export const { clearSenatorDataState } = senatorDataSlice.actions;