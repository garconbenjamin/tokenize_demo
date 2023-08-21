import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '@/store';
import type {User} from '@/types/user';

const initialState: Partial<User> = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: () => ({...initialState}),
    setUser: (state, action: PayloadAction<Partial<User>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

const {actions} = userSlice;

const selectUser = (state: RootState) => state.user;

export {userSlice, actions, selectUser};

export default userSlice.reducer;
