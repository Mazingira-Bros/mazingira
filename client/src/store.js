import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';

const reducer = {
  user: userSlice.reducer,
  // Add any other reducers here
};

const store = configureStore({
  reducer,
});

export default store;
