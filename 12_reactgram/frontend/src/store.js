/* import { configureStore } from '@reduxjs/toolkit';

import authReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
}); */

import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../src/slices/authSlice';

export const store = configureStore({
  reducer: {authSlice},
})