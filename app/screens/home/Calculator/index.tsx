import React from 'react';
import {View} from 'react-native';

import {Text} from 'components';

import {
  clear,
  operate,
  calculate,
  addNumber,
  addDecimal,
} from 'store/slices/calculator';
import {useTheme} from 'providers/theme';
import {useAppDispatch, useAppSelector} from 'store';

import Button from './Button';

import styles from './styles';

const Calculator = () => {
  const {theme} = useTheme();
  const dispatch = useAppDispatch();
  const display = useAppSelector(state => state.calculator.display);

  return (
    <View style={styles.calculator}>
      <View style={[styles.display, {backgroundColor: theme.colors.primary}]}>
        <View
          style={[styles.displayInner, {backgroundColor: theme.colors.color1}]}>
          <Text title={display} style={styles.displayText} />
        </View>
      </View>

      <View style={[styles.buttons, {backgroundColor: theme.colors.card}]}>
        <View style={[styles.buttonsLeft]}>
          <View style={[styles.buttonsTop]}>
            <Button
              title="C"
              color="orange"
              onPress={() => dispatch(clear())}
            />
            <Button
              title="/"
              color="gray_dark"
              onPress={() => dispatch(operate('/'))}
            />
            <Button
              title="*"
              color="gray_dark"
              onPress={() => dispatch(operate('*'))}
            />
            <Button title="7" onPress={() => dispatch(addNumber(7))} />
            <Button title="8" onPress={() => dispatch(addNumber(8))} />
            <Button title="9" onPress={() => dispatch(addNumber(9))} />
            <Button title="4" onPress={() => dispatch(addNumber(4))} />
            <Button title="5" onPress={() => dispatch(addNumber(5))} />
            <Button title="6" onPress={() => dispatch(addNumber(6))} />
            <Button title="1" onPress={() => dispatch(addNumber(1))} />
            <Button title="2" onPress={() => dispatch(addNumber(2))} />
            <Button title="3" onPress={() => dispatch(addNumber(3))} />
          </View>

          <View style={[styles.buttonsBottom]}>
            <Button
              title="0"
              color="gray_dark"
              style={styles.btnDouble}
              onPress={() => dispatch(addNumber(0))}
              textStyle={styles.textDoubleHorizontal}
            />
            <Button
              title="."
              color="gray_dark"
              style={styles.btnSingle}
              onPress={() => dispatch(addDecimal())}
            />
          </View>
        </View>

        <View style={[styles.buttonsRight]}>
          <Button
            title="-"
            color="gray_dark"
            style={styles.btnSingle}
            onPress={() => dispatch(operate('-'))}
          />
          <Button
            title="+"
            color="gray_dark"
            style={styles.btnDouble}
            textStyle={styles.textDouble}
            onPress={() => dispatch(operate('+'))}
          />
          <Button
            title="="
            color="gray_dark"
            style={styles.btnDouble}
            textStyle={styles.textDouble}
            onPress={() => dispatch(calculate())}
          />
        </View>
      </View>
    </View>
  );
};

export default Calculator;
