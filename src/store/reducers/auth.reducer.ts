import { LocalStorageKey } from '@/constants/local-storage.constant';
import { IUser } from '@/types/user';
import storage from '@/utils/local-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface AuthState {
  loginUser: IUser | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  loginUser: storage.get(LocalStorageKey.USER)
    ? JSON.parse(storage.get(LocalStorageKey.USER))
    : null,
  isLoggedIn: !!storage.get(LocalStorageKey.AUTH),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginUser: (state, action: PayloadAction<IUser>) => {
      state.loginUser = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    signOut: (state) => {
      state.isLoggedIn = false;
      state.loginUser = null;
      storage.remove(LocalStorageKey.AUTH);
      storage.remove(LocalStorageKey.USER);
    },
  },
});

export const { setIsLoggedIn, setLoginUser, signOut } = authSlice.actions;

export const getLoginUser = (state: RootState) => state.auth.loginUser as IUser;
export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;
