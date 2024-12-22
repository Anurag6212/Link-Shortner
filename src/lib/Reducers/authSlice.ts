import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  loginMode: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loginMode: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleLoginMode: (state, action: PayloadAction<string>) => {
      state.loginMode = action.payload;
    },
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout, toggleLoginMode } = authSlice.actions;

export default authSlice.reducer;
