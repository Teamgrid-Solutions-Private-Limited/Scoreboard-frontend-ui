import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../api/Api";

export const getAllSenators = createAsyncThunk(
    "senators/getAllSenators",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/senator/senators/view`)
            console.log(response)
            return response.data.info

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const senatorSlice = createSlice({
    name: "senators",
    initialState: {
      senators: [],
      loading: false,
      error: null,
    },
    reducers: {},
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
    },
  });
  
  export default senatorSlice.reducer;