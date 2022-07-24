import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

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

const windowWidth = Dimensions.get('window').width;
const calculatorWidth = windowWidth > 350 ? 350 : windowWidth;

const Calculator = () => {
  const {theme} = useTheme();
  const dispatch = useAppDispatch();
  const display = useAppSelector(state => state.calculator.display);

  return (
    <View style={styles.calculator}>
      <View style={[styles.display, {backgroundColor: theme.colors.primary}]}>
        <View
          style={[styles.displayInner, {backgroundColor: theme.colors.color1}]}>
          <Text
            title={display}
            style={[
              styles.displayText,
              {color: theme.colors.text, fontFamily: theme.fonts.bold},
            ]}
          />
        </View>
      </View>

      <View style={[styles.buttons, {backgroundColor: theme.colors.card}]}>
        <View style={[styles.buttonsLeft]}>
          <View style={[styles.buttonsTop]}>
            <Button
              title="C"
              onPress={() => dispatch(clear())}
              textStyle={{backgroundColor: theme.colors.color4}}
            />
            <Button
              title="/"
              onPress={() => dispatch(operate('/'))}
              textStyle={{backgroundColor: theme.colors.color3}}
            />
            <Button
              title="*"
              onPress={() => dispatch(operate('*'))}
              textStyle={{backgroundColor: theme.colors.color3}}
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
              style={styles.btnDouble}
              onPress={() => dispatch(addNumber(0))}
              textStyle={[
                styles.textDoubleHorizontal,
                {backgroundColor: theme.colors.color3},
              ]}
            />
            <Button
              title="."
              style={styles.btnSingle}
              onPress={() => dispatch(addDecimal())}
              textStyle={{backgroundColor: theme.colors.color3}}
            />
          </View>
        </View>
        <View style={[styles.buttonsRight]}>
          <Button
            title="-"
            style={styles.btnSingle}
            onPress={() => dispatch(operate('-'))}
            textStyle={{backgroundColor: theme.colors.color3}}
          />
          <Button
            title="+"
            style={styles.btnDouble}
            onPress={() => dispatch(operate('+'))}
            textStyle={[
              styles.textDouble,
              {backgroundColor: theme.colors.color3},
            ]}
          />
          <Button
            title="="
            style={styles.btnDouble}
            onPress={() => dispatch(calculate())}
            textStyle={[
              styles.textDouble,
              {backgroundColor: theme.colors.color3},
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    maxWidth: calculatorWidth,
    minHeight: calculatorWidth * 1.5,
  },
  display: {
    flex: 1,
    padding: 25,
    minHeight: 75,
  },
  displayInner: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttons: {
    flex: 3,
    padding: 25,
    minHeight: 350,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  buttonsLeft: {
    flex: 3,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonsTop: {
    flex: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsRight: {
    flex: 1,
  },
  btnSingle: {flex: 2, flexBasis: 2},
  btnDouble: {
    flex: 4,
    flexBasis: 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDouble: {height: 120, borderRadius: 10, lineHeight: 120},
  textDoubleHorizontal: {width: 120, borderRadius: 10},
  displayText: {fontSize: 30, fontWeight: 'bold'},
});

export default Calculator;
