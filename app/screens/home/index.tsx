import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useTheme} from 'providers/theme';

import Toggle from './Toggle';
import Calculator from './Calculator';

const Home = () => {
  const {theme} = useTheme();

  return (
    <View style={styles.screen}>
      <View style={[styles.top, {backgroundColor: theme.colors.background}]}>
        <Calculator />
      </View>

      <View style={[styles.bottom, {backgroundColor: theme.colors.card}]}>
        <Toggle />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
