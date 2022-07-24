import {createSlice} from '@reduxjs/toolkit';

import {calculateByOperator, isInt} from 'utils';

const initialState = {
  idle: true,
  result: '0',
  display: '0',
  operand: 'init',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    clear: state => {
      state.idle = initialState.idle;
      state.display = initialState.display;
      state.result = initialState.result;
      state.operand = initialState.operand;
    },
    operate: (state, action) => {
      state.idle = true;
      state.result = state.display;
      state.operand = action.payload;
    },
    calculate: state => {
      state.idle = true;

      const display = calculateByOperator(
        parseFloat(state.result),
        parseFloat(state.display),
        state.operand,
      );

      const displayFixed = String(
        isInt(display) ? display : parseFloat(display.toFixed(2)),
      );

      state.result = displayFixed;
      state.display = displayFixed;
    },
    addNumber: (state, action) => {
      if (state.idle) {
        state.display = String(action.payload);
      } else if (state.display.includes('.')) {
        const numbers = state.display.split('.');

        const decimal = Number(numbers[1]) * 10 + action.payload;

        state.display = numbers[0] + '.' + String(decimal);
      } else {
        const number = parseFloat(state.display) * 10 + action.payload;

        state.display = String(number);
      }

      state.idle = false;
    },
    addDecimal: state => {
      if (!String(state.display).includes('.')) {
        state.display = state.display + '.0';
      }
    },
  },
});

export const {calculate, clear, operate, addNumber, addDecimal} =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
