import {createSlice} from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
