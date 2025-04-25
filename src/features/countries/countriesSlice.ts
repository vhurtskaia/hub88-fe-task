import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountriesState } from '@/features/countries/types';

const initialState: CountriesState = {
  query: '',
};

const countriesSlice = createSlice({
  name: 'countriesSlice',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      console.log(state.query);
    },
  },
});

export const { setQuery } = countriesSlice.actions;
export default countriesSlice.reducer;