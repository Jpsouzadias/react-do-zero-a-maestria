import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import photoReducer from './slices/photoSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer, // Use 'auth' as the key, not 'authSlice'
    user: userReducer,
    photo: photoReducer,
  },
});
