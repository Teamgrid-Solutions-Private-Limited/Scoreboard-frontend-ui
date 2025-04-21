import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { API_URL } from "../api/Api";

// Get all activities
export const getAllActivity = createAsyncThunk(
    'activity/getAllActivity',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API_URL}/activity/activity/viewAll/`);
            console.log(response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


// Slice
const activitySlice = createSlice({
    name: 'activity',
    initialState: {
        activities: [],
        activity: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearActivityState: (state) => {
            state.activities = [];
            state.activity = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {

        // Get All Activities
        builder.addCase(getAllActivity.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllActivity.fulfilled, (state, action) => {
            state.loading = false;
            state.activities = action.payload;
        });
        builder.addCase(getAllActivity.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });


    },
});

export const { clearActivityState } = activitySlice.actions;

export default activitySlice.reducer;