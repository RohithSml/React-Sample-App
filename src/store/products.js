import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUSAData } from '../api/usaData';


const initialState = {
  status: 'pending',
  data: [],
};

export const getUsaData = createAsyncThunk(
  'useDatagetter',
  async () => {
    const response = await getUSAData();
    console.log(response, "response");
    return response?.data;
  },
);

const USADataSlice = createSlice({
  name: 'usaData',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsaData.pending, (state) => {
        console.log("pending");
        state.status = 'loading';
      })
      .addCase(getUsaData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action, "Action");
        state.data = action.payload.data; 
      })
      .addCase(getUsaData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default USADataSlice.reducer;
