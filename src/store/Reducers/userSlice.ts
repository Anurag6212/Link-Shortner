import { registerUser as registerUserType, User } from '@/Types/user';
import { get, post } from '@/utils/serviceCaller';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState: registerUserType = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  loader: false,
  error: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(
      registerUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state = action.payload;
      }
    );
    builders.addCase(
      registerUser.rejected,
      (_state, action: PayloadAction<any>) => {
        _state.error = action.payload;
      }
    );

    builders.addCase(
      getUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state = action.payload;
      }
    );
    builders.addCase(getUser.rejected, (_state, action: PayloadAction<any>) => {
      _state.error = action.payload;
    });
  },
});

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user: User, { rejectWithValue }) => {
    try {
      const response = await post('/user', user);
      return response.data as User;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const getUser = createAsyncThunk(
  'user/getUser',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await get(`/user/${userId}`);
      return response.data as User;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export default authSlice.reducer;
