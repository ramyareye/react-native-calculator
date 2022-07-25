import React from 'react';
import {View} from 'react-native';

import {Matrix} from 'components';

import Toggle from './Toggle';
import Calculator from './Calculator';

import styles from './styles';

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

export default Home;
