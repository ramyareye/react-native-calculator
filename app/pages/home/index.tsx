import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';

import {useAppDispatch, useAppSelector} from 'store';
import {decrement, increment} from 'store/calculatorSlice';

const Home = () => {
  const count = useAppSelector(state => state.calculator.value);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.screen}>
      <View style={[styles.box, styles.white]} />
      <View style={[styles.box, styles.green]} />
      <View style={[styles.box, styles.black]} />
      <View style={[styles.box, styles.orange]} />
      <View style={[styles.box, styles.gray]} />
      <View style={[styles.box, styles.gray_light]} />
      <Pressable onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </Pressable>
      <Text>{count}</Text>
      <Pressable onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#007F7F',
  },
  box: {
    width: 100,
    height: 100,
  },
  white: {
    backgroundColor: '#556B2E',
  },
  green: {
    backgroundColor: '#556B2E',
  },
  black: {
    backgroundColor: '#272727',
  },
  orange: {
    backgroundColor: '#272727',
  },
  gray: {
    backgroundColor: '#585858',
  },
  gray_light: {
    backgroundColor: '#808080',
  },
});

export default Home;
