import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from '@/features/countries/countriesSlice';

export const store = configureStore({
  reducer: {
    countries: countriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
