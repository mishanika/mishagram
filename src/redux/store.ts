import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import directSlice from './reducers/direct..slice';

const store = configureStore({
  reducer: { direct: directSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
