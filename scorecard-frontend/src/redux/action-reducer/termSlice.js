import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../api/Api';


// Get all terms
export const getAllTerms = createAsyncThunk(
    'terms/getAllTerms',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_URL}/term/terms/viewAll/`);
        
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

// Slice
const termSlice = createSlice({
    name: 'terms',
    initialState: {
      terms: [],
      term: null,
      loading: false,
      error: null,
    },
    reducers: {
      clearTermState: (state) => {
        state.terms = [];
        state.term = null;
        state.loading = false;
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      // Get All Terms
      builder.addCase(getAllTerms.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(getAllTerms.fulfilled, (state, action) => {
        state.loading = false;
        state.terms = action.payload;
      });
      builder.addCase(getAllTerms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  

    },
  });
  
  export const { clearTermState } = termSlice.actions;
  
  export default termSlice.reducer;