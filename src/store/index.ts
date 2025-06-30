import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/app.reducer';
import authReducer from './reducers/auth.reducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
