import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../src/slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice // Use 'auth' as the key, not 'authSlice'
  }
});
