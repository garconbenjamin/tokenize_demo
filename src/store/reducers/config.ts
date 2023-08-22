import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/store';

export type Config = { userAgent?: string; deviceId?: string };

const initialState: Config = {
  userAgent: '',
  deviceId: '',
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    clearConfig: () => ({ ...initialState }),
    setConfig: (prevDraftState, action: PayloadAction<Partial<Config>>) => {
      return {
        ...current(prevDraftState),
        ...action.payload,
      };
    },
  },
});

const { actions } = configSlice;

const selectConfig = (state: RootState) => state.config;

export { configSlice, actions, selectConfig };

export default configSlice.reducer;
