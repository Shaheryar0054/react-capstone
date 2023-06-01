import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await fetch('https://remotive.com/api/remote-jobs');
  const data = await response.json();
  return data.jobs;
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: { jobs: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jobs = state.jobs.concat(action.payload);
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
