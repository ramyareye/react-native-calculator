import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Matrix} from 'components';

import Toggle from './Toggle';
import Calculator from './Calculator';

const Home = () => {
  return (
    <View style={styles.screen}>
      <Matrix style={styles.matrix} />
      <View style={styles.top}>
        <Calculator />
      </View>

      <View style={styles.bottom}>
        <Toggle />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  matrix: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  top: {
    flex: 1,
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
