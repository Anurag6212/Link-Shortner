import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authSlice';
import shortnerSlice from './Reducers/shortnerSlice';
import userSlice from './Reducers/userSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      table : shortnerSlice,
      user: userSlice
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
