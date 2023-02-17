import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface appState {
  id: number;
  name: string;
}

const initialState: appState[] = [{ id: 1, name: 'mishagram' }];

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export const selectName = (state: RootState) => state.app[0].name;

export default appSlice.reducer;
