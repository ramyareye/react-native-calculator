import React from 'react';
import {StyleSheet, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.screen}>
      <View style={[styles.box, styles.white]} />
      <View style={[styles.box, styles.green]} />
      <View style={[styles.box, styles.black]} />
      <View style={[styles.box, styles.orange]} />
      <View style={[styles.box, styles.gray]} />
      <View style={[styles.box, styles.gray_light]} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
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
