import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDialog, IMessage } from '../../types/types';
import { RootState } from '../store';

export interface initialState {
  dialogs: IDialog[];
  messages: IMessage[];
}

const initialState: initialState = {
  dialogs: [{ id: '1', senderAvatar: '', senderName: 'шо', lastMessage: 'hello world', messageSent: '1h' }],
  messages: [],
};

const directSlice = createSlice({
  name: 'direct',
  initialState: initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<IMessage[]>) => {
      state.messages = action.payload;
    },
  },
});

const { actions, reducer: directReducer } = directSlice;

export const { setMessages } = actions;

export const selectDialogs = (state: RootState) => state.direct.dialogs;

export default directReducer;
