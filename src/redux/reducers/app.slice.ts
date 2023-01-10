import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface appState {
  name: string;
}

const initialState: appState = {
  name: 'mishagram',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});
export const selectName = (state: RootState) => state.app.name;

export default appSlice.reducer;
