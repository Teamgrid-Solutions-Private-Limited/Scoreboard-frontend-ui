import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../api/Api';

// Get all votes
export const getAllVotes = createAsyncThunk(
    'votes/getAllVotes',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_URL}/vote/votes/viewAll/`);
        console.log(response.data)
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  
  const voteSlice = createSlice({
    name: 'votes',
    initialState: {
      votes: [],
      vote: null,
      loading: false,
      error: null,
    },
    reducers: {
      clearVoteState: (state) => {
        state.votes = [];
        state.vote = null;
        state.loading = false;
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      // Get All Votes
      builder.addCase(getAllVotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(getAllVotes.fulfilled, (state, action) => {
        state.loading = false;
        state.votes = action.payload;
      });
      builder.addCase(getAllVotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
  });
  
  export const { clearVoteState } = voteSlice.actions;
  
  export default voteSlice.reducer;